<template>
  <div>
    <label for="">{{ label }}</label>
    <input :type="type" :placeholder="placeholder" :value="value" @input="updateValue" v-bind="$attrs" v-on="listeners">
  </div>
</template>

<script>
export default {
  inheritAttrs: false, //this, together with v-bind="$attrs" allows pull down class as a prop (and all input attributes too)
  props: {
    label: {
      type: String,
      default: ''
    },
    value: [String, Number],
    placeholder: String,
    type: String
  },

  name: 'BaseInput',

  data () {
    return {

    }
  },
  methods: {
    updateValue(event) {
      //for this approach, is important name emit action 'input' exactly
      this.$emit('input', event.target.value)
    }
  },
  computed: {
    /*n order to avoid conflict between $listeners and @input, we should compute them before implement. in this case property lower down takes precedence 
    (notes, that this approach require to remove $ sign from listeners in input above.)*/
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.field {
  input, select {
    width: 100%;
    margin: 5px 0;
    height: 30px;
  }
}
</style>