<template>
  <ElConfigProvider :locale="zhCn">
    <div w-1200px h-800px rounded-8px p-20px bg-white>
      <div>造字（点击即可复制文字，右键删除文字）</div>
      <div class="flex my-20px">
        <div class="flex">
          <div class="mr-2.5 w-180px">
            <ElInput
              v-model:value="filter.searchKey"
              placeholder="请输入字体组成搜索"
              clearable
            />
          </div>
          <ElButton
            type="primary"
            class="mr-2.5"
            clearable
            @click="handleSearch"
            >搜索</ElButton
          >
          <ElDropdown trigger="click" placement="bottom-start">
            <ElButton type="primary" plain>部首快查</ElButton>
            <template #dropdown>
              <QuickWord @choose="handleChoose" class="quick-word-box" />
            </template>
          </ElDropdown>
        </div>
        <ElButton
          type="primary"
          class="ml-auto"
          @click="createFontVisible = true"
          >自定义造字</ElButton
        >
      </div>

      <template v-if="wordList.length">
        <div
          class="grid grid-cols-[repeat(auto-fill,125px)] grid-auto-rows-140px gap-20px h-300px"
        >
          <div
            v-for="item in wordList"
            :key="item.id"
            class="flex flex-col items-center justify-center border border-[#e1e5ec] rounded-2px cursor-pointer py-10px"
            @click="handleCopy(item)"
            @contextmenu.prevent="handleDelete(item.id)"
          >
            <div v-html="item.svg" class="svg-box"></div>
            <div class="mt-10px">{{ item.text || '--' }}</div>
          </div>
        </div>
        <div class="mt-20px flex justify-center">
          <ElPagination
            v-model:current-page="filter.pageNum"
            small
            background
            layout="prev, pager, next"
            :page-size="filter.pageSize"
            :total="total"
            @change="getWordPage"
          />
        </div>
      </template>
      <div class="mt-40px" v-else>
        <ElEmpty />
      </div>

      <ElDialog title="自定义造字" width="800px" v-model="createFontVisible">
        <CustomWord ref="cwRef" />
        <div class="py-20px flex justify-end">
          <ElButton type="primary" @click="handleSave">保存</ElButton>
        </div>
      </ElDialog>
      <ElInput
        class="mt-30px"
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4 }"
        placeholder="粘贴文字查看"
        v-model="testWord"
      />
    </div>
  </ElConfigProvider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CustomWord from './components/CustomWord.vue'
import QuickWord from './components/QuickWord.vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import {
  ElConfigProvider,
  ElButton,
  ElInput,
  ElDropdown,
  ElDialog,
  ElPagination,
  ElMessage,
  ElEmpty,
} from 'element-plus'
// @ts-ignore
import { getFontPages, deleteFont, FontDto } from './api/index.ts'
// @ts-ignore
import { loadFonts } from './utils/load-fonts.ts'

import { useClipboard } from '@vueuse/core'

const cwRef = ref<InstanceType<typeof CustomWord>>()

const wordList = ref<FontDto[]>([])

const createFontVisible = ref(false)

const testWord = ref('')

const total = ref(0)

const filter = ref({
  pageNum: 1,
  pageSize: 16,
  searchKey: '',
})

async function getWordPage() {
  const { list, total: _total } = await getFontPages(filter.value)
  wordList.value = list
  total.value = _total
}

function handleSearch() {
  filter.value.pageNum = 1
  getWordPage()
}

function handleChoose(ret: string) {
  filter.value.searchKey += ret
  handleSearch()
}

async function handleSave() {
  await cwRef.value?.handleSave()

  createFontVisible.value = false

  getWordPage()
}

function unicodeToChar(text: string) {
  return text.replace(/\\u[\dA-F]+/gi, function (match) {
    return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16))
  })
}

function handleCopy(item: FontDto) {
  const fontCode = item.code
  const unicode = fontCode.replace('&#x', '\\u').replace(';', '')
  const charCode = unicodeToChar(unicode)
  const { copy } = useClipboard({ source: charCode })
  copy()
  ElMessage.success('复制成功')
}

async function handleDelete(id: number) {
  await deleteFont({ id })
  getWordPage()
}

getWordPage()

loadFonts()
</script>

<style scoped>
:deep(.svg-box svg) {
  width: 90px;
  height: 90px;
}
</style>
