const  menuToggle = document.querySelector('.toggle');
const navigation = document.querySelector('header');


menuToggle.onclick = function(){
    navigation.classList.toggle('open')
   
}


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
   
  
  });