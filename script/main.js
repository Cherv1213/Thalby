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

const offset = 100;
const scrollUp = document.querySelector('.scroll-up');
const scrollUpSvgPath = document.querySelector('.scroll-up__svg-path');
const pathLength = scrollUpSvgPath.getTotalLength();
 
scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms';

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

//
const updateDashoffset = () => {
   const height = document.documentElement.scrollHeight - window.innerHeight;
   const dashoffset = pathLength - (getTop() * pathLength / height);

   scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};

//
window.addEventListener('scroll', () =>{
   updateDashoffset();

   if(getTop() > offset) {
      scrollUp.classList.add('_active');
   } else {
      scrollUp.classList.remove('_active');
   }
});

//
scrollUp.addEventListener('click', () =>{
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   });
});