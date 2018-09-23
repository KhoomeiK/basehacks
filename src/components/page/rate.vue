<template>
    <div>
        <h1>RATE</h1>
        <input type="radio" value="better" name="feeling"> I feel better
        <input type="radio" value="same" name="feeling"> I feel the same
        <input type="radio" value="worse" name="feeling"> I feel worse
        
        <br><br>
        <textarea placeholder="Comments" v-model="comment"/>
        <br>
        <button @click="submit()" > Submit </button>
    </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: "rate",
  methods: {
    async submit() {
      let id = "KLwFrH3FcyNkcrOyAsdY"; // this needs to be received from call
      console.log(this.comment);
      let call = firebase.functions().httpsCallable("sentiment");
      call(this.comment).then(res => {
        let point = Math.round(res.data * 10);
        console.log(point);
        firebase.firestore().collection("users").doc(id).get().then(res => {
          let points = res.data().points + point;
          let calls = res.data().calls + 1;
          firebase.firestore().collection("users").doc(id).update({
            points,
            calls
            });
        });
      });
    }
  },
  data() {
    return {
      comment: null
    };
  }
};
</script>

<style>
</style>
