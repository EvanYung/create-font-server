<template>
  <div>
    <p class="text-size-20px text-red-600">{{ test }}</p>
    <ElButton @click="handleClick">{{ test }}</ElButton>
    <MyComp />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage, ElButton } from 'element-plus'
import MyComp from './components/MyComp.vue'
const test = ref('123456')

const handleClick = () => {
  ElMessage.info(test.value)
}
</script>

<style scoped></style>
