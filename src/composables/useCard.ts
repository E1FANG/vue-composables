import { computed, ref } from "vue"
import { ElMessage, ElMessageBox } from 'element-plus'
const card = ref<CardItem[]>([])

export const useCard = () => {
  const loading = ref(false)
  const addToCard = (product: Product) => {
    const item = card.value.find(e => e.id === product.id)
    if (item) {
      updateCard(item, item.quantity + 1)
    } else {
      card.value.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1
      })
    }
  }

  const cardTotal = computed(() => card.value.reduce((acc, item) => {
    return acc + item.quantity
  }, 0))
  // oldValue:number
  const updateCard = async (item: CardItem, quantity: number) => {
    loading.value = true
    if (quantity <= 0) {
      ElMessageBox.confirm('Are you sure to remove the item?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      })
        .then(() => {
          removeFromCard(item)
        })
        .catch(() => {
          // console.log(1111,oldValue);
          // item.quantity = quantity
          // item.quantity = oldValue
          ElMessage({
            type: 'info',
            message: 'remove canceled',
          })
        })
    } else {
      // 请求接口
      item.quantity = quantity
    }
    setTimeout(() => {

      loading.value = false
    }, 1000)
  }

  const removeFromCard = async (item: CardItem) => {
    const index = card.value.findIndex(e => e.id === item.id)
    if (index !== -1) {
      // 请求接口
      card.value.splice(index, 1)
      ElMessage({
        type: 'success',
        message: `remove item succeed`,
      })
    }
  }

  const isCardEmpty = computed(() => card.value.length === 0)

  return {
    card,
    addToCard,
    cardTotal,
    updateCard,
    removeFromCard,
    isCardEmpty,
    loading
  }
}