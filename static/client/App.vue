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

const cwRef = ref<InstanceType<typeof CustomWord>>()

function handleSave() {
  cwRef.value?.handleSave()
}
</script>

<style scoped></style>
