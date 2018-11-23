import ListStore from './ListStore';
import CountStore from './CountStore'

const listStore = new ListStore();
const countStore = new CountStore();


const stores = {
    listStore,
    countStore
}

export default stores