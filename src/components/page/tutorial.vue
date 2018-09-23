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
      <ul id="curriculum-index" v-if="!exam">
        <li @click="toggle(0)"><a class="non-btn"><strong>Mission Statement</strong></a></li>
        <p v-if="lessons[0]">
          We&You is for a platform for teenagers who wants to live in a world where the human experience is free from stigma and stereotypes and rich with love and support. Teens would prefer talking to other teens about their mental health issues.We believe that each one of us is inherently valuable. We do not measure people based on where they are from, what they look like, or what position they hold. We recognize that people make sense in the larger story of their lives. We understand that people are complicated and that life is not simple or easy. No matter where we are, being kind, compassionate, and accepting of one another enables us all to grow.We do not tolerate people being mean, harmful, or rejecting of others. Although there are forces that tend to disempower and create division, we stand together as we compassionately care for and champion one another.  We see our differences as a strength. We are united in our shared goal of creating a place where all can find acceptance and be welcomed to a home where we all belong.
        </p>
        <li @click="toggle(1)"><a class="non-btn"><strong>Lesson 1</strong> &mdash; Tips for Communication</a></li>
        <div v-if="lessons[1]">
          <p>Listening:<br>Active listening and Verbal listening: Learn to use virtual listening to show attention and to encourage more exploration from the client. In video or audio calls,you can show that you are listening by giving verbal cues such as ‘Ok’, ‘Uh huh”, etc. It can also be in the form of paraphrasing or repeating a word of emotion that the client has just said.</p>
          <p>Asking Questions:<br>Questions are helpful because they allow you to learn more about your client. The type of questions that you ask will set the tone of the session and the entire counseling process. Questions occur in two forms.<br>Closed: A closed question is the practice of asking a question that can be answered as a ‘yes’ or ‘no’. Closed questions should generally be avoided in the counseling relationship, as they do not encourage deeper exploration.<br>Open: An open question is necessary to gather information. An open question is one that cannot be answered with a simple ‘yes’ or ‘no’ and it requires reflection or exploration on the client’s end. Every open question should be intentional and therapeutic. These questions usually begin with ‘how’ or ‘why’.</p>
          <p>Reflection:<br>
            Feelings reflections:  Reflections allow clients to hear the feelings they have just expressed. Sometimes you have to look for the descriptive feeling in a client’s statement.<br>
            Restating/Rephrasing: Restating and rephrasing can build a stronger client therapist relationship. Rephrasing a client’s statement allows you to better understand what a client has just said and to gain further clarity, if you have gotten it wrong.<br>
            Affirmation: Affirmation is a form of encouragement that is used to affirm behaviors or life choices. A few common affirmations include affirming progress that a client has made toward a goal or encouraging a client to do what is important to them.</p>

          <p>Empathy:<br>
            Empathy is the ability to put yourself in someone else’s shoes. It is much more than sympathy in that you are able to show your understanding of your clients feeling surrounding an experience.</p>

          <p>Genuineness:<br>
            Begin genuine is creating congruence between yourself and your words. Every therapist is different and will provide a different therapeutic process. It is important to remain genuine in all counseling techniques.</p>

          <p>Unconditional Positive Regard:<br>
            Demonstrating unconditional positive regard is the idea of accepting your client for who they are.</p>
        </div>
        <li @click="toggle(2)"><a class="non-btn"><strong>Lesson 2</strong> &mdash; Anxiety & Stress</a></li>
        <div v-if="lessons[2]">
          <p>
          Anxiety is really just a form of stress. It can be experienced in many different ways — physically, emotionally, and in the way people view the world around them. Anxiety mainly relates to worry about what might happen — worrying about things going wrong or feeling like you're in some kind of danger.
          <br><br>
          Anxiety is a natural human reaction, and it serves an important biological function: It's an alarm system that's activated whenever we perceive danger or a threat. When the body and mind react, we can feel physical sensations, like dizziness, a rapid heartbeat, difficulty breathing, and sweaty or shaky hands and feet. These sensations — called the fight–flight response — are caused by a rush of adrenaline and other stress hormones that prepare the body to make a quick getaway or "flight" from danger.
          <br><br>
          In general, with anxiety, people worry excessively about many things, such as school, the health or safety of family members, or the future in general. They may always think of the worst that could happen. Their worries might cause them to miss school or avoid social activities. With generalized anxiety, worries can feel like a burden, making life feel overwhelming or out of control.
          <br><br>
          Communicate with the client to learn more about where the anxiety stems from. Talk them through why they might feel that way. Offer meditation/relaxation resources.
          </p>
        </div>
        <li @click="toggle(3)"><a class="non-btn"><strong>Lesson 3</strong> &mdash; Depression</a></li>
        <div v-if="lessons[3]">
          <p>
          Depression is a strong mood involving sadness, discouragement, despair, or hopelessness that lasts for weeks, months, or even longer.Depression interferes with more than a person’s mood. It affects thinking,too. It interferes with the ability to notice or enjoy good things in life. Depression drains energy, motivation, and concentration needed in a person’s life.
          <br><br>
          As a volunteer, communicate to identity the cause or causes for the client’s depression. Tell them that they are not alone. Sometimes, people suffering from depression just need someone to talk to.
          </p>
        </div>
        <li @click="toggle(4)"><a class="non-btn"><strong>Lesson 4</strong> &mdash; Emotional & Physical Abuse</a></li>
        <div v-if="lessons[4]">
          <p>
          Abuse can be physical, sexual, emotional, verbal, or a combination of any or all of these. Family violence can affect anyone. It can happen in any kind of family. Sometimes parents abuse each other, which can be hard for a child to witness. Some parents abuse their kids by using physical or verbal cruelty as a way of discipline.Abuse can also take the form of hate crimes directed at people just because of their race, religion, abilities, gender, or sexual orientation. Many teens who have experienced abuse find that painful emotions may linger even after the abuse stops.
          <br><br>
          Ask and listen to them explaining their situation. Advise them to report the abuse to a close relative or a school counselor.  Also, remind them to call 911 if they are in immediate danger.
          </p>
        </div>
        <li @click="toggle(5)"><a class="non-btn"><strong>Lesson 5</strong> &mdash; Sexuality and its Effect</a></li>
        <div v-if="lessons[5]">
          <p>
          LGBTQ+ (Lesbian, Gay, Bisexual, Transgender, Queer +):
          <br><br>
          As compared to people that identify as straight and cisgender, LGBT individuals are 3 times more likely to experience a mental health condition.
          <br><br>
          LGBT youth are 4 times more likely to attempt suicide, experience suicidal thoughts, and engage in self-harm, as compared to youths that are straight.
          <br><br>
          45-65% of transgender individuals experience suicidal ideation.
          <br><br>
          These statistics show the importance for mental health support for LGBTQ+ teens in our community. We can support them through this website. Volunteers must be welcoming and respectful to people of all sexual orientations and gender identities.
          </p>
        </div>
        <li @click="toggle(6)"><a class="non-btn"><strong>Lesson 6</strong> &mdash; Self Harm</a></li>
        <div v-if="lessons[6]">
          <p>
          Self-injury is a serious response to stress, depression, fear, or distress. Self-injury, whether by cutting, burning, or otherwise hurting oneself, affects many people of all ages. In 2010, 713,000 Americans visited the emergency department due to self-inflicted injuries (Centers for Disease Control and Prevention, 2010). Overcoming the urge to self-harm can be difficult without understanding what drives people to self-harm and learning healthier alternative coping strategies.
          </p>
        </div>
        <li @click="toggle(7)"><a class="non-btn"><strong>Lesson 7</strong> &mdash; Suicidal Individuals</a></li>
        <div v-if="lessons[7]">
          <p>
          Talking to a suicidal client can be difficult. Here are some main tips:
          </p>
          <ul class="list-bulleted">
            <li>Be direct. Talk openly and matter-of-factly about suicide.</li>
            <li>Be willing to listen. Allow expressions of feelings. Accept the feelings.</li>
            <li>Be non-judgmental. Don’t debate whether suicide is right or wrong, or whether feelings are good or bad. Don’t lecture on the value of life.</li>
            <li>Show interest and support.</li>
            <li>Don’t dare him or her to do it.</li>
            <li>Don’t act shocked. This will put distance between you.</li>
            <li>Don’t be sworn to secrecy. Seek support.</li>
            <li>Offer hope that alternatives are available but do not offer glib reassurance.</li>
          </ul>
          <p>
          Make a safety plan with them. Have them commit to safety for 24 hours. Show that you are listening. Tell them that they are not alone and that it will get better. If they are in immediate crisis, tell them to call 911 or go to the nearest emergency room to seek support.
          </p>
        </div>
        <li @click="toggle(8)"><a class="non-btn"><strong>Lesson 8</strong> &mdash; Mindset & Pledge</a></li>
        <div v-if="lessons[8]">
          <p>
          I will show kindness and compassion to all those I interact with.
          <br>
          I will work towards bettering my health every time I log on.
          <br>
          I will show respect and never violate the boundaries of my fellow members or listeners.
          <br>
          I will take ownership of my mental health and be forthcoming to build supportive relationships which encourage this endeavor.
          <br>
          I will respect the time, love and commitment to volunteers every day.
          <br>
          I will use the resources provided to me to continue to learn and grow.
          <br>
          I will believe in myself and understand that everyone's personal journey is unique.
          <br>
          I will take every interaction I have on We & You as an opportunity to grow and learn.
          <br>
          I will honor the challenges presented to me in my life, believing in my soul, that no matter, how challenging, I can overcome.
          <br>
          I will lean on the community in my time of need and I will let others lean on me in their time of need.
          <br>
          I recognize that my behavior is a reflection of me. I take ownership of my actions and will be thoughtful in all my interactions.
          <br>
          I will keep these promises as a means of showing myself and the community that I am dedicated to my personal health and the betterment of the entire We & You community.
          </p>
        </div>
        <li>
          <a class="btn btn-full" @click="exam=!exam">Take Exam</a>
        </li>
      </ul>
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
    headerlinks
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
