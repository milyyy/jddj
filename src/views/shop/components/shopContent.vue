<template>
  <div class="content">
    <div class="content__category">
      <div class="content__category__item"
          v-for="item in categories"
          :key="item.tab"
          @click="() => handleClickTab(item.tab)">{{item.name}}</div>
    </div>
    <div class="content__product">
      <div class="content__product__item"
          v-for="item in productList"
          :key="item.id">
        <div class="left">
          <img :src="require('@/assets/products/'+ item.imgUrl)">
        </div>
        <div class="right">
          <h4 class="title">{{item.name}}</h4>
          <div class="volumn">月售 {{item.volumn}} 件</div>
          <div class="price">
            <span>¥{{item.price}}</span>
            <span>¥{{item.oldPrice}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import { getProductById } from 'utils/api'
export default {
  name: 'content',
  setup() {
    const categories = [
      { name: '全部商品', tab: 'all' },
      { name: '秒杀', tab: 'kill' },
      { name: '新鲜水果', tab: 'fruits' },
      { name: '休闲食品', tab: 'food' },
      { name: '时令蔬菜', tab: 'vegetables' },
      { name: '肉蛋家禽', tab: 'meat' },
    ]
    const data = reactive({
      tab: 'all',
      productList: []
    })
    const route = useRoute()
    const handleClickTab = async (tab) => {
      const result = await getProductById({shopId: route.query.id, tab: tab})
      data.productList = result?.data?.list;
    }
    handleClickTab('all')
    const { tab, productList } = toRefs(data);
    return {
      categories,
      productList,
      handleClickTab
    }
  },
}
</script>

<style lang="scss" scoped>
.content {
  position: absolute;
  top: 1.5rem;
  bottom: 0.5rem;
  left: 0;
  right: 0;
  display: flex;
  &__category {
    width: 0.75rem;
    background-color: #f5f5f5;
    &__item {
      height: 0.4rem;
      line-height: 0.4rem;
      font-size: 0.14rem;
      color: #333333;
      text-align: center;
      &--active {
        background-color: #fff;
      }
    }
  }
  &__product {
    flex: 1;
    font-size: 0.14rem;
    padding: 0 .16rem;
    &__item {
      display: flex;
      flex-wrap: wrap;
      padding: .12rem 0;
      border-bottom: .01rem solid #f5f5f5;
      .left {
        width: .68rem;
        height: .68rem;
        img {
          width: 100%;
        }
      }
      .right {
        flex: 1;
        padding-left: .16rem;
        .title {
          height: .2rem;
          line-height: .2rem;
        }
        .volumn {
          font-size: .12rem;
          margin: .06rem 0;
        }
        .price {
          height: .2rem;
          line-height: .2rem;
          span{
            &:first-child {
              color: #E93B3B;
              font-weight: 700;
            }
            &:last-child {
              color: #999;
              font-size: .12rem;
              margin-left: .12rem;
            }
          }
        }
      }
    }
  }
}
</style>
