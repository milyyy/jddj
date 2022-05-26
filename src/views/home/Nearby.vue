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
export default {
  name: 'Nearby',
  setup() {
    const shopList = [
      {
        id: 1,
        name: '沃尔玛',
        imgUrl: require('@/assets/icons/医药健康@3x.png'),
        tags: ['月售1万+', '起送¥0', '基础运费¥5'],
        desc: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        id: 2,
        name: '山姆会员商店',
        imgUrl: require('@/assets/icons/医药健康@3x.png'),
        tags: ['月售1万+', '起送¥30', '基础运费¥5'],
        desc: 'VIP尊享满90元减6元运费券（每月3张）'
      },
      {
        id: 3,
        name: '大润发',
        imgUrl: require('@/assets/icons/医药健康@3x.png'),
        tags: ['月售1万+', '起送¥50', '基础运费¥6'],
        desc: 'VIP尊享满100元减5元运费券（每月3张）'
      }
    ]

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
