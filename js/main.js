//https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getrandomIntFromInterval(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (max <= min || max < 0 || min < 0) ? NaN : Math.floor (Math.random() * (max - min + 1)) + min;//Условия для вывода NaN подсмотрел в чате дискорда
}

getrandomIntFromInterval(0, 56);


function stringLenght(str, maxlength) {
  return str.length <= maxlength;
}

stringLenght('Keks', 4);

