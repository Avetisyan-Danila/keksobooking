function getRandomNum(min, max, digits) {
  if (min > max || min === max || min < 0 || max <= 0 || digits < 0 || typeof(max) !== 'number' || typeof(min) !== 'number' || typeof(digits) !== 'number') {
    return ('Задан неверный диапазон! Укажите другие числа.');
  }

  return +(Math.random() * (max - min) + min).toFixed(digits);
}

getRandomNum(1, 15, 3);
