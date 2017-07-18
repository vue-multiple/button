<template>
  <div
      class="vm-button"
      :disabled="disabled"
      :autofocus="autofocus"
      :type="nativeType"
      @click="handleClick"
      :class="[
        type ? 'vm-button--' + type : parentProp('type'),
        size ? 'vm-button--' + size : parentProp('size'),
        {
          'is-disabled': disabled,
          'is-loading': loading,
          'is-plain': plain
        }
      ]"
      >
    <i :class="'vm-icon-' + loadingIcon" v-if="loading"></i>
    <i :class="'vm-icon-' + icon" v-if="icon && !loading"></i><span v-if="$slots.default"><slot></slot></span>
  </div>
</template>

<script>
  export default {
    name: 'VmButton',

    componentName: 'VmButton',

    props: {
      type: String,
      size: String,
      icon: {
        type: String,
        default: ''
      },
      loadingIcon: {
        type: String,
        default: 'load-a'
      },
      nativeType: {
        type: String,
        default: 'button'
      },
      loading: Boolean,
      disabled: Boolean,
      plain: Boolean,
      autofocus: Boolean
    },

    methods: {
      handleClick (event) {
        this.$emit('click', event)
      },
      parentProp (prop) {
        let parent = this.$parent
        while (parent && parent.$options.componentName !== 'VmButtonGroup') {
          parent = parent.$parent
        }
        return parent&&parent[prop] ? 'vm-button--' + parent[prop] : ''
      }
    }
  }
</script>