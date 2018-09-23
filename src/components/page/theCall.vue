<template>
    <div>
      <h1>THE CALL</h1>
      <div id="agora_local"> </div>
      <div id="agora_remote"> </div>
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
      1,
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
        console.log(document.getElementById("agora_local"));
        localStream.play("agora_local");
      },
      function(err) {
        console.log("getUserMedia failed", err);
      }
    );

    console.log("about to publish");
    client.publish(localStream, function(err) {
      // publish stream to channel
      console.log("Publish local stream error: " + err);
    });
    console.log("published");

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
      console.log("Subscribe remote stream successfully: " + stream.getId());
      stream.play("agora_remote");
    });
  },
  data() {
    return {};
  }
};
</script>

<style>
#player_1 {
  position: absolute !important;
  width: 50% !important;
  height: 50% !important;
}
#player_2 {
  position: absolute !important;
  width: 50% !important;
  height: 50% !important;
}
</style>