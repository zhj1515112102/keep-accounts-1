<template>
  <div class="nav-wrapper">
    <div class="content" :class="classPrefix && `${classPrefix}-content`">
      <slot/>
    </div>
    <Nav/>
  </div>
</template>

<script>
export default {
  props:['classPrefix'],
  name: "Layout"
}
</script>

<style scoped>
.nav-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  flex-grow: 1;
  overflow: hidden;
}
</style>