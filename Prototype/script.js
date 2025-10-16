const task1 = document.getElementById('task1');
const task2 = document.getElementById('task2');
const task3 = document.getElementById('task3');

const counter = document.getElementById('counter');


function updateCounter() {
    let count = 0;

    if (task1.checked) count++;
    if (task2.checked) count++;
    if (task3.checked) count++;

    counter.textContent = count;
}

task1.addEventListener('change', updateCounter);
task2.addEventListener('change', updateCounter);
task3.addEventListener('change', updateCounter);