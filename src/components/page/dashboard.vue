<template>
    <div v-if="mydata">
      <header id="not-main-page">
      <router-link :to="{name:'homePage'}"><h1 id="not-main-page-company-name"><strong>We & You</strong></h1></router-link>

      <div id="not-main-page-nav-bar">
        <headerlinks/>
      </div>

    </header>

    <section id="dashboard" >
      <h2>{{mydata.firstName}}'s Dashboard</h2>
      <p id="middle">
        <span v-if="mydata.calls>1">You've made {{mydata.calls}} lives better!</span>
        <span v-if="mydata.calls==1">You've made a life better!</span>
        <span v-if="mydata.calls==0">Let's make someones life better.</span>
      </p>
      <div id="switch">
        <label class="switch">
          <input type="checkbox" @click="toggleReady()">
          <span class="slider round"></span>
        </label>
        <p id="right"><span v-if="!ready">Not</span> Ready</p>
      <p style="float: right; margin-right: 100px"> Karma: {{mydata.points}} </p>
      </div>
      <div class="rect">
        <div class="video-container" v-if="ready">
          <div id="agora_remote" class="video"> </div>
          <div id="agora_local" class="video"> </div>
        </div>
      </div>
      <div v-if="mydata.comment">
        <p id="quote" v-if="!ready">Make someone's day.</p>
        <h2>Comment</h2>
        <p>"{{mydata.comment}}"</p>
      </div>
      <h2> Resources </h2>
      <notes/>
    </section>
    <footerlinks/>
    </div>
</template>

<script>
import notes from "@/components/misc/notes";
import footerlinks from "@/components/misc/footerlinks";
import headerlinks from "@/components/misc/headerlinks";
import firebase from "firebase";
let db = firebase.firestore();
export default {
  name: "dashboard",
  data() {
    return {
      ready: false,
      mydata: null
    };
  },
  methods: {
    async toggleReady() {
      this.setRead(!this.ready);

      let client = AgoraRTC.createClient({ mode: "live", codec: "h264" });
      let stream = "";
      let localStream = "";

      if (this.ready) {
        console.log("ready!");
        await client.init(
          // initialize Agora
          "2fdcc95bd67a45e996a0349e87bf0654",
          () => {
            console.log("AgoraRTC client initialized");
          },
          err => {
            console.log("AgoraRTC client init failed", err);
          }
        );

        client.join(
          // join to channel
          null,
          this.mydata.id,
          0,
          function(uid) {
            console.log("User " + uid + " join channel successfully");
          },
          function(err) {
            console.log("Join channel failed", err);
          }
        );

        localStream = AgoraRTC.createStream({
          // create video/audio stream
          streamID: 1,
          audio: true,
          video: true,
          screen: false
        });

        localStream.init(
          // initalize audio/video stream and play local stream on DOM
          function() {
            console.log("getUserMedia successfully");
            // Use agora_local as ID of the dom element
            localStream.play("agora_local");

            client.publish(localStream, function(err) {
              // publish stream to channel
              console.log("Publish local stream error: " + err);
            });
          },
          function(err) {
            console.log("getUserMedia failed", err);
          }
        );

        client.on("stream-published", function(evt) {
          // occurs after stream publishes
          console.log("Published local stream successfully");
        });

        client.on("stream-added", function(evt) {
          // subscribes to stream when new stream added to channel
          stream = evt.stream;
          console.log("New stream added: " + stream.getId());

          client.subscribe(stream, function(err) {
            console.log("Subscribe stream failed", err);
          });
        });

        client.on("stream-subscribed", function(evt) {
          // plays stream once subscribed
          let remoteStream = evt.stream;
          console.log(
            "Subscribe remote stream successfully: " + remoteStream.getId()
          );
          remoteStream.play("agora_remote");
        });
      } else {
        console.log("not ready");
        client.unpublish(stream, function(err) {
          console.log("stream unpublished");
        });
        client.unsubscribe(stream, function(err) {
          console.log("stream unsubscribed");
        });
        client.leave(
          function() {
            console.log("Left channel successfully");
          },
          function(err) {
            console.log("Leave channel failed");
          }
        );
      }
    },
    setRead(val) {
      let ref = db.collection("users").doc(firebase.auth().currentUser.uid);
      ref.update({
        ready: val
      });
      this.ready = val;
    }
  },
  beforeRouteLeave(to, from, next) {
    if (!firebase.auth().currentUser) next();
    let ref = db.collection("users").doc(firebase.auth().currentUser.uid);
    if (this.ready) {
      ref.update({ ready: false }).then(() => {
        next();
      });
    } else next();
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user.email) this.setRead(false);
      let ref = db.collection("users").doc(firebase.auth().currentUser.uid);
      ref.get().then(snapshot => {
        this.mydata = snapshot.data();
        this.mydata.id = firebase.auth().currentUser.uid;
      });
    });
  },
  components: {
    footerlinks,
    headerlinks,
    notes
  }
};
</script>

<style>
.call-dashboard {
  text-align: center;
}
.video-container {
  padding: 0px;
}
.video {
  display: inline-block;
  height: 100%;
  width: 100%;
}
#agora_local {
  width: 170px;
  height: 170px;
  position: relative;
  display: block;
  margin-top: -174px;
  float: right;
}
video {
  position: relative !important;
}
#agora_remote div {
  max-height: 600px;
}
#agora_remote {
  min-height: 600px;
}
#switch label {
  z-index: 1000;
}
#right {
  z-index: 1000;
}
</style>
