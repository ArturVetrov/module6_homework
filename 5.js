/*Задание 5.
Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n.
 Иначе говоря, умножает x на себя n раз и возвращает результат. */

let numFirst = +prompt("Введите первое число")
let numSecond = +prompt("Введите второе число")

const getDegree = (x, n) => console.log(Math.pow(x, n));

getDegree(numFirst, numSecond);