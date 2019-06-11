const YTReady = new Promise( (resolve) => {
    window.onYouTubeIframeAPIReady = () => resolve(window.YT);
    console.log("youtubeReady.js")
  });
  
export default YTReady;