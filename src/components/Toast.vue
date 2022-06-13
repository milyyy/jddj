<template>
  <div id="toast">{{ message }}</div>
</template>

<script>
import { reactive } from 'vue';
export const ToastDataEffect = () => {
  const ToastData = reactive({
    toastShow: false,
    toastMsg: '',
  });
  const showToast = (msg) => {
    ToastData.toastShow = true;
    ToastData.toastMsg = msg;
    setTimeout(() => {
      ToastData.toastShow = false;
      ToastData.toastMsg = '';
    }, 1000);
  };
  return { ToastData, showToast };
};

export default {
  props: ['message'],
};
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
