import { Context } from 'koa'
import FileService from '../service/FileService'

class FileController {
  private service: FileService = new FileService()

  upload = async (ctx: Context) => {
    const files = ctx.request.files.file

    this.service.upload(ctx, files)
  }
}

export default new FileController()
