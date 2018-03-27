
let timer = null;

function sendMessage() {

}

function startTimer(){

}

function stopTimer(){

}

export default (req, res)=>{
  if(timer){
    clearInterval(timer)
    timer = null
  } else {
    let count = 0;
    timer = setInterval(()=>{
      count ++;
      io.emit('messageChannel', { 'message': count })
    }, 100)
  }

  res.json({ message: 'here, have some data!' })
}