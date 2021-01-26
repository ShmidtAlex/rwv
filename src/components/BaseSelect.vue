<template>
  <div>
    <label v-if="label" for="">{{ label }}</label>
    <select name="" id="" @change="updateValue" v-bind="$attrs">
      <option 
        v-for="option in options" 
        :key="option" 
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

  data () {
    return {

    }
  },
  methods: {
    updateValue(event) {
      //for this approach, is important name emit action 'input' exactly
      this.$emit('input', event.target.value)
    }
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