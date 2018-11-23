import ListStore from './ListStore';
import CountStore from './CountStore'
import CartStore from './CartStore';

const listStore = new ListStore();
const countStore = new CountStore();
const cartStore = new CartStore();


const stores = {
    listStore,
    countStore,
    cartStore
}

export default stores