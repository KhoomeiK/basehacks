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
console.log(firebase.functions());

export default {
  name: "rate",
  methods: {
    submit() {
      console.log(this.comment);
      // call to sentiment API to get sentiment
      // Instantiates a client
      // const client = new language.LanguageServiceClient();

      // The text to analyze
      // const text = "Hello, world!";

      // const document = {
      //   content: text,
      //   type: "PLAIN_TEXT"
      // };

      // // Detects the sentiment of the text
      // client
      //   .analyzeSentiment({ document: document })
      //   .then(results => {
      //     const sentiment = results[0].documentSentiment;

      //     console.log(`Text: ${text}`);
      //     console.log(`Sentiment score: ${sentiment.score}`);
      //     console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
      //   })
      //   .catch(err => {
      //     console.error("ERROR:", err);
      //   });
      // convert sentiment to karma
      // call to volunteer's firestore doc and get current karma
      // add to new karma and update firestore doc
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
