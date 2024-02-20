import { Context } from 'koa'
import FontService, { FontPara } from '../service/FontService'
import { validate, object, string, Describe } from 'superstruct'
import { structErrorMsg } from 'src/utils'

const FontStruct: Describe<FontPara> = object({
  text: string(),
  svg: string(),
})

class FontController {
  private service: FontService = new FontService()

  add = async (ctx: Context) => {
    const body = ctx.request.body

    try {
      const [err, para] = validate(body, FontStruct)

      if (err) throw { code: 13, message: structErrorMsg(err) }

      ctx.body = await this.service.add(para)
    } catch (err) {
      ctx.body = {
        code: err.code || 1,
        message: err.message || '请求失败',
      }
    }
  }

  delete = async (ctx: Context) => {
    try {
      ctx.checkQuery('id', 'required').notEmpty()

      const errors = await ctx.validationErrors()

      if (errors) throw { code: 400, message: JSON.stringify(errors) }

      ctx.body = await this.service.delete(+ctx.query.id)
    } catch (err) {
      ctx.body = {
        code: err.code || 1,
        message: err.message || '请求失败',
      }
    }
  }
}

export default new FontController()
