function playVideo(){
    var video = document.getElementById('video');
    video.play();
    video.addEventListener('ended',function(){
        window.location = '../html/factsq.html';
    });
}