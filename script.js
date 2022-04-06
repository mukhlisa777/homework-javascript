function random (min , max){
    return Math.floor(Math.random() * (max + 1 - min) + min)

}


let misol = +prompt('nechta misol yechmoqchisiz?')
    
 for (let i = 1; i <= misol; i++){
    let num = random(200,500)
    let num2 = random(1,90)
    if (num < 200) {
      let yourAnswer = prompt(`misolni yeching ${num} - ${num2}`)
      alert(`sizning javobingiz ${yourAnswer}`)
      console.log(`to'g'ri javob  ${num - num2}`);
    } else if (num < 250) {
      let yourAnswer = prompt(`misolni yeching ${num} + ${num2}`)
      alert(`sizning javobingiz ${yourAnswer}`)
      console.log(`to'g'ri javob  ${num + num2}`);
    } else if(num < 350){
      let yourAnswer = prompt(`misolni yeching ${num} * ${num2}`)
      alert(`sizning javobingiz ${yourAnswer}`)
      console.log(`to'g'ri javob  ${num * num2}`);
    }else if (num < 300){
      let yourAnswer = prompt(`misolni yeching ${num} / ${num2}`)
      alert(`sizning javobingiz ${yourAnswer}`)
      console.log(`to'g'ri javob  ${num / num2}`);
    }
    

   
   }



