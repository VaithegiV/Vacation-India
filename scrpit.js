let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnail = document.querySelectorAll('.thumbnail .item');

let countItem = items.length;
let itemActive = 0;

//event next click
next.onclick = function(){
  itemActive = itemActive + 1;
  if(itemActive >= countItem){
    itemActive = 0;
  }
  showSlider();
}
/* // auuto run slider
let refreshInterval = setInterval(() => {
  next.click();
},5000); */


//event prev click
prev.onclick = function(){
  itemActive = itemActive - 1;
  if(itemActive < 0){
    itemActive = countItem - 1;
  }
  showSlider();

}

function showSlider(){
  //remove item active 
  let itemActiveOld = document.querySelector('.slider .list .item.active');
  let thumbnailActiveOld = document.querySelector('.thumbnail .item.active')
  itemActiveOld.classList.remove('active');
  thumbnailActiveOld.classList.remove('active');

  //active new item
  items[itemActive].classList.add('active');
  thumbnail[itemActive].classList.add('active');

 /*  //clear auto time run slider
  clearInterval(refreshInterval);
  let refreshInterval = setInterval(() => {
    next.click();
  },5000); */
  
}

//click thumbnail
thumbnail.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () =>{
    itemActive = index;
    showSlider();
});
  
});