const intervale = setInterval(()=>{
  const header = document.querySelector("._3auIg")
  if (header){
    clearInterval(intervale)
    var value = 1;

    const chat = document.getElementById("pane-side");
    var audios;

    
    chat.addEventListener("click", () => {
      audios = document.querySelectorAll("audio");
      console.log(audios.length)
      audios.forEach((audio)=>{
        audio.playbackRate = value; 
      })
    }); 

    //I created a button element
    const button = document.createElement("button");
    button.innerHTML = value + "x";
    button.classList.add("timesButton");

    //When  i clicked in the button the audio  playbackrate value change
    button.addEventListener("click", () => {
      audios = document.querySelectorAll("audio");
      value = value + 0.25;
      if (value>3.5){
        value = 0.25;
      }
      button.innerHTML = value + "x";
      audios.forEach((audio)=>{
        audio.playbackRate = value; 
      })
    });
    //I added the button to the header
    header.appendChild(button)
  }
}, 1000)
