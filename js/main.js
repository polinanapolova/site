const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');
const navItem = document.querySelector('#nav-item');
const navList = document.querySelector('#nav-list');

navBtn.onclick = () => {
    if(nav.classList.toggle('open')){
        navBtnImg.src = "./img/nav-close.svg";
    }
    else{
        navBtnImg.src = "./img/nav-open.svg";
    }
}
AOS.init();

// navItem.onclick = function(){
//     if(getComputedStyle(navList).display === 'flex'){
//         navList.style.display = 'none';
//     }
//     else{
//         navList.style.display = 'flex';
//     }
// };