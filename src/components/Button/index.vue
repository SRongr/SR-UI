<template>
  <button
    class="sr-button"
    :class="[`sr-button-type-${type}`,{'sr-button-isDisabled':isDisabled}]"
    @click="handleClick"
  >
    <span v-show="hasPrefixIcon" class="prefix-icon">
      <slot name="prefix"></slot>
    </span>
    <span class="text" v-if="$slots.default">
      <slot></slot>
    </span>
    <span v-show="hasSuffixIcon" class="suffix-icon">
      <slot name="suffix"></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "default"
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      hasPrefixIcon: false,
      hasSuffixIcon: false
    };
  },
  created: function() {
    if (this.$slots.prefix) {
      this.hasPrefixIcon = true;
    }
    if (this.$slots.suffix) {
      this.hasSuffixIcon = true;
    }
  },
  computed: {},

  methods: {
    handleClick(evt) {
      if (this.isDisabled) {
        return;
      }
      this.$emit("click", evt);
    }
  }
};
</script>
<style lang="less" scoped src="./index.less">
  
</style>
