let a = -50;

// 90 <= score <= 100 	'A'
// 80 <= score < 90 	'B'
// 70 <= score < 80 	'C'
// 60 <= score < 70 	'D'
// 0 <= score < 60 	'F'

// if ((a > 0)&&(a <= 60)) {
//     console.log('F')
// } else if((a > 60)&&(a <= 70)){
//     console.log('D')
// } else if((a > 70)&&(a <= 80)){
//     console.log('C')
// } else if((a > 80)&&(a <= 90)){
//     console.log('B')
// } else if((a > 90)&&(a <= 100)){
//     console.log('A')
// } else {
//     console.log('Что ты такое?')
// }


// let arr=[2,4,7];
// for (let i=0; i<arr.length; i++){
//     arr[i] *= 2;
// }
// console.log(arr)

let arr1 = [24, 4, 6];
let iterator =0;
for (let i=1; i<arr1.length; i++){
    if(arr1[0] % arr1[i] === 0){
    iterator++;
    } 
}
if (iterator===(arr1.length-1)){
    console.log('Кратно')
} else {
    console.log('Не кратно')
}

