if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", function () {
      const ogVideo = document.getElementById("og-video");
      const processedVideo = document.getElementById("processed-video");
  
      function playVideoWhenVisible(video) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                video.play();
              } else {
                video.pause();
              }
            });
          },
          { threshold: 0.5 } // Video must be at least 50% visible to play
        );
        observer.observe(video);
      }
  
      function loopVideo(video) {
        video.addEventListener("ended", () => {
          video.currentTime = 0; // Restart video from the beginning
          video.play();
        });
      }
  
      [ogVideo, processedVideo].forEach((video) => {
        playVideoWhenVisible(video);
        loopVideo(video);
      });
    });
  }
  