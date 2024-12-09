let lightContainer = document.querySelector(".light-container");

let imgList = Array.from( document.querySelectorAll(".item img"));

let boxItem = document.querySelector(".box")


let btnClose =document.getElementById("close");
let btnPrev =document.getElementById("prev");
let btnNext=document.getElementById("next");

let indexImg ;

for(let i = 0 ; i < imgList.length ; i++){
    imgList[i].addEventListener('click', function(e){
        
        lightContainer.classList.remove("d-none")


        indexImg= imgList.indexOf(e.target)
        
        let currentSrc = e.target.getAttribute('src')

        boxItem.style.backgroundImage= `url(${currentSrc})`

    })
}



function closeSlide(){

    lightContainer.classList.add("d-none")
}

function slide(step){
    indexImg+=step
    if(indexImg < 0){
        indexImg = (imgList.length-1)
    }
   
    else if(indexImg === imgList.length){
        indexImg = 0
    }

    
   let currentSrc = imgList[indexImg].getAttribute('src')

   boxItem.style.backgroundImage= `url(${currentSrc})`
}

btnClose.addEventListener('click', function(){
    closeSlide()
})

btnNext.addEventListener('click', function(){

    slide(1)
})

btnPrev.addEventListener('click', function(){
    slide(-1)
})


document.addEventListener('keydown',function(e){

    if(!lightContainer.classList.contains("d-none")){
        if(e.key=== "ArrowRight"){
            slide(1)
        }
        else if(e.key=== "ArrowLeft"){
            slide(-1)
        }
        else if(e.key=== "Escape"){
            closeSlide()
        }
    }


})


document.addEventListener('click', function(e){
  if(e.target === lightContainer){
    closeSlide()

  }
})