<template>
  <div>
    <router-link to="/money">
      <Icon iconName="money"/>
      记账
    </router-link>
    |
    <router-link to="/labels">
      <Icon iconName="label"/>
      标签
    </router-link>
    |
    <router-link to="/statistics">
      <Icon icon-name="statistics"/>
      统计
    </router-link>
  </div>
</template>

<script lang="ts">



export default {
  name: "Nac"
}
</script>

<style scoped>

</style>