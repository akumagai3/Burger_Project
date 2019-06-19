const checkCheese = document.querySelector("#cheese")
const checkHot = document.querySelector("#hot")
const checkEgg = document.querySelector("#egg")
const checkBacon = document.querySelector("#bacon")
const imageCheese = document.querySelector("#cheese-pic")
const imageHot = document.querySelector("#hot-pic")
const imageEgg = document.querySelector("#egg-pic")
const imageBacon = document.querySelector("#bacon-pic")
const checkoutButton = document.querySelector('.button')
const answerHolder = document.querySelector('#total')




checkCheese.addEventListener('change', function(e){
    if(checkCheese.checked){
         console.log('cheese checked')
         imageCheese.innerHTML = `<img src="https://media.mnn.com/assets/images/2018/10/American_cheese.jpg.653x0_q80_crop-smart.jpg" style="width:200px; height:200px;"/>`
    }
    else{
        imageCheese.innerHTML = `<img src="" />`
    }
})

checkHot.addEventListener('change', function(e){
    if(checkHot.checked){
         console.log('hot checked')
         imageHot.innerHTML = `<img src="https://images-na.ssl-images-amazon.com/images/I/818rIf9Y98L._SY355_.jpg" style="width:185px; height:300px;"/>`
    }
    else{
        imageHot.innerHTML = `<img src="" />`
    }
})

checkEgg.addEventListener('change', function(e){
    if(checkEgg.checked){
         console.log('egg checked')
         imageEgg.innerHTML = `<img src="https://i.dailymail.co.uk/i/pix/2017/03/23/09/3E8CA0A900000578-4341566-image-a-3_1490260698976.jpg" style="width:200px; height:200px;"/>`
    }
    else{
        imageEgg.innerHTML = `<img src="" />`
    }
})

checkBacon.addEventListener('change', function(e){
    if(checkBacon.checked){
         console.log('bacon checked')
         imageBacon.innerHTML = `<img src="https://img1.mashed.com/img/gallery/the-best-ways-to-cook-bacon/intro-1509550639.jpg" style="width:200px; height:200px;"/>`
    }
    else{
        imageBacon.innerHTML = `<img src="" />`
    }
})

checkoutButton.addEventListener('click', () => {
  let total = 0
  const toppings = document.querySelectorAll('.burger-checkbox')
  toppings.forEach(topping => {
      if (topping.checked) {
            total += +topping.getAttribute('price')
      }
  })
 answerHolder.innerHTML = `The total cost of your burger is $${total}`
  console.log(total)
})


