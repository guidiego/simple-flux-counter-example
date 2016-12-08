import Dispatcher from './dispatcher'
import { INCREASE, DECREASE } from './constants'

export const increase = () => {
    Dispatcher.dispatch({type: INCREASE})
}
export const decrease = () => {
    Dispatcher.dispatch({type: DECREASE})
}