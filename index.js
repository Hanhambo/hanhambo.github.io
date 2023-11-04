// Change Block
  let diary, practice;

  document.addEventListener("DOMContentLoaded", function(){
    diary = document.querySelector(".diary");
    practice = document.querySelector(".practice");
  });

  function showDiary(){
      diary.classList.add("diary");
      diary.classList.remove("hide");
      practice.classList.add("hide");
      practice.classList.remove("practice");
  }

  function showPractice(){
      diary.classList.add("hide");
      diary.classList.remove("diary");
      practice.classList.add("show");
      practice.classList.remove("hide");
  }

// JS30-1
;(function(){

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

// JS30-2
;(function(){

  let second, min, hour;

  document.addEventListener("DOMContentLoaded", function(){
    second = document.querySelector(".second-hand");
    min = document.querySelector(".min-hand");
    hour = document.querySelector(".hour-hand");
  });

  function setClock(){
    let clockData = new Date();

    let secondDeg = clockData.getSeconds() * 6; // 360/60
    let minDeg = clockData.getMinutes() * 6 + secondDeg/60; // 360/60
    let hourDeg = clockData.getHours() * 30 + clockData.getMinutes() * 30/60; // 360/12

    second.style.transform = `rotate(${secondDeg}deg)`;
    min.style.transform = `rotate(${minDeg}deg)`;
    hour.style.transform = `rotate(${hourDeg}deg)`;

    // console.log(data);
  }

  function timeoutHandler(){
    setClock();
    setTimeout(timeoutHandler, 1000); // 因為只執行一次，所以要再呼叫一次自己
  }

  function animationHandler(){
    setClock();
    window.requestAnimationFrame(animationHandler);
  }

  setClock(); // 初始化畫面

  // 計時器：setInterval、setTimeout、requestAnimationFrame
  //setInterval(setClock, 1000); // 設定間隔，重複執行
  //setTimeout(timeoutHandler, 1000); // 設定延遲，執行一次
  window.requestAnimationFrame(animationHandler); // 專門處理畫面更新的 setTimeout

})()