// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const counterValueEl = document.querySelector('#value');

const counter = {
    value: 0,
    increment() {
        console.log('increment -> this', this);
        this.value += 1;
    },
    decrement() {
        console.log('decrement -> this', this);
        this.value -= 1;
    },
};

const UseDecrementBtn = document.querySelector('[data-action="decrement"]');
const UseIncrementBtn = document.querySelector('[data-action="increment"]');

UseDecrementBtn.addEventListener('click', onBtnDecrementClick);
UseIncrementBtn.addEventListener('click', onBtnIncrementClick);

function onBtnDecrementClick() {
    counter.decrement();

    counterValueEl.textContent = counter.value;
}

function onBtnIncrementClick() {
    counter.increment();

    counterValueEl.textContent = counter.value;
}
