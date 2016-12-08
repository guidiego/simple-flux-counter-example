import Dispatcher from './dispatcher';

import { EventEmitter } from "events";
import { INCREASE, DECREASE, VALUE_CHANGE } from './constants'

const dispatchToken = function (action) {
    switch(action.type) {
        case INCREASE:
           return this.increase()
        case DECREASE:
            return this.decrease()
    }
};

class CounterStore extends EventEmitter {
    constructor() {
        super()
        this.value = 0
        this.dispatchToken = Dispatcher.register(dispatchToken.bind(this))
    }

    increase() {
        this.value = this.value + 1
        this.emit(VALUE_CHANGE)
    }

    decrease() {
        this.value = this.value - 1
        this.emit(VALUE_CHANGE)
    }

    onValueChange(callback) {
        this.on(VALUE_CHANGE, () => callback(this.value))
    }
}

export default new CounterStore();