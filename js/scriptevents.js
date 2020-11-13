// Responsive images

let imgclick = document.querySelector('#photo1');

imgclick.onclick = () => {
   if ( imgclick.getAttribute('src') ===
   'images/buddy1.jpg' )
   {
        imgclick.setAttribute('src',
        'images/buddy3.jpg');
   } else {
        imgclick.setAttribute('src',
        'images/buddy1.jpg');
   }
}
let imgmouse = document.querySelector('#photo4');

imgmouse.onmouseenter = () => {
  imgmouse.setAttribute('src',
  'images/buddy2.jpg');
};
imgmouse.onmouseleave = () => {
  imgmouse.setAttribute('src','images/buddy4.jpg');
};
