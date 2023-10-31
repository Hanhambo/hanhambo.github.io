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
function playSound(e){
    // console.log(e.keyCode);

    // 鎖定 audio 標籤讓鍵盤發出聲音
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // console.log(audio);

    // 鎖定 key class 讓動態呈現
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // console.log(key);


    if (audio === null) { // !audio
      return; // stop the function
    } else {
      audio.currentTime = 0; // rewind to start
      audio.play();

      // 增加 "playing" 這個 class 下去
      key.classList.add("playing");
    }
  }

  // 鍵盤離手之後動畫狀態需解除
  function removeTransition(e) {
    if (e.propertyName === 'transform') {
        // console.log(e.propertyName);
        e.target.classList.remove('playing');
    }
}

  let keys = document.querySelectorAll(".key");
  // console.log(keys);
  keys.forEach(key => key.addEventListener("transitionend", removeTransition));
  window.addEventListener("keydown", playSound);
// JS30-1