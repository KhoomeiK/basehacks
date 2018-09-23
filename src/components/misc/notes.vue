<template>
<div id="notes">
    <ul id="curriculum-index">
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
      </ul>
    </div>
</template>

<script>
export default {
  name: "notes",
  data() {
    return {
      lessons: [false, false, false, false, false, false, false, false, false]
    };
  },
  methods: {
    toggle(i) {
      this.$set(this.lessons, i, !this.lessons[i]);
    }
  }
};
</script>

<style>
#notes{
  padding: 40px;
}
</style>

