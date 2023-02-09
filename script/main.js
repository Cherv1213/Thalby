"use stric"

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const list = document.querySelector('.menu__list');

burger();

function burger(){
   iconMenu.addEventListener('click',(e)=>{
   
      iconMenu.classList.toggle('active');
   
       if(menuBody.style.maxHeight){
         menuBody.style.maxHeight = null;
        } else {
         menuBody.style.maxHeight = 140 + 'px';
        };
   
         document.addEventListener('click',(el)=>{
         const click = el.composedPath().includes(iconMenu) || el.composedPath().includes(list);
   
         if(!click){
          menuBody.style.maxHeight = null;
          iconMenu.classList.remove('active');
         }
       })
   });
}
