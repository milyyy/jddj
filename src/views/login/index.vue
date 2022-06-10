<template>
  <div class="user">
    <div class="user__avatar"></div>
    <div class="user__phone">
      <input type="text" v-model="user.username" placeholder="用户名称" />
    </div>
    <div class="user__password">
      <input type="text" v-model="user.password" placeholder="用户密码" />
    </div>
    <div class="user__login" @click="handleLogin">登陆</div>
    <div class="user__register">
      <span @click="toRegister">立即注册</span> |
      <span>忘记密码</span>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { reactive } from 'vue';
export default {
  name: 'login',
  setup() {
    const user = reactive({
      username: '',
      password: '',
    });
    const router = useRouter();
    const handleLogin = async () => {
      try {
        // 登录接口 => 登录成功跳转
        // const result = await axios.get('/api/login', {
        //   username: user.username,
        //   password: user.password
        // })
        localStorage.setItem('isLogin', true);
        router.push({ name: 'home' });
      } catch (e) {}
    };
    const toRegister = () => {
      router.push({ name: 'register' });
    };
    return {
      handleLogin,
      toRegister,
      user,
    };
  },
};
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
