/*Задание 1
оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.
 */

function getQuantityElement() {
    let arr1 = [1, 2, 0, "-", null];
  
  let even = 0;
  let odd = 0;
  let zero = 0;
  let other = 0;
  
  for (let i = 0; i < arr1.length; i++){
    if (typeof(arr1[i]) === "string"
     || typeof(arr1[i]) === "null"
     || typeof(arr1[i]) === "object") {
      other++;
    } else if (arr1[i] === 0){
      zero++;
    } else if (arr1[i] == (i % 2 === 0)) {
     even++;
    } else if (arr1[i] != (i % 2 === 0)){
      odd++;
    }  
  }
  
  console.log(`В массиве ${arr1.length} цифр, ${zero} нулей, ${even} чётных, ${odd} нечётных! и ${other} - другие значения`);
  };
  
  getQuantityElement();
  