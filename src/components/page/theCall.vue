<template>
    <div>
        <h1>THE CALL</h1>
        <router-link :to="{name:'rate'}">Rate</router-link>
    </div>
</template>

<script>
export default {
  name: "theCall",
  data() {
    let client = AgoraRTC.createClient({ mode: "live", codec: "h264" });
    client.init(
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
      "caller",
      uid => {
        console.log("User " + uid + " join channel successfully");
      },
      err => {
        console.log("Join channel failed", err);
      }
    );
    localStream = AgoraRTC.createStream({
      // create video/audio stream
      streamID: uid,
      audio: true,
      video: true,
      screen: false
    });

    localStream.init(
      // initalize audio/video stream
      () => {
        console.log("getUserMedia successfully");
        localStream.play("agora_local");
      },
      err => {
        console.log("getUserMedia failed", err);
      }
    );

    client.publish(localStream, err => {
      // publish stream to channel
      console.log("Publish local stream error: " + err);
    });

    client.on("stream-published", evt => {
      // occurs after stream publishes
      console.log("Published local stream successfully");
    });

    client.on("stream-added", evt => {
      // subscribes to stream when new stream added to channel
      var stream = evt.stream;
      console.log("New stream added: " + stream.getId());

      client.subscribe(stream, err => {
        console.log("Subscribe stream failed", err);
      });
    });

    client.on("stream-subscribed", evt => {
      // plays stream once subscribed
      var remoteStream = evt.stream;
      console.log("Subscribe remote stream successfully: " + stream.getId());
      stream.play("agora_remote" + stream.getId());
    });

    return {};
  }
};
</script>

<style>
</style>
