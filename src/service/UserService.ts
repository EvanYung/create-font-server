import { Result } from '../config/result'

const fakeUserInfo = {
  userId: '1',
  username: 'vben',
  realName: 'Vben Admin',
  desc: 'manager',
  password: '123456',
  token: 'fakeToken1',
  roles: [
    {
      roleName: 'Super Admin',
      value: 'super',
    },
  ],
}

export interface LoginPara {
  phone: string
  code: number
}

export default class UserService {
  async login(para: LoginPara) {
    console.log('🚀 ~ file: UserService.ts ~ line 25 ~ UserService ~ login ~ para', para)
    return Result.success(fakeUserInfo, 'login success')
  }

  async getUserInfoById() {
    return Result.success(fakeUserInfo, 'get user info success')
  }
}
