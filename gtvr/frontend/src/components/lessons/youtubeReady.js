const YTReady = new Promise( (resolve) => {
    window.onYouTubeIframeAPIReady = () => resolve(window.YT);
  });
  
export default YTReady;