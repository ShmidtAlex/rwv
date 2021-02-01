export const formFieldMixin = {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ''
    },
    value: [String, Number],
    errorClass: Boolean
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    }
  }
}