
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: '我是一个超级管理员',
    avatar: '/images/avatar.gif',
    name: '超级管理员'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: '我是一个普通用户',
    avatar: '/images/avatar.gif',
    name: '普通用户'
  }
}

module.exports = [
  // 用户登陆
  {
    url: '/vue-admin-template/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: '帐户和密码不正确。'
        }
      }

      return {
        code: 20000,
        data: token
      }
    }
  },

  // 获得用户信息
  {
    url: '/vue-admin-template/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: '登录失败，无法获取用户详细信息。'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // 用户登出
  {
    url: '/vue-admin-template/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: '成功'
      }
    }
  }
]
