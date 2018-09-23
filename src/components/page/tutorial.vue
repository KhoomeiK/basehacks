<template>
    <div>
      <header id="not-main-page">
      <router-link :to="{name:'homePage'}"><h1 id="not-main-page-company-name"><strong>We & You</strong></h1></router-link>
      <div id="not-main-page-nav-bar">
        <headerlinks/>
      </div>
    </header>

    <section id="education">
      <h2 v-if="!exam">Curriculum &mdash; Index</h2>
      <notes v-if="!exam"/>
      <li v-if="!exam">
        <a class="btn btn-full" @click="exam=!exam">Take Exam</a>
      </li>
      <ul v-if="exam">
        <li><strong>Exam</strong></li>
        <strong>Instructions: In order to be volunteer on this site, you go through a verification process before becoming a volunteer. This is a short quiz that will assess your knowledge so far.</strong>
        <li v-for="(question,i) in questions" :key="i">
          {{i+1}}). {{question.q}}
          <div class="question">
            <label class="container" v-for="(answer,index) in question.answers" :key="index" @click="questions[i].v=index">{{answer}}
              <input type="radio" :name="'question'+i" :value="index">
              <span class="checkmark"></span>
            </label>
          </div>
        </li>
        <li style="text-align:center">
          <a class="btn btn-full" @click="submit()">Submit</a>
          <p style="color:red;">{{feedback}}</p>
        </li>
      </ul>
    </section>

    <footerlinks/>
    </div>
</template>

<script>
import notes from "@/components/misc/notes";
import firebase from "firebase";
let db = firebase.firestore();
import footerlinks from "@/components/misc/footerlinks";
import headerlinks from "@/components/misc/headerlinks";
export default {
  name: "tutorial",
  data() {
    return {
      lessons: [false, false, false, false, false, false, false, false, false],
      exam: false,
      questions: [
        {
          q: "Who is going to seek your support on this platform? Why?",
          answers: [
            "Adults will seek support here because they suffer from marital problems.",
            "Veterans will seek support here because the need help coping with PTSD.",
            "Teens will seek support here because they want to talk to other teens about their mental health issues.",
            "Adults will seek support here because they suffer from anxiety or depression."
          ],
          correct: 2,
          v: null
        },
        {
          q:
            "What kinds of listening should you do when speaking to a client through a call?",
          answers: [
            "Active and Verbal",
            "Silent and Active",
            "Verbal and Disinterested",
            "Active and Interruptive"
          ],
          correct: 0,
          v: null
        },
        {
          q: "Open questions are less effective than closed questions.",
          answers: ["TRUE", "FALSE"],
          correct: 1,
          v: null
        },
        {
          q: "In general, what does anxiety stem from?",
          answers: [
            "Expired food",
            "A bad day",
            "Boring classes at school",
            "Worry"
          ],
          correct: 3,
          v: null
        },
        {
          q:
            "What is something important that you have to tell a client specifically seeking support for depression?",
          answers: [
            "You have it so good, why aren’t you happy?",
            "Happiness is a choice.",
            "You’ll feel better if you start going to church.",
            "You are not alone."
          ],
          correct: 3,
          v: null
        },
        {
          q: "Which of the following list examples of each kind of abuse?",
          answers: [
            "Yelling, Beating, Rape",
            "Rape, Whipping, Beating",
            "Saying Hello, Yelling, Force-feeding",
            "Talking, Homophobic remarks, Dancing"
          ],
          correct: 0,
          v: null
        },
        {
          q:
            "How many times more likely is LGBTQ+ youth to commit suicide than straight, cisgender youth?",
          answers: ["Same", "2", "3", "4"],
          correct: 3,
          v: null
        },
        {
          q:
            "Teens that are self harming should use alternative healthier coping mechanisms.",
          answers: ["TRUE", "FALSE"],
          correct: 0,
          v: null
        },
        {
          q:
            "You must passionately argue with a suicidal client until they say they will not harm themselves.",
          answers: ["TRUE", "FALSE"],
          correct: 1,
          v: null
        },
        {
          q:
            "Tell actively suicidal clients who refuse to make a safety plan to go to an emergency room.",
          answers: ["TRUE", "FALSE"],
          correct: 0,
          v: null
        },
        {
          q: "Who can you discriminate against?",
          answers: [
            "A suicidal, Jewish individual",
            "People who like pineapple on pizza",
            "Asian Americans who have anxiety",
            "Nobody"
          ],
          correct: 3,
          v: null
        }
      ],
      feedback: null
    };
  },
  methods: {
    toggle(i) {
      this.$set(this.lessons, i, !this.lessons[i]);
    },
    submit() {
      let correct = 0;
      let outof = this.questions.length;
      this.questions.forEach(q => {
        if (q.correct == q.v) correct++;
      });
      if (correct == outof) {
        let ref = db.collection("users").doc(firebase.auth().currentUser.uid);
        ref
          .update({
            verified: true
          })
          .then(() => {
            this.$router.push({ name: "dashboard" });
          });
      } else {
        this.feedback = "You got " + (outof - correct) + " questions wrong.";
      }
    }
  },
  components: {
    footerlinks,
    headerlinks,
    notes
  }
};
</script>

<style>
.question {
  margin-top: 25px;
  padding-left: 50px;
}
.question label {
  padding-left: 30px;
}
</style>
