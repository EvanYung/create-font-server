<script setup name="QuickWord" lang="ts">
const quickWords = [
  {
    label: '一画',
    list: ['丨', '亅', '丿', '乛', '一', '乙', '乚', '丶', '〇'],
  },
  {
    label: '二画',
    list: [
      '八',
      '勹',
      '匕',
      '冫',
      '卜',
      '厂',
      '刀',
      '刂',
      '儿',
      '二',
      '匚',
      '阝',
      '丷',
      '几',
      '卩',
      '冂',
      '力',
      '冖',
      '凵',
      '人',
      '亻',
      '入',
      '十',
      '亠',
      '匸',
      '讠',
      '廴',
      '又',
      '',
      '',
      '',
      '乂',
      '厶',
      '巜',
      '丷',
      '',
      '丩',
      '凵',
      '勹',
      '冂',
      '匚',
      '乜',
      '孒',
      '丅',
    ],
  },
  {
    label: '三画',
    list: [
      '艹',
      '屮',
      '彳',
      '巛',
      '川',
      '辶',
      '寸',
      '大',
      '飞',
      '干',
      '工',
      '弓',
      '廾',
      '广',
      '彐',
      '彑',
      '巾',
      '口',
      '马',
      '门',
      '宀',
      '女',
      '犭',
      '山',
      '彡',
      '尸',
      '饣',
      '士',
      '扌',
      '氵',
      '纟',
      '巳',
      '土',
      '囗',
      '兀',
      '夕',
      '小',
      '忄',
      '幺',
      '弋',
      '尢',
      '夂',
      '子',
      '己',
      '丬',
      '',
      '乊',
      '丌',
      '亇',
      '卂',
    ],
  },
  {
    label: '四画',
    list: [
      '贝',
      '比',
      '灬',
      '长',
      '车',
      '歹',
      '斗',
      '厄',
      '方',
      '风',
      '父',
      '戈',
      '卝',
      '户',
      '火',
      '旡',
      '见',
      '斤',
      '耂',
      '毛',
      '木',
      '肀',
      '牛',
      '牜',
      '爿',
      '片',
      '攴',
      '攵',
      '气',
      '欠',
      '犬',
      '日',
      '氏',
      '礻',
      '手',
      '殳',
      '水',
      '瓦',
      '尣',
      '王',
      '韦',
      '文',
      '毋',
      '心',
      '牙',
      '爻',
      '曰',
      '月',
      '爫',
      '支',
      '止',
      '爪',
      '',
      '亞',
      '',
      '',
      '円',
      '',
      '夬',
      '',
      '厃',
      '夨',
      '冇',
      '冄',
      '丯',
      '夬',
      '弔',
      '丗',
    ],
  },
  {
    label: '五画',
    list: [
      '白',
      '癶',
      '歺',
      '甘',
      '瓜',
      '禾',
      '钅',
      '立',
      '龙',
      '矛',
      '皿',
      '母',
      '目',
      '疒',
      '鸟',
      '皮',
      '生',
      '石',
      '矢',
      '示',
      '罒',
      '田',
      '玄',
      '穴',
      '疋',
      '业',
      '衤',
      '用',
      '玉',
      '氺',
      '冎',
      '丱',
      '',
      '',
      '罒',
      '',
      '戋',
      '朮',
      '凹',
      '氷',
      '卌',
      '冊',
      '曱',
      '甴',
      '囙',
      '叏',
      '氶',
      '襾',
    ],
  },
  {
    label: '六画',
    list: [
      '耒',
      '艸',
      '臣',
      '虫',
      '而',
      '耳',
      '缶',
      '艮',
      '虍',
      '臼',
      '米',
      '齐',
      '肉',
      '色',
      '舌',
      '覀',
      '页',
      '先',
      '行',
      '血',
      '羊',
      '聿',
      '至',
      '舟',
      '衣',
      '竹',
      '自',
      '羽',
      '糸',
      '糹',
      '',
      '',
      '',
      '弚',
      '乑',
      '朿',
      '兂',
      '扥',
      '亙',
      '曳',
      '囟',
      '舛',
      '両',
      '',
      '',
    ],
  },
  {
    label: '七画',
    list: [
      '貝',
      '采',
      '镸',
      '車',
      '辰',
      '赤',
      '辵',
      '豆',
      '谷',
      '見',
      '角',
      '克',
      '里',
      '卤',
      '麦',
      '身',
      '豕',
      '辛',
      '言',
      '邑',
      '酉',
      '豸',
      '走',
      '足',
      '',
      '門',
      '韋',
      '亜',
      '丣',
      '囪',
      '夾',
      '尨',
      '卣',
      '芈',
      '呉',
      '吳',
      '囬',
    ],
  },
  {
    label: '八画',
    list: [
      '青',
      '靑',
      '雨',
      '齿',
      '長',
      '非',
      '阜',
      '金',
      '釒',
      '隶',
      '門',
      '靣',
      '飠',
      '鱼',
      '隹',
      '',
      '戼',
      '羋',
      '咼',
      '兎',
    ],
  },
  {
    label: '九画',
    list: [
      '風',
      '革',
      '骨',
      '鬼',
      '韭',
      '面',
      '首',
      '韋',
      '香',
      '頁',
      '音',
      '昜',
      '為',
      '叚',
    ],
  },
  {
    label: '十画',
    list: ['髟', '鬯', '鬥', '高', '鬲', '馬', '亀', '枾', '卨'],
  },
  {
    label: '其他',
    list: ['魚', '鳥'],
  },
]

const emits = defineEmits(['choose'])
</script>

<template>
  <div
    class="max-w-400px bg-#f8f9fb] h-360px overflow-y-auto overflow-x-hidden p-20px"
  >
    <div class="text-[#606060] text-16px">便捷部首</div>
    <div class="mt-10px" v-for="item in quickWords" :key="item.label">
      <div class="font-[700] text-16px">{{ item.label }}</div>
      <div class="mt-10px pr-15px flex flex-wrap">
        <div
          class="flex items-center justify-center relative size-30px cursor-pointer font-[Simsun]"
          hover="bg-[#e8e8e8] after:content-[attr(data-word)] after:absolute after:top-[-100%] after:left-[100%] after:mt--25px after:text-[var(--el-color-primary)] after:text-50px after:font-bold"
          v-for="word in item.list"
          :key="word"
          :data-word="word"
          @click="emits('choose', word)"
        >
          {{ word }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
