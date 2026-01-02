$(function(){
    var currentDate = new Date();
    $('#currentYear').text(currentDate.getFullYear());
})

document.addEventListener("DOMContentLoaded", function () {

    const videos = document.querySelectorAll("#showcase .bg-video");
    let current = 0;

    if (videos.length > 0) {
        setInterval(() => {
            videos[current].classList.remove("active");
            current = (current + 1) % videos.length;
            videos[current].classList.add("active");
        }, 6000);
    }

});

