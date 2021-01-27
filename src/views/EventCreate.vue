<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="createEvent">
      
      <BaseSelect
        label="Select a category"
        :options="categories"
        class="field"
        v-model="event.category"
      />

        <!-- v-model="event.category"
        :class="{ error: $v.event.category.$error }"
        @blur="$v.event.category.$touch()" -->
      <!-- <template v-if="$v.event.category.$error">
        <p v-if="!$v.event.category.required" class="errorMessage">Category is required.</p>
      </template> -->

      <h3>Name & describe your event</h3>
      <!-- <div class="field"> -->
        <BaseInput
          label="Title"
          placeholder="Add an event title"
          type="text"
          v-model="event.title"
          class="field"
        />
      <!-- </div> -->
      
       <!-- /*
        @blur="$v.event.title.$touch()"
        :class="{ error: $v.event.title.$error }"
        */ -->
      
        <BaseInput
          label="Descritpion"
          placeholder="Add a description"
          type="text"
          v-model="event.description"
          class="field"
        />
      

      <!-- <template v-if="$v.event.title.$error">
        <p v-if="!$v.event.title.required" class="errorMessage">Title is required.</p>
      </template> -->

      <!-- <BaseInput
        label="Description"
        v-model="event.description"
        type="text"
        placeholder="Description"
        class="field"
        :class="{ error: $v.event.description.$error }"
        @blur="$v.event.description.$touch()"
      /> -->

      <!-- <template v-if="$v.event.description.$error">
        <p v-if="!$v.event.description.required" class="errorMessage">Description is required.</p>
      </template> -->

      <h3>Where is your event?</h3>
       <BaseInput
          label="Location"
          placeholder="Add a location"
          type="text"
          v-model="event.location"
          class="field"
        />
     
     <!--  <BaseInput
        label="Location"
        v-model="event.location"
        type="text"
        placeholder="Location"
        class="field"
        :class="{ error: $v.event.location.$error }"
        @blur="$v.event.location.$touch()"
      /> -->

      <!-- <template v-if="$v.event.location.$error">
        <p v-if="!$v.event.location.required" class="errorMessage">Location is required.</p>
      </template> -->

      <h3>When is your event?</h3>

      <div class="field">
        <label>Date</label>
        <datepicker
          v-model="event.date"
          placeholder="Select a date"          
        />
      </div>
      
      <BaseSelect
        label="Select a time"
        :options="computedTimes"
        class="field"
        v-model="event.time"
      />
      <!-- :input-class="{ error: $v.event.date.$error }"
          @opened="$v.event.date.$touch()" -->

      <!-- <template v-if="$v.event.date.$error">
        <p v-if="!$v.event.date.required" class="errorMessage">Date is required.</p>
      </template> -->

      <!-- <BaseSelect
        label="Select a time"
        :options="times"
        v-model="event.time"
        class="field"
        :class="{ error: $v.event.time.$error }"
        @blur="$v.event.time.$touch()"
      /> -->

     <!--  <template v-if="$v.event.time.$error">
        <p v-if="!$v.event.time.required" class="errorMessage">Time is required.</p>
      </template> -->

      <!-- <BaseButton type="submit" buttonClass="-fill-gradient" :disabled="$v.$anyError">Submit</BaseButton> -->
          <!-- <button type="submit" buttonClass="-fill-gradient">Submit</button> -->
          <BaseButton type="submit" buttonClass="-fill-gradient">Sumbit</BaseButton>
      <p class="errorMessage">Please fill out the required field(s).</p>
    </form>
    <BaseButton type="button" @click="sendMessage">Send an email</BaseButton>
  </div>
</template>

<script>
import datepicker from 'vuejs-datepicker'
import NProgress from 'nprogress'
export default {

  name: 'EventCreate',

  components: {
    datepicker
  },

  data () {
    return {
      event: this.createFreshEventObject(),
      categories: this.$store.state.categories,
      times: []
    }
  },
  methods: {
    createEvent() {
      NProgress.start()
      this.$store
      .dispatch('events/createEvent', this.event)
      .then(() => {
        this.$router.push({
          name: 'event-show',
          params: { id: this.event.id }
        })
        this.event = this.createFreshEventObject();
      }).catch(() => {
        NProgress.done()
      })      
    },
    createFreshEventObject() {
     const user = this.$store.state.user.user    
      const id = Math.floor(Math.random() * 10000000)
      return {
        id: id,
        user: user,
        category: '',
        organizer: user.name,
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        attendees: []
      }
    },
    changeTitle(value) {
      this.title
    },
    sendMessage() {
      console.log('the message has been sent')
    }
  },
  computed: {
    computedTimes() {
      for (let i = 1; i <= 24; i++){
        this.times.push(i + ':00')
      }
      return this.times
    },
  } 
}
</script>

<style lang="scss" scoped>
  li {
    text-align: left;
  }
  .field {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: flex-start;
    width: 100%;
  }
  input, select {
    width: 100%;
    margin: 5px 0;
    height: 30px;
  }
  label {
    margin-top: 5px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
</style>