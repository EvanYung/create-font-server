import { Context } from 'koa'
import FontService, { FontPara } from '../service/FontService'
import { validate, object, string, Describe } from 'superstruct'
import { structErrorMsg } from 'src/utils'
import { Result } from 'src/config/result'

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
      ctx.body = Result.error(err.code, err.message)
    }
  }

  delete = async (ctx: Context) => {
    try {
      ctx.checkQuery('id', 'required').notEmpty()

      const errors = await ctx.validationErrors()

      if (errors) throw { code: 400, message: JSON.stringify(errors) }

      ctx.body = await this.service.delete(+ctx.query.id)
    } catch (err) {
      ctx.body = Result.error(err.code, err.message)
    }
  }
}

export default new FontController()
