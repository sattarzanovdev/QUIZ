var ball = 0

var ask = prompt('1 + 1 = ?')

if(ask == "2"){
     ball++
     alert('+1')
}else{
     alert('Неправильно')
}

var ask2 = prompt('2 + 2 = ?')

if(ask2 == "4"){
     ball++
     alert('+1')
}else{
     alert('Неправильно')
}

var ask3 = prompt('4 + 4 = ?')

if(ask3== "8"){
     ball++
     alert('+1')
}else{
     alert('Неправильно')
}


var ask4 = prompt('8 + 8 = ?')

if(ask4 == "16"){
     ball++
     alert('+1')
}else{
     alert('Неправильно')
}

var ask5 = prompt('16 + 16 = ?')

if(ask5 == "32"){
     ball++
     alert('+1')
}else{
     alert('Неправильно')
}


var ask6 = prompt('1 + 1 = ?')

if(ask6 == "2"){
     ball++
     alert('+1')
}else{
     alert('Неправильно')
}

var ask7 = prompt('2 + 2 = ?')

if(ask7 == "4"){
     ball++
     alert('+1')
}else{
     alert('Неправильно')
}

var ask8 = prompt('4 + 4 = ?')

if(ask8 == "8"){
     ball++
     alert('+1')
}else{
     alert('Неправильно')
}


var ask9 = prompt('8 + 8 = ?')

if(ask9 == "16"){
     ball++
     alert('+1')
}else{
     alert('Неправильно')
}

var ask10 = prompt('16 + 16 = ?')

if(ask10 == "32"){
     alert('+1')
     ball++
}else{
     alert('Неправильно')
}


if(ball >= 0 && ball <= 6){
     alert('2')
}else if(ball >= 7 && ball <= 8){
     alert('3')
}else if(ball === 9){
     alert('4')
}else if(ball === 10){
     alert('5')
}


var ball = 0
for(var i = 1; i < 11; i++){
     var ans = +prompt(i + ' + ' + i)
     if(ans === (i + i)){
          ball++
     }else{
          continue
     }
}

if(ball >= 0 && ball <= 6){
     alert('2')
}else if(ball >= 7 && ball <= 8){
     alert('3')
}else if(ball === 9){
     alert('4')
}else if(ball === 10){
     alert('5')
}

// for(var i = 0; i < 5; i++){
//      var a = Math.floor(Math.random(a) * 11)
//      var b = Math.floor(Math.random(b) * 11)
//      if(a > b){
//           alert(a + " > " + b)
//      }else{
//           alert(a + ' < ' + b)
//      }
// }


// var big = 0
// for(var i = 0; i < 5; i++){
//      var num1 = +prompt('1 число')
//      var num2 = +prompt('2 число')
//      if(num1 > num2){
//           console.log(num1 + ' > ' + num2)
//           if(num1 > big){
//                console.log('Новая самая большая переменная ' + num1)
//                big = num1
//           }
//      }else if(num2 > num1){
//           console.log(num2 + ' > ' + num1)
//           if(num2 > big){
//                console.log('Новая самая большая переменная ' + num2)
//                big = num2
//           }
//      }else if(num1 = num2){
//           console.log(num1 + ' = ' + num2)
//           if(num1 > big){
//                console.log('Новая самая большая переменная ' + num1)
//                big = num1
//           }
//      }
// }

// console.log('Самая большая переменная ' + big)