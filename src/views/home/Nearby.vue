<template>
  <div class="nearby">
    <h3>附近店铺</h3>
    <router-link
      v-for="item in shopList"
      :key="item.id"
      :to="{ path: '/shop', query: { ...item } }">
      <shop-item :item="item" />
    </router-link>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { GetShopList } from 'utils/api'
import shopItem from '../shop/components/shopItem.vue'
export default {
  name: 'Nearby',
  components: { shopItem },
  setup() {
    let shopList = ref([])
    GetShopList().then(
      (response) => {
        shopList.value = response.data?.list
      },
      (err) => {},
    )
    const router = useRouter()
    return {
      shopList,
    }
  },
}
</script>

<style lang="scss" scoped>
.nearby {
  padding-top: 0.16rem;
  color: $text-fontcolor;
  h3 {
    font-size: 0.18rem;
  }
  a {
    text-decoration: none;
    color: #333;
  }
}
</style>
