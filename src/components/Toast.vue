<template>
  <div id="toast">{{ message }}</div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  props: ['message'],
}

export const ToastDataEffect = () => {
  const ToastData = reactive({
    toastShow: false,
    toastMsg: '',
  })
  const showToast = (msg) => {
    ToastData.toastShow = true
    ToastData.toastMsg = msg
    setTimeout(() => {
      ToastData.toastShow = false
      ToastData.toastMsg = ''
    }, 1000)
  }
  const { toastShow, toastMsg } = toRefs(ToastData)
  return {
    toastShow,
    toastMsg,
    showToast,
  }
}
</script>

<style scoped>
#toast {
  padding: 0.08rem 0.12rem;
  border-radius: 5%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  color: #fff;
}
</style>
