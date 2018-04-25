


var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      videoId: 'ydHDHf1EGN4',
      loop: 1,
      fs: 0,
      controls: 0,
      iv_load_policy: 3,
      modestbranding: 1,
      showinfo: 0,
      rel: 0,
      events: {
        'onStateChange': onStateChange
      }
    });
      
}

function onStateChange(event) {
    switch (event.data) {
        case YT.PlayerState.ENDED: 
            player.playVideo();
            break;
        default:
            break;
    }
}

$("#text").click(function(){
    $('body').addClass('disappear');
    $('#cover').addClass('disappear');

    player.playVideo();
    setTimeout(function() {
        $('#player').show();
        $('#cover').remove();
      }, 4500);
});