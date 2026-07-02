// ============================================================
// УРОК 3 - DOM: отримання елементів, класи, стилі, атрибути
// ============================================================

// Задача №1
// Отримати елемент <body> в константу

function task1() {
  const bodyElement = document.body;
  return bodyElement;
}
task1();

// Задача №2
// Функція додає в елемент з ID 'task2-output' список UL з N елементами LI.
// де count - кількість LI, за замовченням 3

function task2(count = 3) {
  let idElement = document.querySelector("#task2-output");
  if (idElement) {
    console.log(idElement);
    let ulList = document.createElement("ul");
    for (let i = 1; i <= count; i++) {
      let liElemett = document.createElement("li");
      ulList.appendChild(liElemett);
    }
    idElement.appendChild(ulList);
    return ulList;
  }
}
task2(5);

// Задача №3
// Додати клас 'loaded' до body.
// Якщо клас є - зробити колір тексту зеленим.

function task3() {
  const bodyElement = document.body;
  bodyElement.classList.add("loaded");
  if (bodyElement.classList.contains("loaded")) {
    bodyElement.style.color = "green";
  }

  return bodyElement;
}

// Задача №4
// Дано три елементи з класом 'item'.
// Кожному додати клас 'active' та змінити контент на "Елемент №N" (з 1).

function task4(root = document) {
  let elements = root.querySelectorAll(".item");
  if (elements.length) {
    elements.forEach((item, index) => {
      item.classList.add("active");
      // item.innerHTML = `Елемент №${index+1}`;
      item.textContent = `Елемент №${index + 1}`;
    });
  }
}

// Задача №5
// Прокрутити скрол до елементу з класом 'button'.
// Функція має викликати scrollIntoView на цьому елементі.

function task5() {
  const button = document.querySelector(".button");
  if (button)
    button.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
}

// Задача №6
// Посилання з класом 'link'.
// Додати data-атрибут data-value="100".
// Якщо значення < 200 - колір тексту червоний.

function task6() {
  let linkElement = document.querySelector(".link");
  if (linkElement) {
    linkElement.setAttribute("data-value", "100");
    // const value = parseFloat(linkElement.getAttribute("data-value"));
    const value = parseFloat(linkElement.dataset.value);
    if (value < 200) {
      linkElement.style.color = "red";
    }
  }
}

// Не чіпати - потрібно і для тестів, і для браузера
if (typeof module !== "undefined")
  module.exports = { task1, task2, task3, task4, task5, task6 };
export { task1, task2, task3, task4, task5, task6 };
