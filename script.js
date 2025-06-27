//your JS code here. If required.
const output = document.getElementById('output');

function createPromise(index) {
  return new Promise((resolve) => {
    const delay = Math.random() * 2000 + 1000; // Between 1000 and 3000 ms
    setTimeout(() => {
      resolve(delay / 1000);
    }, delay);
  });
}

const startTime = performance.now();

Promise.all([
  createPromise(1),
  createPromise(2),
  createPromise(3)
]).then((times) => {
  // Remove the "Loading..." row
  output.innerHTML = '';

  times.forEach((time, i) => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = `Promise ${i + 1}`;

    const timeCell = document.createElement('td');
    timeCell.textContent = time.toFixed(3);

    row.appendChild(nameCell);
    row.appendChild(timeCell);
    output.appendChild(row);
  });

  const totalTime = (performance.now() - startTime) / 1000;

  const totalRow = document.createElement('tr');

  const totalNameCell = document.createElement('td');
  totalNameCell.textContent = 'Total';

  const totalTimeCell = document.createElement('td');
  totalTimeCell.textContent = totalTime.toFixed(3);

  totalRow.appendChild(totalNameCell);
  totalRow.appendChild(totalTimeCell);
  output.appendChild(totalRow);
});

