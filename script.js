AOS.init();

let grid = document.getElementById('grid-show');
let hovr = document.getElementById('main-nav-element-5');
let hov = document.getElementById('hover-visible');

hovr.addEventListener('mouseenter', function show(){
    setTimeout(() => {
        grid.style.display = "grid";
        hov.style.display = 'block';
    }, 350);
    
})
grid.addEventListener('mouseenter', function show(){
   
        grid.style.display = "grid";
        hov.style.display = "block";
    
})
hovr.addEventListener('mouseleave', function hide(){
    
    setTimeout(() => {
        grid.style.display = "none";
        hov.style.display = 'none';
    }, 100);
})
grid.addEventListener('mouseleave', function hide(){
    grid.style.display = "none";
    hov.style.display = 'none';
})


let slider = document.getElementById('slider');
let caraousel = document.getElementById('slider');



let img_1 = document.getElementById('hero-1');
let img_2 = document.getElementById('hero-2');
let img_3 = document.getElementById('hero-3');
let img_4 = document.getElementById('hero-4');
let img_5 = document.getElementById('hero-5');
let img_6 = document.getElementById('hero-6');
let imgs = document.getElementById('images');


setInterval(() => {
    if(img_1.style.display != 'none'){
        img_1.style.display = 'none'
    }else if(img_2.style.display != 'none'){
        img_2.style.display = 'none'
    }else if(img_3.style.display != 'none'){
        img_3.style.display = 'none'
    }else if(img_4.style.display != 'none'){
        img_4.style.display = 'none'
    }else if(img_5.style.display != 'none'){
        img_5.style.display = 'none'
    }else if(img_6.style.display != 'none'){
        img_6.style.display = 'none'
        img_1.style.display = 'block';
        img_2.style.display = 'block';
        img_3.style.display = 'block';
        img_4.style.display = 'block';
        img_5.style.display = 'block';
        img_6.style.display = 'block';
    }
}, 5000);


//Search Logix

let searchBox = document.getElementById('search-bar');
let searchBtn = document.getElementById('search').addEventListener( 'click', run = () => {
    let searchVal;
    searchVal = searchBox.value;
    window.location = "https://www.amazon.com/s?k=" + searchVal + "&ref=nb_sb_noss_2";
});
