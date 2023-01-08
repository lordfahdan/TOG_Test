import { defineStore, acceptHMRUpdate } from "pinia";
import axios from '@/lib/axios'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useFeeStore = defineStore("fee", {
  state: () => ({
    fees: JSON.parse(localStorage.getItem('temp')) || [],
  }),
  actions: {
    getFee() {
      axios.get('/data.json')
        .then((response) => {
          this.fees = response.data
          localStorage.setItem('temp', JSON.stringify(response.data))
        })
        .catch((error) => {
          console.log(error)
        })
    },
    addFee(item) {
      return new Promise((res) => {
        this.fees.push(item)
        localStorage.setItem('temp', JSON.stringify(this.fees))
        res('Create Fee was Successfully!')
      })
    },
    editFee(item) {
      return new Promise((res) => {
        const index = this.fees.findIndex(fee => {
          return fee.fee_code == item.fee_code
        })
        this.fees[index].name = item.name
        this.fees[index].desc = item.desc
        localStorage.setItem('temp', JSON.stringify(this.fees))
        res('Edit Fee was Successfully!')
      })
    },
    deleteFee(id) {
      const index = this.fees.map(item => {
        return item.fee_code
      }).indexOf(parseInt(id))
      this.fees.splice(index, 1)
      localStorage.setItem('temp', JSON.stringify(this.fees))
    },
    detailFee(id) {
      return new Promise((res) => {
        const filterArr = this.fees.filter(item => {
          return item.fee_code == id
        })

        res(filterArr[0])
      })
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useFeeStore, import.meta.hot))
}