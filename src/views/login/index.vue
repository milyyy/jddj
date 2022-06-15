<template>
  <div class="user">
    <div class="user__avatar"></div>
    <div class="user__phone">
      <input type="text" v-model="username" placeholder="用户名称" />
    </div>
    <div class="user__password">
      <input type="text" v-model="password" placeholder="用户密码" />
    </div>
    <div class="user__login" @click="handleLogin">登陆</div>
    <div class="user__register">
      <span @click="toRegister">立即注册</span> |
      <span>忘记密码</span>
    </div>
    <Toast v-if="toastShow" :message="toastMsg" />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive, toRefs, getCurrentInstance } from 'vue'
import Toast, { ToastDataEffect } from 'components/Toast'

const useLoginEffect = (toastFn) => {
  const user = reactive({ username: 'admin', password: '123456' })
  const router = useRouter()
  const { proxy } = getCurrentInstance()
  const handleLogin = async () => {
    try {
      const result = await proxy.$axios.post('/api/login', {
        username: user.username,
        password: user.password,
      })
      if (result.data?.verifySuccess) {
        localStorage.setItem('isLogin', true)
        router.push({ name: 'home' })
        toastFn('登录成功')
      } else {
        toastFn('登录失败')
      }
    } catch (e) {
      toastFn('请求失败')
    }
  }
  const { username, password } = toRefs(user)
  return { username, password, handleLogin }
}
const useRegisterEffect = () => {
  const router = useRouter()
  const toRegister = () => {
    router.push({ name: 'register' })
  }
  return { toRegister }
}
export default {
  name: 'login',
  components: { Toast },
  setup() {
    const { toastShow, toastMsg, showToast } = ToastDataEffect()
    const { username, password, handleLogin } = useLoginEffect(showToast)
    const { toRegister } = useRegisterEffect()
    return {
      toastShow,
      toastMsg,
      showToast, // toast
      username,
      password,
      handleLogin, // user
      toRegister,
    }
  },
}
</script>

<style lang="scss" scoped>
.user {
  position: relative;
  top: 1.2rem;
  left: 0;
  padding: 0.4rem;
  &__avatar {
    width: 0.66rem;
    height: 0.66rem;
    margin: 0 auto 0.4rem;
    @include bg-image('@/assets/icons/编组');
  }
  &__phone,
  &__password {
    height: 0.48rem;
    line-height: 0.48rem;
    background: #f9f9f9;
    border: 0.01px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.06rem;
    margin-bottom: 0.16rem;
    input {
      width: 100%;
      height: 100%;
      font-size: 0.16rem;
      @include input;
      padding: 0.12rem 0.16rem;
      box-sizing: border-box;
    }
  }
  &__login {
    height: 0.48rem;
    line-height: 0.48rem;
    font-size: 0.16rem;
    text-align: center;
    color: #fff;
    background: #0091ff;
    margin-top: 0.28rem;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    border-radius: 0.04rem;
  }
  &__register {
    text-align: center;
    font-size: 0.14rem;
    color: rgba(0, 0, 0, 0.5);
    letter-spacing: 0;
    margin-top: 0.16rem;
  }
}
</style>
