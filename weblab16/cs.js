 function mouse() {

     var x = document.getElementById("canvas");
     canvas = x.getContext("2d");

     window.addEventListener("mousemove", icon, false);
 }

 function icon(e) {
     canvas.clearRect (0, 0, 1000, 1000);
     var xPos = e.clientX;
     var yPos = e.clientY;
     var pic = new Image();
     pic.src = "https://img.clipartfest.com/aea322ccda11ba941bc4efb8dc4b41ef_download-full-size-pineapple-clipart-no-background_1834-3552.png"
     canvas.drawImage (pic, xPos-25, yPos-25, 50, 50);

 }

 window.addEventListener("load", mouse, false);

