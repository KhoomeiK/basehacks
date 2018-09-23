<template>
    <div>
      <h1>THE CALL</h1>
      <div class="video-container">
        <div id="agora_local" class="video"></div>
        <div id="agora_remote" class="video"></div>
      </div>
      <router-link :to="{name:'rate'}">Rate</router-link>
    </div>
</template>

<script>
export default {
  name: "theCall",
  async created() {
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
      "testChannel",
      1, // CHANGE THIS UID
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
  },
  data() {
    return {};
  }
};
</script>

<style>
.video-container {
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 10px;
}
.video{
  display: inline-block;
  height: 500px;
}
</style>