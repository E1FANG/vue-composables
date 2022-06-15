<script setup lang="ts">
import { useCard } from "@/composables/useCard";

const { card, cardTotal, updateCard, removeFromCard, isCardEmpty, loading } = useCard();
</script>

<template>
  <h3>card</h3>
  <div v-if="isCardEmpty">your card is empty</div>
  <template v-if="!isCardEmpty">
    loading:{{ loading }}
    <div v-for="item in card" :key="item.id">
      {{ item.id }} ¥ {{ item.price }} 数量 {{ item.quantity }}
      <el-input-number
        :modelValue="item.quantity"
        @update:modelValue="(val) => updateCard(item, val)"
      />
      <!-- @change="(currentValue, oldValue) => updateCard(item, currentValue, oldValue)" -->
      <el-button @click="removeFromCard(item)">remove</el-button>
    </div>
  </template>
</template>

<style lang="scss" scoped></style>
