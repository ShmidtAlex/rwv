<template>
  <div>
    <label for="">{{ label }}</label>
    <input :class="{ error: computedClass }" :type="type" :placeholder="placeholder" :value="value" @input="updateValue" v-bind="$attrs" v-on="listeners">
  </div>
</template>

<script>
  import { formFieldMixin } from '@/mixins/formFieldMixin.js'
export default {
  mixins: [formFieldMixin],
  props: {
    placeholder: String,
    type: String,
  },

  name: 'BaseInput',

  data () {
    return {

    }
  },
  
  computed: {
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