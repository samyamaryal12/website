let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '400',
        width: '100%',
        videoId: 'v=pFfUunOS1a4', // Spongebob Theme song YouTube video ID
        playerVars: {
            'autoplay': 0,
            'controls': 1,
            'rel': 0
        },
        events: {
            'onReady': onPlayerReady,
            'onError': onPlayerError
        }
    });
}

function onPlayerReady(event) {
    console.log('YouTube player is ready');
    // Uncomment the line below to autoplay the video when ready
    // event.target.playVideo();
}

function onPlayerError(event) {
    console.log('YouTube player encountered an error:', event.data);
    alert('An error occurred. Please try again later.'); // Display an error message to the user
}
