import { PageParams } from '#/config'
import { Result } from '../config/result'
import fontCarrier from 'font-carrier'
import fsx from 'fs-extra'
import * as fs from 'node:fs'
import * as path from 'node:path'
import { MySqlDataSource } from 'src/config/database'
import { permute } from 'src/utils'
import { Like } from 'typeorm'

export interface FontPara {
  text: string
  svg: string
}

const filePath = path.resolve('static/fonts/')

fsx.ensureDir(filePath)

const fontPath = `${filePath}/createFont.ttf`

export default class FontService {
  async pages(para: PageParams) {
    const fontRepository = MySqlDataSource.getRepository('fonts')

    const searchArray: string[] = para.searchKey?.split('') || []
    let orConditions = []

    for (let search of permute(searchArray)) {
      orConditions.push({ text: Like(`%${search.join(',')}%`) })
    }

    const [list, total] = await fontRepository.findAndCount({
      skip: (para.pageNum - 1) * para.pageSize,
      take: para.pageSize,
      order: {
        createdAt: 'DESC',
      },
      where: [...orConditions],
    })

    return Result.success(Result.page(list, total, para), 'get success')
  }

  async add(para: FontPara) {
    const getFont = fs.existsSync(fontPath) ? fontCarrier.transfer(fontPath) : fontCarrier.create()

    const fontRepository = MySqlDataSource.getRepository('fonts')

    const font = await fontRepository.save({ ...para, code: '' })

    const codeHex4 = (1000 + font.id + 1).toString(16).padStart(4, '0')
    const code = `&#x${codeHex4};`

    getFont.setSvg(code, para.svg)

    getFont.output({
      path: `${filePath}/createFont`,
    })

    await fontRepository.update(font.id, { code })

    return Result.success({ ...font, code }, 'add success')
  }

  async delete(id: number) {
    await MySqlDataSource.getRepository('fonts').delete(id)
    return Result.success(null, 'delete success')
  }
}
