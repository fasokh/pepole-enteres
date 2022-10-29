// document.getElementById('count').innerText = 5;
// let count = 0;

// console.log(count);

let countEl = document.getElementById('count-el');

console.log(countEl);

let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

let saveEl = document.getElementById('save-el');

function save() {
    let saveCount = count + ' - ';
    saveEl.textContent += saveCount;    
    countEl.textContent = 0;
    count = 0;
}