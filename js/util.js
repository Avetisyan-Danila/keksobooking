function getRandomFloat(min, max, digits = 1) {
  if (
    min > max ||
    min === max ||
    min < 0 ||
    max <= 0 ||
    digits < 0 ||
    typeof(max) !== 'number' ||
    typeof(min) !== 'number' ||
    typeof(digits) !== 'number') {
    return ('Задан неверный диапазон! Укажите другие числа.');
  }

  return Number((Math.random() * (max - min) + min).toFixed(digits));
}

function getAuthorAvatar () {
  const imgNum = Math.floor(getRandomFloat(1, 11));

  if (imgNum < 10) {
    return `0${imgNum}`;
  }

  return imgNum.toString();
}

const getRandomArrayElement = (elements) => elements[Math.floor(getRandomFloat(0, elements.length - 1))];

export {getRandomFloat, getRandomArrayElement, getAuthorAvatar};
