// Change Block
let diary = document.querySelector(".diary");
let JS30 = document.querySelector(".JS30"); 

function showDiary(){
    diary.className="show";
    JS30.className="hide";
}

function showJS30(){
    diary.className="hide";
    JS30.className="show";
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
  function removeTransition(e){
    console.log(e);
    if(e.propertyName !== "transform"){
      return;
    }else{
      // console.log(e.propertyName);
      // console.log(this);
      this.classList.remove("playing");
    }
  }

  let keys = document.querySelectorAll(".key");
  // console.log(keys);
  keys.forEach(key => key.addEventListener("transitionend", removeTransition));
  window.addEventListener("keydown", playSound);
// JS30-1