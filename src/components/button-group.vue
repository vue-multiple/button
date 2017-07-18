<template>
  <div
      class="vm-button-group"
      :class="[
        vertical ? 'vm-button-group-vertical' : ''
      ]">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'VmButtonGroup',

    componentName: 'VmButtonGroup',

    props: {
      vertical: Boolean,
      size: String,
      type: String
    }
  }
</script>
