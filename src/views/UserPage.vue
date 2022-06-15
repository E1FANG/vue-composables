<script setup lang="ts">
import { useUser } from "@/composables/useUser";

const { user, loggedIn, logout } = useUser();
</script>

<template>
  <div v-if="!loggedIn">you have not login</div>
  <div v-if="loggedIn">
    hello,{{ user.name }}
    <el-button @click="logout"> logout </el-button>
  </div>
</template>

<style lang="scss" scoped></style>
