<template>
  <div class="user">
    <div class="user__avatar"></div>
    <div class="user__phone">
      <input type="text" v-model="user.username" placeholder="用户名称">
    </div>
    <div class="user__password">
      <input type="text" v-model="user.password" placeholder="用户密码">
    </div>
    <div class="user__login" @click="handleLogin">登陆</div>
    <div class="user__register">
      <span @click="toRegister">立即注册</span> |
      <span>忘记密码</span>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
export default {
  name: 'login',
  setup() {
    const user = reactive({
      username: '',
      password: ''
    })
    const router = useRouter()
    const handleLogin = async() => {
      try {
        // 登录接口 => 登录成功跳转
        // const result = await axios.get('/api/login', {
        //   username: user.username,
        //   password: user.password
        // })
        localStorage.setItem('isLogin', true)
        router.push({ name: 'home' })
      } catch (e) {}
    }
    const toRegister = () => {
      router.push({ name: 'register' })
    }
    return {
      handleLogin,
      toRegister,
      user
    }
  }
}
</script>

<style lang="scss" scoped>
.user {
  position: relative;
  top: 1.2rem;
  left: 0;
  padding: .4rem;
  &__avatar {
    width: .66rem;
    height: .66rem;
    margin: 0 auto .4rem;
    @include bg-image('@/assets/icons/编组');
  }
  &__phone,
  &__password {
    height: .48rem;
    line-height: .48rem;
    background: #F9F9F9;
    border: .01px solid rgba(0,0,0,0.10);
    border-radius: .06rem;
    margin-bottom: .16rem;
    input {
      width: 100%;
      height: 100%;
      font-size: .16rem;
      @include input;
      padding: .12rem .16rem;
      box-sizing: border-box;
    }
  }
  &__login {
    height: .48rem;
    line-height: .48rem;
    font-size: .16rem;
    text-align: center;
    color: #fff;
    background: #0091FF;
    margin-top: .28rem;
    box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
    border-radius: .04rem;
    border-radius: .04rem;
  }
  &__register {
    text-align: center;
    font-size: .14rem;
    color: rgba(0,0,0,0.50);
    letter-spacing: 0;
    margin-top: .16rem;
  }
}
</style>
