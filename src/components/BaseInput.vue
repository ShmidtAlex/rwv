<template>
  <div>
    <label for="">{{ label }}</label>
    <input :class="{ error: computedClass }" :type="type" :placeholder="placeholder" :value="value" @input="updateValue" v-bind="$attrs" v-on="listeners">
  </div>
</template>

<script>
  import { formFieldMixin } from '@/mixins/formFieldMixin.js'
export default {
  //instead of inheritAttrs we'll use mixin:
  mixins: [formFieldMixin],
  // inheritAttrs: false, //this, together with v-bind="$attrs" allows pull down class as a prop (and all input attributes too)
  props: {
        placeholder: String,
    type: String,
  },

  name: 'BaseInput',

  data () {
    return {

    }
  },
  methods: {
    //sinse we use mixins we don't need it anymore
    // updateValue(event) {
    //   //for this approach, is important name emit action 'input' exactly
    //   this.$emit('input', event.target.value)
    // }
  },
  computed: {
    /*n order to avoid conflict between $listeners and @input, we should compute them before implement. in this case property lower down takes precedence 
    (notes, that this approach require to remove $ sign from listeners in input above.)*/
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue
      }
    },
    computedClass() {
      return this.errorClass
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
  .error {
    border: 1px solid red;
  }
}
</style>