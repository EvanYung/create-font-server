import { Context } from 'koa'
import UserService, { LoginPara } from '../service/UserService'
import { validate, object, number, string, define, Describe } from 'superstruct'
import { isMobile } from 'src/utils/is'
import { structErrorMsg } from 'src/utils'
import { Result } from 'src/config/result'

const Phone = define<string>('Phone', isMobile)

const LoginStruct: Describe<LoginPara> = object({
  phone: Phone,
  code: number(),
})

class UserController {
  private service: UserService = new UserService()

  login = async (ctx: Context) => {
    const body = ctx.request.body

    try {
      const [err, para] = validate(body, LoginStruct)

      if (err) throw { code: 13, message: structErrorMsg(err) }

      ctx.body = await this.service.login(para)
    } catch (err) {
      ctx.body = Result.error(err.code, err.message)
    }
  }

  getUserInfoById = async (ctx: Context) => {
    try {
      ctx.checkQuery('userId', 'required').notEmpty()

      const errors = await ctx.validationErrors()

      if (errors) throw { code: 400, message: JSON.stringify(errors) }

      ctx.body = await this.service.getUserInfoById()
    } catch (err) {
      ctx.body = Result.error(err.code, err.message)
    }
  }
}

export default new UserController()
