// This code (provided by Youtube API reference) loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // This function (provided by Youtube API reference) creates an <iframe> (and YouTube player)
      // after the API code downloads.
       var player;
       function onYouTubeIframeAPIReady() {
          player = new YT.Player('player', {
                                         height: '270',
                                         width: '480',
                                         videoId: '1-lkqAH5KW4',
                                         events: {
                                            'onReady': onPlayerReady,
                                         }
                                  });
        }

      // The API will call this function (provided by Youtube API reference) when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }
