<script setup lang="ts">
import { useUser } from "../composables/useUser";

const { user, loggedIn, logout, loginForm, login } = useUser();
</script>

<template>
  <div v-if="loggedIn">
    <div>welcome!{{ user.name }}</div>
    <el-button @click="logout"> logout </el-button>
  </div>
  <div v-if="!loggedIn">
    <el-form :model="loginForm" label-width="120px">
      <el-form-item label="username">
        <el-input v-model="loginForm.username" />
      </el-form-item>

      <el-form-item label="password">
        <el-input v-model="loginForm.password" type="password" />
      </el-form-item>

      <el-form-item>
        <el-button @click="login"> login </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped></style>
