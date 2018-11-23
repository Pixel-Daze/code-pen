import { observable, action, computed } from 'mobx'

class Count {
    @observable number1 = 0;
    @observable number2 = 100;
    @computed get getTotal(){
        return this.number1 + this.number2
    }

    @action addNum1 = () => {
        this.number1 ++
    }

    @action addNum2 = () => {
        this.number2 ++
    }
}

export default Count;