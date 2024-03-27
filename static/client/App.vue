<template>
  <div>
    <CustomWord ref="cwRef" />
    <ElButton @click="handleSave">保存</ElButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CustomWord from './components/CustomWord.vue'
import { ElButton } from 'element-plus'
// @ts-ignore
import { getFontPages } from './api/index.ts'

const cwRef = ref<InstanceType<typeof CustomWord>>()

async function handleSave() {
  const { list } = await getFontPages({ pageNum: 1, pageSize: 10 })
  console.log('🚀 ~ handleSave ~ list:', list)
  cwRef.value?.handleSave()
}
</script>

<style scoped></style>
