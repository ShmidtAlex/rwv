<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <select :value="value" @change="updateValue" v-bind="$attrs" v-on="listeners" :class="{ error: computedClass }">
      <option 
        v-for="option in options" 
        :key="option.id" 
        :value="option" 
        :selected="option === value">{{ option }}</option>
    </select>
  </div>
</template>

<script>
import { formFieldMixin } from '@/mixins/formFieldMixin.js'
export default {
  mixins: [formFieldMixin],
  name: 'BaseSelect',
  props: {
    options: {
      type: Array,
      required: true
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
input, select {
    width: 100%;
    margin: 5px 0;
    height: 30px;
  }
  .error {
    border: 1px solid red;
  }
</style>