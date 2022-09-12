// Создайте функцию с переменным числом аргументов которая высчитывает среднее арифметическое по ним. 
// Пример: 
// avg(1,2,3) должна вернуть 2 
// avg(1,2,3,4) должна вернуть 2,5 
// avg() должна вернуть 0


let arr1 = [1,2,3];
let arr2 = [1,2,3,4];
let arr3 = [];

function middle (arr1) {
    if (arr1.length === 0){
        return 0;
    }
    let summa = 0;

    for (let i = 0; i < arr1.length; i++) {
        summa += arr1[i];
    }

    return summa / arr1.length;
}
console.log(middle(arr1)); 


function middle2 (arr2) {
    if(arr2.length === 0) {
        return 0;
    }
    let sum = 0;

    for (let z = 0; z < arr2.length;z++ ) {
        sum += arr2[z];
    }
    return sum / arr2.length;
}
console.log(middle2(arr2));


function middle3 (arr3) {
    if (arr3.length === 0) {
        return 0;
    }
    let sum3 = 0;

    for (let s = 0;s < arr3.length; s++) {
        sum3 += arr3[s];
    }
    return sum3 / arr3.length;
}

console.log(middle3(arr3));