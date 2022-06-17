<template>
  <div class="shop-wrapper">
    <div class="search">
      <div class="search__back">
        <router-link to="/home">
          <i class="iconfont">&#xe602;</i>
        </router-link>
      </div>
      <div class="search__input">
        <i class="iconfont">&#xe601;</i>
        <input type="text" placeholder="请输入商品名称搜索" />
      </div>
    </div>
    <shop-item :item="currentItem" />
    <shop-content />
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import shopItem from './components/shopItem.vue'
import shopContent from './components/shopContent.vue'
export default {
  name: 'shop',
  components: { shopItem, shopContent },
  setup() {
    const route = useRoute() // 当前路由
    let currentItem = reactive({})
    /* 这里本应用id获取详情，但由于是mock, 采用了一个本地获取方式 */
    currentItem = route.query

    return {
      currentItem
    }
  },
}
</script>

<style lang="scss" scoped>
.shop-wrapper {
  padding: 0 .18rem .3rem .18rem;
  .search {
    display: flex;
    width: 100%;
    &__back {
      width: .3rem;
      line-height: .3rem;
      margin-top: 0.16rem;
    }
    &__input {
      flex: 1;
      display: flex;
      height: 0.32rem;
      line-height: 0.32rem;
      margin-top: 0.16rem;
      background-color: #f5f5f5;
      i {
        color: #b7b7b7;
        font-size: 0.16rem;
        margin: 0 0.12rem 0 0.16rem;
      }
      input {
        flex: 1;
        height: 0.32rem;
        color: #333;
        padding-right: 0.16rem;
        @include input;
      }
    }
    a {
      text-decoration: none;
    }
  }
  ::v-deep .nearby__right {
    border: none;
  }
}
</style>
