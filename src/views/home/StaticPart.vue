<template>
  <div class="location">
    <i class="iconfont iconfont_address">&#xe600;</i>
    上海市青浦区华新镇新凤中路680号
    <i class="iconfont iconfont_notice">&#xe60a;</i>
  </div>
  <div class="search">
    <i class="iconfont">&#xe601;</i>
    <input type="text" placeholder="山姆会员优惠商品" />
  </div>
  <div class="banner">
    <img class="banner_img" src="@/assets/banner.jpg" />
  </div>
  <div class="icons">
    <div class="icons__item" v-for="item in iconList" :key="item.index">
      <img class="icons_img" :src="require('@/assets/icons/'+ item.imgUrl)" />
      <p class="icons_desc">{{ item.title }}</p>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
import { ref, getCurrentInstance } from 'vue'
export default {
  name: 'StaticPart',
  setup() {
    const { proxy } = getCurrentInstance()
    let iconList = ref([])
    const getList = async () => {
      try {
        const list = await proxy.$axios.get('/api/getShopTypeList')
        console.log(list)
        iconList.value = list?.data
      } catch (e) {}
    }
    getList()

    return {
      iconList,
    }
  },
}
</script>

<style lang="scss" scoped>
.location {
  position: relative;
  padding: 0.16rem 0.24rem 0 0;
  color: $text-fontcolor;
  line-height: 0.22rem;
  font-size: 0.16rem;
  @include ellipsis;
  .iconfont_address {
    position: relative;
    font-size: 0.18rem;
  }
  .iconfont_notice {
    position: absolute;
    top: 0.18rem;
    right: 0;
  }
}
.search {
  display: flex;
  height: 0.32rem;
  line-height: 0.32rem;
  margin-top: 0.16rem;
  background-color: #f5f5f5;
  border-radius: 0.16rem;
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
.banner {
  height: 0;
  overflow: hidden;
  // 长宽比24.5：1
  padding-bottom: 24.5%;
  margin-top: 0.12rem;
  &_img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  padding-top: 0.16rem;
  &__item {
    width: 20%;
    text-align: center;
    padding-bottom: 0.16rem;
    .icons_img {
      display: block;
      width: .4rem;
      height: .4rem;
      border-radius: 50%;
      margin: 0 auto;
    }
    .icons_desc {
      margin-top: 0.06rem;
    }
  }
}
.gap {
  height: 0.1rem;
  margin: 0 -0.18rem;
  background: $content-bgColor;
}
</style>
