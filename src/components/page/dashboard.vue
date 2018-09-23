<template>
    <div v-if="mydata">
      <header id="not-main-page">
      <router-link :to="{name:'homePage'}"><h1 id="not-main-page-company-name"><strong>We & You</strong></h1></router-link>

      <div id="not-main-page-nav-bar">
        <headerlinks/>
      </div>

    </header>

    <section id="dashboard" >
      <h2>{{mydata.firstName}} {{mydata.lastName}} Dashboard</h2>
      <p id="middle">
        <span v-if="mydata.calls>1">You've made {{mydata.calls}} lives better!</span>
        <span v-if="mydata.calls==1">You've a life better!</span>
        <span v-if="mydata.calls==0">Let's make someones day better.</span>
      </p>
      <div id="switch">
      <label class="switch">
        <input type="checkbox" @click="toggleReady()">
        <span class="slider round"></span>
      </label>
      <p id="right"><span v-if="!ready">Not</span> Ready</p>
    </div>
    <div class="rect">
      <div class="video-container">
        <div id="agora_local" class="video"> </div>
        <div id="agora_remote" class="video"> </div>
      </div>
    </div>
      <p id="quote" v-if="!ready">"Motivational Quote BTW"</p>
      <h2>Comments</h2>
      <p>"OMG! Elliot Ha has helped me overcome depression and cancer and now I'm a billionaire!"</p>
      <br><br><br>
      <h2>Resources</h2>
      <ul>
        <li><a href="ree">reee</a></li>
      </ul>
    </section>

    <footerlinks/>
    </div>
</template>

<script>
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

      if (this.ready) {
        console.log("ready!");
        let client = AgoraRTC.createClient({ mode: "live", codec: "h264" });
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

        let localStream = AgoraRTC.createStream({
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
          var stream = evt.stream;
          console.log("New stream added: " + stream.getId());

          client.subscribe(stream, function(err) {
            console.log("Subscribe stream failed", err);
          });
        });

        client.on("stream-subscribed", function(evt) {
          // plays stream once subscribed
          var remoteStream = evt.stream;
          console.log(
            "Subscribe remote stream successfully: " + remoteStream.getId()
          );
          remoteStream.play("agora_remote");
        });
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
    headerlinks
  }
};
</script>

<style>
.call-dashboard {
  text-align: center;
}
.video-container {
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 10px;
}
.video {
  display: inline-block;
  height: 500px;
}
</style>
