<template>
  <ul class="docker">
    <li :class="{'docker__item':true, 'docker__item--active': activeIndex == i}"
      v-for="(item, i) in list"
      :key="i">
      <i class="iconfont" v-html="item.icon"></i>
      <p class="docker__item__title">{{item.title}}</p>
    </li>
  </ul>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Docker',
  setup() {
    const activeIndex = ref(0)
    const list = [
      { icon: '&#xe8b9;', title: '首页' },
      { icon: '&#xe608;', title: '购物车' },
      { icon: '&#xe633;', title: '订单' },
      { icon: '&#xe603;', title: '我的' }
    ]
    return {
      list,
      activeIndex
    }
  }
}
</script>

<style lang="scss" scoped>
.docker {
  position: absolute;
  width: 100%;
  height: 49px;
  left: 0;
  bottom: 0;
  color: #333;
  display: flex;
  margin: 0;
  padding: .07rem .18rem;
  box-sizing: border-box;
  border-top: 1px solid $content-bgColor;
  &__item {
    flex: 1;
    text-align: center;
    &--active {
        color: #1FA4FC;
    }
    &__title {
      font-size: 20px;
      transform: scale(.5, .5);
    }
  };
}
</style>
