import { Result } from '../config/result'
import fontCarrier from 'font-carrier'
import fsx from 'fs-extra'
import * as fs from 'node:fs'
import * as path from 'node:path'
import { MySqlDataSource } from 'src/config/database'

export interface FontPara {
  text: string
  svg: string
}

const filePath = path.resolve('static/fonts/')

fsx.ensureDir(filePath)

const fontPath = `${filePath}/createFont.ttf`

export default class FontService {
  async add(para: FontPara) {
    const getFont = fs.existsSync(fontPath) ? fontCarrier.transfer(fontPath) : fontCarrier.create()

    const fontRepository = MySqlDataSource.getRepository('fonts')

    const [, length] = await fontRepository.findAndCount()

    const codeHex4 = (1000 + length + 1).toString(16).padStart(4, '0')
    const code = `&#x${codeHex4};`

    getFont.setSvg(code, para.svg)

    getFont.output({
      path: `${filePath}/createFont`,
    })

    const font = await fontRepository.save({ ...para, code })

    return Result.success(font, 'add success')
  }

  async delete(id: number) {
    await MySqlDataSource.getRepository('fonts').delete(id)
    return Result.success(null, 'delete success')
  }
}
