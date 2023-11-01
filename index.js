// Change Block
  let diary, JS30;

  document.addEventListener("DOMContentLoaded", function(){
    diary = document.querySelector(".diary");
    JS30 = document.querySelector(".JS30");
  });

  function showDiary(){
      diary.classList.add("diary");
      diary.classList.remove("hide");
      JS30.classList.add("hide");
      JS30.classList.remove("JS30");
  }

  function showJS30(){
      diary.classList.add("hide");
      diary.classList.remove("diary");
      JS30.classList.add("show");
      JS30.classList.remove("hide");
  }

// JS30-1
(function(){

  function playHandler(e){
    // play music
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (audio) { 
      audio.currentTime = 0;
      audio.play();
    }
    // transition
    const trans = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (trans) {
      trans.classList.add("playing");
    }
    // console.log(audio, trans);
  }
  
  function transHandler(e) {
    if (e.propertyName === "transform") {
        e.currentTarget.classList.remove("playing");
    }
  }
  
  window.addEventListener("keydown", playHandler);
  // 鍵盤離手之後動畫狀態需解除
  document.querySelectorAll(".key").forEach(function(key){
    key.addEventListener("transitionend", transHandler);
  })

})()