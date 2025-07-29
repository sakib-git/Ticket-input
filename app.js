const nameM = document.getElementById('name');
const age = document.getElementById('age');
const number = document.getElementById('number');
const btn = document.getElementById('btn');
const result = document.getElementById('result');
const Money = document.getElementById('Money');

zeroBtn.zeroRipple('.ripple-effect-btn', {
  color: 'skyblue',
});



const nameresult = document.getElementById('nameresult');
const ageresult = document.getElementById('ageresult');
const numberresult = document.getElementById('numberresult');
const moneyresult = document.getElementById('moneyresult');
const title = document.getElementById('title');
btn.addEventListener('click', () => {
  const namevalue = nameM.value;
  nameresult.innerText = namevalue;

  const agevalue = age.value;
  ageresult.innerText = agevalue;

  const numbervalue = number.value;
  numberresult.innerText = numbervalue;

  const moneyvalue = Money.value;
  moneyresult.innerText = moneyvalue;

  if (moneyvalue < 550) {
    moneyresult.innerText = 'Please pay 550';
    title.innerText = 'Something wrong';
  } else if (agevalue <= 12) {
    moneyresult.innerText = 'free';
    title.innerText = 'you are Underage';
  } else if (agevalue >= 12 && agevalue <= 30) {
    const discount = (moneyvalue * 30) / 100;
    const total = moneyvalue - discount;
    moneyresult.innerText = `${total} tk`;
    title.innerText = 'you are a student, you got 30%  discount';
  } else if (agevalue >= 65) {
    const discount = (moneyvalue * 15) / 100;
    const total = moneyvalue - discount;
    moneyresult.innerText = total;
    title.innerText = 'You are an old citizen, you got 15% discount';
  } else {
    moneyresult.innerText = moneyvalue;
    title.innerText = 'Thank you';
  }

  const container = document.querySelector('.container');
  const result = document.getElementById('result');
  const allinput = document.querySelectorAll('.allinput');

  let allFilled = true;

  allinput.forEach((i) => {
    if (i.value == '') {
      i.classList.add('show');
      allFilled = false;
    }

    if (allFilled) {
      //or if(i.value !== '')
      container.style.display = 'none';
      result.style.display = 'block';
    }
  });

  allinput.forEach((i) => {
    i.addEventListener('keyup', () => {
      if (i.value !== '') {
        i.classList.remove('show');
      }
    });
  });

  number.addEventListener('keyup', () => {
    if (number.value.length < 11) {
      number.classList.add('show');
    } else {
      number.classList.remove('show');
    }
  });
});

const getAnotherBtn = document.getElementById('get-another-btn');
const container = document.querySelector('.container');

getAnotherBtn.addEventListener('click', () => {
  result.style.display = 'none';
  container.style.display = 'flex';
});
