<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="createEvent">
      
      <BaseSelect
        label="Select a category"
        :options="categories"
        class="field"
        v-model="event.category"
        :errorClass="$v.event.category.$error"
        @blur="$v.event.category.$touch()"
      />

        <!-- :class="{ error: $v.event.category.$error }" -->
      <template v-if="$v.event.category.$error">
        <p class="errorMessage" v-if="!$v.event.category.required">Category is required</p>
      </template>

      <h3>Name & describe your event</h3>
        <BaseInput
          label="Title"
          placeholder="Add an event title"
          type="text"
          v-model="event.title"
          class="field"
          :errorClass="$v.event.title.$error"
          @blur="$v.event.title.$touch()"
        />

          <!-- :class="{ error: $v.event.title.$error }" -->
      <template v-if="$v.event.title.$error">
        <p class="errorMessage" v-if="!$v.event.title.required">Title is required</p>
      </template>

      <BaseInput
        label="Descritpion"
        placeholder="Add a description"
        type="text"
        v-model="event.description"
        class="field"
        :errorClass="$v.event.description.$error"
        @blur="$v.event.description.$touch()"
      />
      <template v-if="$v.event.description.$error">
        <p class="errorMessage" v-if="!$v.event.description.required">description is required</p>
      </template>

      <h3>Where is your event?</h3>
      <BaseInput
        label="Location"
        placeholder="Add a location"
        type="text"
        v-model="event.location"
        class="field"
        :errorClass="$v.event.location.$error"
        @blur="$v.event.location.$touch()"
      />
      <p class="errorMessage" v-if="!$v.event.location.required">Location is required</p>

      <h3>When is your event?</h3>
      <div class="field">
        <label>Date</label>       
        <datepicker
          v-model="event.date"
          placeholder="Select a date"
          :input-class="{ error: $v.event.date.$error }"
          @opened="$v.event.date.$touch()"
        />
      </div>
      <!-- @opened="$v.event.date.$touch()" -->
      <template v-if="$v.event.date.$error">
        <p v-if="!$v.event.date.required" class="errorMessage">Date is required.</p>
      </template>
      
      <BaseSelect
        label="Select a time"
        :options="computedTimes"
        class="field"
        v-model="event.time"
        :errorClass="$v.event.time.$error"
        @blur="$v.event.time.$touch()"
      />
      <template v-if="$v.event.time.$error">
        <p class="errorMessage" v-if="!$v.event.time.required">Time is required</p>
      </template>

      <BaseButton type="submit" buttonClass="-fill-gradient" :disabled="$v.$anyError">Sumbit</BaseButton>
      <p v-if="$v.$anyError" class="errorMessage">Please fill out the required field(s).</p>
      
    </form>
    <BaseButton type="button" @click="sendMessage">Send an email</BaseButton>
  </div>
</template>

<script>
import datepicker from '@hokify/vuejs-datepicker'
import NProgress from 'nprogress'
import { required, email } from 'vuelidate/lib/validators'
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
      this.$v.$touch()
      if(!this.$v.$invalid){

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
      }     
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

  validations: {
    event: {
      category: { required },
      title: { required },
      description: { required },
      location: { required },
      date: { required },
      time: { required },
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

<style lang="scss">
  li {
    text-align: left;
  }
  .vdp-datepicker__calendar {
    position: absolute;
    z-index: 100;
    background: #fff;
    width: 300px;
    border: 1px solid #ccc;
  }
  .vdp-datepicker__calendar header {
    display: block;
    line-height: 40px;
  }
  .vdp-datepicker__calendar header span {
    display: inline-block;
    text-align: center;
    width: 71.42857142857143%;
    float: left;
  }
  .vdp-datepicker__calendar header .next, .vdp-datepicker__calendar header .prev {
    width: 14.285714285714286%;
    float: left;
    text-indent: -10000px;
    position: relative;
  }
  .vdp-datepicker__calendar header span {
    display: inline-block;
    text-align: center;
    width: 71.42857142857143%;
    float: left;
  } 
  .vdp-datepicker__calendar .cell.day-header {
    font-size: 75%;
    white-space: nowrap;
    cursor: inherit;
  }
  .vdp-datepicker__calendar .cell {
    display: inline-block;
    padding: 0 0px;
    width: 12%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    vertical-align: middle;
    border: 1px solid transparent;
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
  .error {
    border: 1px solid red;
  }
  .error-message {
    color: red;
    font-weight: bold;
    font-size: 15px;
  }
</style>