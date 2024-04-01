import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      primary: {
        DEFAULT: 'var(--el-color-primary)',
        ...Array(9)
          .fill('')
          .reduce((a, _, index) => ((a[index + 1] = `rgba(var(--el-color-primary-rgb) / ${index + 1}0%)`), a), {}),
      },
      warning: {
        DEFAULT: 'var(--el-color-warning)',
        ...Array(9)
          .fill('')
          .reduce((a, _, index) => ((a[index + 1] = `rgba(var(--el-color-primary-rgb) / ${index + 1}0%)`), a), {}),
      },
      error: {
        DEFAULT: 'var(--el-color-error)',
        ...Array(9)
          .fill('')
          .reduce((a, _, index) => ((a[index + 1] = `rgba(var(--el-color-primary-rgb) / ${index + 1}0%)`), a), {}),
      },
    },
  },
  shortcuts: [['flex-center', 'flex items-center justify-center']],
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        display: 'inline-block',
      },
    }),
    presetAttributify({
      prefix: '',
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: ['Microsoft YaHei', 'Source Han Sans CN'],
        serif: 'DM Serif Display',
        mono: 'DM Mono',
        CustomFont: {
          name: 'CustomFont',
          provider: 'none',
        },
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: [],
})
