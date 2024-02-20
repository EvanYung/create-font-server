import path from 'path'
import fs from 'fs-extra'
import { Context } from 'koa'
import formidable from 'formidable'
import { APP_HOST, APP_PORT, IP_ADDRESS } from 'src/config'
import { Result } from 'src/config/result'

const uploadUrl = `http://${APP_HOST === '0.0.0.0' ? IP_ADDRESS : APP_HOST}:${APP_PORT}/upload`
const filePath = path.resolve('static/upload/')

fs.ensureDir(filePath)

type ContextFile = formidable.File | formidable.File[]

export default class UserService {
  async upload(ctx: Context, files: ContextFile) {
    let fileReader: fs.ReadStream, fileResource: string, writeStream: fs.WriteStream

    const isMultiple = Array.isArray(files)

    const fileFunc = function (file: formidable.File) {
      fileReader = fs.createReadStream(file.filepath)
      fileResource = filePath + `/${file.newFilename}`

      writeStream = fs.createWriteStream(fileResource)
      fileReader.pipe(writeStream)
    }

    const returnFunc = function () {
      if (isMultiple) {
        let url = ''
        for (let i = 0; i < files.length; i++) {
          url += uploadUrl + `/${files[i].newFilename},`
        }
        url = url.replace(/,$/gi, '')
        ctx.body = Result.success(url, 'upload success')
      } else {
        ctx.body = Result.success(uploadUrl + `/${files.newFilename}`, 'upload success')
      }
    }

    if (isMultiple) {
      for (let i = 0; i < files.length; i++) {
        const f1 = files[i]
        fileFunc(f1)
      }
    } else {
      fileFunc(files)
    }

    fs.ensureDir(filePath)

    returnFunc()
  }
}
