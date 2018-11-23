import { observable, computed, action } from 'mobx'
import { data } from '@/pages/mobxCart/data'

const dataList = data.map(z => ({checked: true, ...z}))
class CartStore {
    @observable list = dataList
    @observable checkAll = true

    @action removeItem = (id) => {
        this.list.forEach((item, i) => {
            if(item.id === id){
                this.list.splice(i, 1);
            }
        });
    }

    @action add = (id) => {
        this.list.forEach(item => item.id === id && item.buyNum++)
    }

    @action sub = (id) => {
        this.list.forEach(item => (item.id === id && item.buyNum > 0) && item.buyNum--)
    }

    @action onChecked = (id) => {
        this.list.forEach(item => {
            if(item.id === id){
                if(item.checked) this.checkAll = false
                item.checked = !item.checked
            }
        })
        if(this.list.every(item => item.checked === true)) this.checkAll = true
    }

    @action onCheckAll = () => {
        this.checkAll = !this.checkAll
        console.log(this.checkAll)
        this.list.forEach(item => item.checked = this.checkAll)
    }

    @computed get totalPrice(){
        let total = 0
        this.list.forEach(item => {
            if(item.checked) total += item.buyNum * item.price
        })

        return total
    }
}

export default CartStore;