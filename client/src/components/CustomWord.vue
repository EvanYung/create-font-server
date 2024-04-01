<script setup name="CustomWord" lang="ts">
  import { fabric } from 'fabric'
  import { computed, onMounted, ref, nextTick } from 'vue'
  import QuickWord from './QuickWord.vue'

  import { onKeyStroke } from '@vueuse/core'
  import { ElMessage, ElButton, ElInput } from 'element-plus'
  // @ts-ignore
  import SvgTextToPath from 'svg-text-to-path'

  import { addFont } from '../api/index'
  import { loadFonts } from '../utils/load-fonts'

  const canvasWidth = 400
  const canvasHeight = 400

  let fbCanvas: fabric.Canvas

  const fbObjects = ref<fabric.Object[]>([])

  const word = ref('')

  const textBoxList = computed(() => {
    return fbObjects.value.filter(item => item.type === 'text') as fabric.Text[]
  })

  const wordGroup = computed(() => {
    return textBoxList.value.map(item => item.text)?.toString() || ''
  })

  // 添加文本框
  function addText(text: string) {
    if (!text) return ElMessage.warning('文字不能为空')
    word.value = ''

    const textBoxLength = textBoxList.value.length

    const left = 50 + 20 * textBoxLength
    const top = 50 + 20 * textBoxLength

    const textBox = new fabric.Text(text, {
      left,
      top,
      fontSize: 300,
      fontFamily: 'SimSun',
    })

    fbCanvas.add(textBox)

    const fbObject = textBox

    fbObjects.value.push(fbObject)

    fbCanvas.setActiveObject(fbObject)
  }

  onKeyStroke('Delete', e => {
    e.preventDefault()
    deleteObject()
  })

  // 删除
  function deleteObject() {
    const activeObject = fbCanvas.getActiveObject() as fabric.Textbox & {
      _objects: fabric.Textbox[]
    }

    if (!activeObject) return

    fbCanvas.remove(activeObject)

    fbObjects.value.splice(
      fbObjects.value.findIndex(item => item === activeObject),
      1
    )
  }

  async function handleSave() {
    if (!fbObjects.value.length) return ElMessage.warning('请先添加文字')

    fbCanvas.setBackgroundColor('#fff', () => {})

    const svgStr = fbCanvas.toSVG()

    const session = new SvgTextToPath(svgStr, {
      fonts: {
        SimSun: [
          {
            wght: 400,
            ital: 0,
            source: '/fonts/SimSun/SimSun.ttf',
          },
        ],
      },
    })
    await session.replaceAll()
    const out = session.getSvgString()

    await addFont({ svg: out, text: wordGroup.value })

    loadFonts()
    resetFabric()
  }

  defineExpose({
    handleSave,
    resetFabric,
  })

  function initFabric() {
    fbCanvas = new fabric.Canvas('fb-canvas', {
      width: canvasWidth,
      height: canvasHeight,
      backgroundColor: '#F8F9FB',
    })
  }

  function resetFabric() {
    fbObjects.value = []
    fbCanvas.clear()
    fbCanvas.setBackgroundColor('#F8F9FB', () => {})
  }

  onMounted(() => {
    initFabric()
  })
</script>

<template>
  <div class="flex">
    <canvas id="fb-canvas"></canvas>

    <div class="ml-4 flex-1">
      <div class="flex mb-2">
        <ElInput
          v-model="word"
          :maxlength="1"
          placeholder="插入单个整字"
          clearable
          class="flex-1"
          @keyup.enter="addText(word)"
        />
        <ElButton type="primary" class="ml-2.5" @click="addText(word)">插入</ElButton>
      </div>
      <QuickWord @choose="addText" />
    </div>
  </div>
  <div class="text-size-12px text-[#293449] mt-20px leading-16px">
    提示：选中造字器中的文字，可鼠标拖动，按Delete即可删除
  </div>
</template>

<style scoped></style>
