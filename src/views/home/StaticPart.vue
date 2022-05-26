<template>
    <div class="location">
      <i class="iconfont iconfont_address">&#xe600;</i>
      上海市青浦区华新镇新凤中路680号
      <i class="iconfont iconfont_notice">&#xe60a;</i>
    </div>
    <div class="search">
      <i class="iconfont">&#xe601;</i>
      <input type="text" placeholder="山姆会员优惠商品">
    </div>
    <div class="banner">
      <img class="banner_img" src="@/assets/banner.jpg">
    </div>
    <div class="icons">
      <div class="icons__item" v-for="item in iconList" :key="item.index">
        <img class="icons_img" :src="item.imgUrl">
        <p class="icons_desc">{{item.title}}</p>
      </div>
    </div>
    <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup() {
    const iconList = [
      {
        index: 1,
        imgUrl: require('@/assets/icons/医药健康@3x.png'),
        title: '医药健康'
      },
      {
        index: 2,
        imgUrl: require('@/assets/icons/医药健康@3x.png'),
        title: '医药健康'
      },
      {
        index: 3,
        imgUrl: require('@/assets/icons/医药健康@3x.png'),
        title: '医药健康'
      },
      {
        index: 4,
        imgUrl: require('@/assets/icons/医药健康@3x.png'),
        title: '医药健康'
      },
      {
        index: 5,
        imgUrl: require('@/assets/icons/医药健康@3x.png'),
        title: '医药健康'
      },
      {
        index: 6,
        imgUrl: require('@/assets/icons/医药健康@3x.png'),
        title: '医药健康'
      },
      {
        index: 7,
        imgUrl: require('@/assets/icons/医药健康@3x.png'),
        title: '医药健康'
      },
      {
        index: 8,
        imgUrl: require('@/assets/icons/医药健康@3x.png'),
        title: '医药健康'
      },
      {
        index: 9,
        imgUrl: require('@/assets/icons/医药健康@3x.png'),
        title: '医药健康'
      },
      {
        index: 10,
        imgUrl: require('@/assets/icons/医药健康@3x.png'),
        title: '医药健康'
      }
    ]

    return {
      iconList
    }
  }
}
</script>

<style lang="scss" scoped>
.location {
  position: relative;
  padding: .16rem .24rem 0 0;
  color: $text-fontcolor;
  line-height: .22rem;
  font-size: .16rem;
  @include ellipsis;
  .iconfont_address {
    position: relative;
    font-size: .18rem;
  }
  .iconfont_notice {
    position: absolute;
    top: .18rem;
    right: 0;
  }
}
.search {
  display: flex;
  height: .32rem;
  line-height: .32rem;
  margin-top: .16rem;
  background-color: #F5F5F5;
  border-radius: .16rem;
  i {
    color: #B7B7B7;
    font-size: .16rem;
    margin: 0 .12rem 0 .16rem;
  }
  input {
    flex: 1;
    height: .32rem;
    color: #333;
    padding-right: .16rem;
    @include input;
  }
}
.banner {
  height: 0;
  overflow: hidden;
  // 长宽比24.5：1
  padding-bottom: 24.5%;
  margin-top: .12rem;
  &_img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  padding-top: .16rem;
  &__item {
    width: 20%;
    text-align: center;
    padding-bottom: .16rem;
    .icons_img {
      display: block;
      width: .4rem;
      margin: 0 auto;
    }
    .icons_desc {
      margin-top: .06rem;
    }
  }
}
.gap {
  height: .1rem;
  margin: 0 -.18rem;
  background: $content-bgColor;
}
</style>
