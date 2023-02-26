const btn_container = document.querySelector('.app__numbers'),
  btn = document.querySelector('.btn'),
  activeSelection = document.querySelector('.active__selection');

let numberSelected = '',
  active = '';

const numbers = Array(5)
  .fill(0)
  .map((_, i) => i + 1)
  .map(item => `<span class="number">${item}</span>`)
  .join(' ');
btn_container.innerHTML = numbers;

btn_container.addEventListener('click', ({ target }) => {
  if (target.classList[0] === 'number') {
    let numberList = [...document.querySelectorAll('.number')];

    if (target.classList.contains('active')) {
      numberList[target.textContent - 1].classList.remove('active');
      active = false;
      numberSelected = '';
    } else {
      numberList.forEach(item => item.classList.remove('active'));
      active = numberList[target.textContent - 1].classList.toggle('active');
      numberSelected = target.textContent;
    }

    if (active) {
      btn.disabled = false;
      return;
    }
    btn.disabled = true;
  }
});

if (btn.disabled) {
  btn.addEventListener('click', ({ target }) => {
    activeSelection.innerHTML = `<p>You selected ${numberSelected} out if 5</p>`;
    target.parentNode.parentNode.classList.add('hidden');
    target.parentNode.parentNode.nextElementSibling.classList.remove('hidden');
  });
}
