var slide = document.getElementsByClassName("photo")
var previous = document.getElementById("svg-1")
var next = document.getElementById("svg-2")
var position = 0;
var menu = document.getElementsByClassName("menu")[0]
var burger =document.getElementById("svg-0")

for (let index = 1; index < slide.length; index++) {
     const element = slide[index];
     element.style.display = "none"
}
var sliderFunctions = {
 shiftImage: () =>  {
          if (position - 1 < 0) {
            position = slide.length-1;
          } else {
            position = position - 1;
          }
      
          for (let index = 0; index < slide.length; index++) {
            const element = slide[index];
            if (index == position) {
              element.style.display = "block";
            } else {
              element.style.display = "none";
            }
          }
},

shiftImage_1: () =>  {
  if (position + 1 < 0) {
    position = slide.length-1;
  } else {
    position = position + 1;
  }

  for (let index = 0; index < slide.length; index++) {
    const element = slide[index];
    if (index == position) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
},
}




var listerner_background_headerfunction = () =>{
//  var intervalID = setInterval(sliderFunctions.shiftImage, 4000);
 previous.addEventListener("click",sliderFunctions.shiftImage)
 next.addEventListener("click",sliderFunctions.shiftImage_1)

}
var burgerfunction = {
  clickburger: () =>{
  // burger.addEventListener("click")
    if (menu.style.display === "none") {
      console.log("display === none")
      menu.style.display = "flex"
    }else{
      console.log("display === block")
      menu.style.display = "none"
    }
  }
  
  }
  
var listerner_burgerfunction = () =>{
  console.log("add listener on burger")
burger.addEventListener("click",burgerfunction.clickburger)
}

