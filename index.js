document.addEventListener("DOMContentLoaded", function() {
    const paintings = document.querySelectorAll(".polaroid");
    const musuemimage = document.getElementById("museum-image");

    paintings.forEach(painting => {
        painting.addEventListener("mouseenter", function() {
            // this will show musuem image when hovering over painting
            musuemimage.style.opacity = 1;
        });

        painting.addEventListener("mouseleave", function() {
            //hides the musuem when the mouse isn't over it
            musuemimage.style.opacity = 0;
        });
    });


});