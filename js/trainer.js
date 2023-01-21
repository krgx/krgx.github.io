function generateText(letters, length) {
  var text = "";
  for (let i = 0; i < length; i++) {
    let n = getRandomNumber(letters.length - 1);
    text = text + letters[n];
  }
  return text;
  function getRandomNumber(max) {
    return Math.round(Math.random() * max);
  }
}
alert(
  "Вас приветствует тренажер по слепой печати.Нажмите на кнопку старт для начала"
);

function level1() {
  while (true) {
    alert("Положи руки на клавиаутуру и приготовьтесь");
    var text = generateText(["а", "ф"], 5);
    var userText = prompt(text);
    if (userText == text) {
      alert("Поздравляю , переходи на 2 уровень");
      level2();
      return false;
    } else {
      alert("ошибка");
      return level1;
    }
  }
}
function level2() {
  while (true) {
    var text = generateText(["а", "ф", "в"], 5);
    var userText = prompt(text);
    if (userText == text) {
      alert("Поздравляю , переходи на 3 уровень");
      level3();
      break;
    } else {
      alert("ошибка");
      return level2;
    }
  }
}
function level3() {
  while (true) {
    var text = generateText(["а", "ф", "в", "л", "ы"], 10);
    var userText = prompt(text);
    if (userText == text) {
      alert("Поздравляю , вы прошли все уровни!Молодец!");
    } else {
      alert("ошибка");
    }
    return false;
  }
}
