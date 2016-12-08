import { increase, decrease } from './action';
import store from './store';

class CounterController {
    constructor() {
        this.parent = document.getElementById('app');
        this.elements = {};
    }

    updateMonitor(value) {
        this.elements.monitor.textContent = value;
    }

    mountButton(spaceName, label, onClick) {
        this.elements[spaceName]  = document.createElement('button');
        this.elements[spaceName].textContent = label;
        this.elements[spaceName].onclick = onClick;
        this.elements[spaceName].className = 'button';
    }

    mountMonitor(value = 0) {
        this.elements['monitor'] = document.createElement('h1')
        this.elements['monitor'].textContent = store.value
        this.elements['monitor'].className = 'monitor';
    }

    render() {
        this.mountButton('increaseBtn', 'Increase', increase);
        this.mountButton('decreaseBtn', 'Decrease', decrease);
        this.mountMonitor()

        this.parent.appendChild(this.elements.monitor)
        this.parent.appendChild(this.elements.increaseBtn)
        this.parent.appendChild(this.elements.decreaseBtn)
    }
}

const counterController = new CounterController();
counterController.render();

store.onValueChange(v => {
    counterController.updateMonitor(v);
})