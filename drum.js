   //Attach an event listener to the window
   window.addEventListener('keydown', function(e){

    //select corresponding audio
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`)
    //select corresponding key
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`)

    if (!audio){
      return //stop the function from running all together
    }
    audio.currentTime = 0 // rewind to the start
    audio.play()
    key.classList.add('playing')
    
  })

  const removeTransition = function(e){
    if (e.propertyName !== 'transform') //skip if not a transform
      return
    this.classList.remove('playing')
  }

  //select every key on the page to listen on each one
  const keys = document.querySelectorAll('.key')
  console.log(keys)
  keys.forEach(function(key){
    key.addEventListener('transitionend', removeTransition)
  })

  //create the removeTransition function to remove the added class
