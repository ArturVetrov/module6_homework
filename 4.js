/*Задание 4.
Напишите функцию, которая принимает два числа. 
Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. 
Используйте setInterval. */

let numFirst = +prompt("Введите первое число")
let numSecond = +prompt("Введите второе число")

function func(begin, end) {
  let current = begin;
  
  const intervalID = setInterval(function(a, b){
    console.log(current);
    if (current == end) {
    clearInterval(intervalID);
  } else {
      current ++;                         
    }}, 1000, current);
}

func(numFirst, numSecond);