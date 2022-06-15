<template>
  <div class="nearby">
    <h3>附近店铺</h3>
    <div class="nearby__item" v-for="item in shopList" :key="item.id">
      <img class="nearby__left" :src="item.imgUrl">
      <div class="nearby__right">
        <div class="nearby__right__title">{{item.name}}</div>
        <div class="nearby__right__tags">
          <span v-for="(val, i) in item.tags" :key="i">{{val}}</span>
        </div>
        <div class="nearby__right__highlight">{{item.desc}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { GetShopList } from 'utils/api'
export default {
  name: 'Nearby',
  setup() {
    let shopList = ref([]);
    GetShopList().then(response => {
      shopList.value = response.data?.list
    }, err => {})

    return {
      shopList
    }
  }
}
</script>

<style lang="scss" scoped>
.nearby {
  padding-top: .16rem;
  color: $text-fontcolor;
  h3 {
    font-size: .18rem;
  }
  .nearby__item {
    display: flex;
    margin-top: .14rem;
    .nearby__left {
      width: .56rem;
      height: .56rem;
      margin-right: .16rem;
    }
    .nearby__right {
      flex: 1;
      padding-bottom: .12rem;
      border-bottom: .01rem solid $content-bgColor;
      &__title {
        font-size: .16rem;
      }
      &__tags {
        margin-top: .08rem;
        span {
          font-size: .13rem;
          margin-right: .16rem;
        }
      }
      &__highlight {
        margin-top: .08rem;
        color: red;
      }
    }
  }
}
</style>
