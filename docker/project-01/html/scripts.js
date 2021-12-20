//1.
// const calculator = (width, long) => {    
//     return width===long ? calSquare(width, long) : calRetangle(width, long);
// }

// const calRetangle = (width, long)=>{
//     s = width*long;
//     c = (width+long)/2;
//     return `Chu vi của HCN là ${c} \nDiện tích HCN là ${s}`;

// }
// const calSquare = (width, long)=>{
//     s = width**2;
//     c = width*2;
//     return `Chu vi của hình vuông là ${c} \nDiện tích hình vuông là ${s}`;

// }
// console.log(calculator(10,10)); 
// console.log(calculator(10,20)); 

//2.
// function sendGreeting() {
//     if (confirm("CÓ muốn nhận 1 lời chào không ?")) {
//         const root = document.getElementById("root");
//         const image = document.createElement('img'); 
//         image.src = "./hi.png";
//         root.appendChild(image);
//     }else {
//         alert('Vậy thôi!');
//     }
// }
// console.log(sendGreeting());

//3.log
// function evaluate(){
//     correctAnswer1 = 20;
//     correctAnswer2 = 100;
//     const answer1 = parseInt(prompt('10 + 10 bằng bao nhiêu:','Nhập kết quả...'));
//     if(answer1 == correctAnswer1){
//         if(confirm('Có muốn trả lời câu thứ 2 ko ?')){
//             const answer2 = parseInt(prompt('10 * 10 bằng bao nhiêu:'));
//             const out = answer2 === correctAnswer2 ? 'CORRECT' : 'INCORRECT';
//             alert(out);
//         }    
//     } 
//  } 
//  evaluate();

//4.
//a.
var j=4;
while(j>0){
    document.write(j +"<br>");
    j--;
}
//b.
var k = 1;
while(k <=99 ){
    k = k/1.5;    
    document.write(k + "<br>")
    k = k*2;
}
//c.
var num = 0;
while(num < 10){
    if(num == 8) break;
    document.write(num + "<br>")
    num ++;
} 
