<template>
    <div>
        <Input class="urlInput" v-model="value" placeholder="Enter something..."/>
    </div>
</template>

<script>
  export default {
    name: "UrlManager"
  }
</script>

<style scoped>
    .urlInput {
        width: 600px
    }
</style>