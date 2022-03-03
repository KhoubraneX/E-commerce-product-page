// style
document.querySelector(".acc svg").addEventListener('click' , function(x){
    document.querySelector('.menu').classList.toggle('display')
})
//

// img effect
function refuse(){
document.querySelectorAll('.bttom-img img').forEach(function(x){
    x.setAttribute('style' , 'border: none;')
})}
document.querySelector('.bttom-img img').setAttribute('style' , "border: #fe7d21 3px solid;opacity: 0.6;")
document.querySelector('.bttom-img img').addEventListener('click' , function(x){
    refuse()
    document.querySelector('.bttom-img img').setAttribute('style' , "border: #fe7d21 3px solid;opacity: 0.6;")
    document.querySelector('.img-product img').src = "images/image-product-1.jpg"
})
document.querySelector('.bttom-img img:nth-child(2)').addEventListener('click' , function(x){
    refuse()
    document.querySelector('.bttom-img img:nth-child(2)').setAttribute('style' , "border: #fe7d21 3px solid;opacity: 0.6;")
    document.querySelector('.img-product img').src = "images/image-product-2.jpg"
})
document.querySelector('.bttom-img img:nth-child(3)').addEventListener('click' , function(x){
    refuse()
    document.querySelector('.bttom-img img:nth-child(3)').setAttribute('style' , "border: #fe7d21 3px solid;opacity: 0.6;")
    document.querySelector('.img-product img').src = "images/image-product-3.jpg"
})
document.querySelector('.bttom-img img:nth-child(4)').addEventListener('click' , function(x){
    refuse()
    document.querySelector('.bttom-img img:nth-child(4)').setAttribute('style' , "border: #fe7d21 3px solid;opacity: 0.6;")
    document.querySelector('.img-product img').src = "images/image-product-4.jpg"
})
//

// counter
let counter = 1 
document.querySelector('.plus').addEventListener("click" , function(plus){
    counter++
    document.querySelector('.namber').innerHTML = counter
})
document.querySelector('.moin').addEventListener("click" , function(plus){
    if (counter>1){
    counter--
    document.querySelector('.namber').textContent = counter
    }
})
//

// creat element

document.querySelector('.add-c').addEventListener('click' , function(x){
    document.querySelector('.empty').remove()
    let val =  document.querySelector('.namber').textContent
    let v = document.createElement('div')
    v.className = "bay"
    v.innerHTML = `<div class="content-a">
    <img src="images/image-product-1-thumbnail.jpg" alt="">
    <span>
    <p class="kal">Fall Limited Edition Sneakers</p>
    <p>125.00 x
    <span class="drb"> ${val}</span>
    <span class="calc">$${125.00 * val}.00</span>
    </p>
    </span>
    </div>
    <div class="btn">Checkout</div>`
    document.querySelector('.menu').appendChild(v)
    // process
    let navige = document.createElement('span')
    navige.innerHTML = `${val}`
    navige.className = "nav"
    document.querySelector('.navi').appendChild(navige)
})

// next img 
let next = document.querySelector('.n-p svg:last-child')
let preveus = document.querySelector('.n-p svg')
let imgcounter = 1

next.addEventListener('click' , function(x){
    if (imgcounter < 4){
        imgcounter++
    document.querySelector('.img-product img').src = `images/image-product-${imgcounter}.jpg`
    }
})

preveus.addEventListener('click' , function(x){
    if (imgcounter > 1){
        imgcounter--
        document.querySelector('.img-product img').src = `images/image-product-${imgcounter}.jpg`
    }
})