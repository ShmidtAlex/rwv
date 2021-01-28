<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <!-- v-on listeners adds listeners from the parent scope -->
    <select :value="value" @change="updateValue" v-bind="$attrs" v-on="$listeners">
      <option 
        v-for="option in options" 
        :key="option.id" 
        :value="option" 
        :selected="option === value">{{ option }}</option>
    </select>
  </div>
</template>

<script>
export default {

  name: 'BaseSelect',
  props: {
    label: {
      type: String,
      default: ''
    },
    options: {
      type: Array,// if the tipe of options is Object, better way to resolve problems = to use "Vue-multiselect" library
      required: true
    },
    value: {
      type: String
    }
  },
  mounted(){
    //resolves the problem, when user didn't choose any options, and going to use the selected option
    // this.setupInitialValue(this.options[0])
  },

  data () {
    return {

    }
  },
  
  methods: {
    updateValue(event) {
      //for this approach, is important name emit action 'input' exactly
      console.log(event.target.value)
      this.$emit('input', event.target.value)
    },
    // we don't need it anymore, because of we set validation with vuelidate
    // setupInitialValue(value) {
      // this.$emit('input', value)
    // }
  },
  computed: {
    // we don't need it anymore, because of we set validation with vuelidate
    // computedValue() {
      // return this.value != '' ? this.value : this.options[0]
    // }
  }
}
</script>

<style lang="scss" scoped>
input, select {
    width: 100%;
    margin: 5px 0;
    height: 30px;
  }
</style>