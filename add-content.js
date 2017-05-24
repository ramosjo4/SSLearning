var i = 0;
var images= [];
var time = 3000;

//image list
images[0] = 'Images/gallery1.jpg';
images[1] = 'Images/gallery2.jpg';
images[2] = 'Images/gallery3.jpg';
images[3] = 'Images/gallery4.jpg';
images[4] = 'Images/gallery5.jpg';
images[5] = 'Images/gallery6.jpg';
images[6] = 'Images/gallery7.jpg';
images[7] = 'Images/gallery8.jpg';
images[8] = 'Images/gallery9.jpg';

//cycles through images
function changeImg(){
  document.slide.src = images[i];

  if (i < images.length - 1 ){
    i++;

  }else{
    i=0;
  }
  //sets the time for running through function
  setTimeout("changeImg()", time);
}
//runs function on startup
window.onload = changeImg;
