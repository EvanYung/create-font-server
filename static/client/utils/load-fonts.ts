const fontUrl = 'http://172.16.50.12:7800/fonts/createFont.ttf'

export async function loadDocumentFonts() {
  const font = new FontFace(
    'CustomFont',
    `url(${fontUrl}?time=${new Date().getTime()})`,
    {
      style: 'normal',
      weight: 'normal',
    }
  )
  await font.load()
  ;(document.fonts as any).add(font)
}

export async function loadFonts() {
  const urlToFontFile = `${fontUrl}?time=${new Date().getTime()}`
  const fontName = 'CustomFont'

  const style = document.createElement('style')
  style.id = 'custom-font'
  style.type = 'text/css'
  style.textContent = `
  @font-face {
    font-family: '${fontName}';
    src: url(${urlToFontFile});
    font-style: normal;
    font-weight: normal;
  }
`
  const oldStyle = document.getElementById('custom-font')

  if (oldStyle) {
    oldStyle.remove()
  }

  document.head.appendChild(style)
}
