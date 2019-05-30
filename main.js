
let main = document.querySelector('.img_big');
let img = document.querySelectorAll('.img_small');
const res = main.src;
for(let i = 0; i < img.length; i++ ) {
    img[i].addEventListener( 'mouseover', function(){
        main.src = img[i].src;
    })
    
    img[i].addEventListener( 'mouseout', function(){
        main.src = res;
    })
}
