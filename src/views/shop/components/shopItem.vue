<template>
  <div class="nearby__item">
    <img class="nearby__left" :src="item.imgUrl">
    <div class="nearby__right">
      <div class="nearby__right__title">{{item.name}}</div>
      <div class="nearby__right__tags">
        <span v-for="(val, i) in item.tags" :key="i">{{val}}</span>
      </div>
      <div class="nearby__right__highlight">{{item.desc}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item']
  
}
</script>

<style lang="scss" scoped>
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
</style>