<template>
  <div>
    <p class="text-size-20px text-red-600">{{ test }}</p>
    <ElButton @click="handleClick(test)">{{ test }}</ElButton>
    <QuickWord @choose="handleClick" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage, ElButton } from 'element-plus'
import QuickWord from './components/QuickWord.vue'
const test = ref('123456')

const handleClick = (value: string) => {
  ElMessage.info(value)
}
</script>

<style scoped></style>
