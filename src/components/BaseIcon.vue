<template>
  <div class="icon-wrapper">
    <svg class="icon" :width="width" :height="height">
      <use v-bind="{'xlink:href':'feather-sprite.svg#'+ name}"></use>
    </svg>
    <slot name="heading"></slot>
    <slot name="paragraph"></slot>
  </div>
</template>

<script>
export default {

  props: {
    name: String,
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    }
  },

  name: 'BaseIcon',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .icon-wrapper {
    color: rgba(0,0,0, 0.4);
    display: flex;
    align-items: flex-end;
  }
  .icon {
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
    margin-right: 6px;
  }
  .heading {
    display: flex;
  }
</style>