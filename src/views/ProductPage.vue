<script setup lang="ts">
import { useCard } from "@/composables/useCard";
import { computed, ref } from "vue";
// eslint-disable-next-line no-undef
const product = ref<Product[]>([
  {
    id: 1,
    name: "商品1",
    price: 100,
    quantity: 1,
    desc: "商品1",
  },
  {
    id: 2,
    name: "商品2",
    price: 200,
    quantity: 1,
    desc: "商品2",
  },
  {
    id: 3,
    name: "商品3",
    price: 300,
    quantity: 1,
    desc: "商品3",
  },
]);

const { addToCard } = useCard();
</script>

<template>
  <h3>product</h3>
  <ul>
    <li v-for="item in product" :key="item.id">
      {{ item.desc + `  ¥  ` + item.price }}
      <el-button @click="addToCard(item)">添加到购物车</el-button>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
