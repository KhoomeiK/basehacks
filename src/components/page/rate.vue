<template>
    <div>
        <h1>RATE</h1>
        <input type="radio" value="better" v-model="feeling"> I feel better
        <input type="radio" value="same" v-model="feeling"> I feel the same
        <input type="radio" value="worse" v-model="feeling"> I feel worse
        
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
      console.log(this.id);
      console.log(this.comment);
      console.log(this.feeling);
      let call = firebase.functions().httpsCallable("sentiment");
      call(this.comment).then(res => {
        let point = Math.round(res.data * 10);
        console.log(point);
        firebase.firestore().collection("users").doc(this.id).get().then(res => {
          let points = res.data().points + point;
          let calls = res.data().calls + 1;
          firebase.firestore().collection("users").doc(this.id).update({
            points,
            calls
            });
        });
      });
    }
  },
  data() {
    return {
      comment: null,
      feeling: null,
      id: this.$route.params.id
    };
  }
};
</script>

<style>
</style>
