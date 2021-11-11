let cvs = document.getElementById('canvas')
let ctx = cvs.getContext('2d')

let bird = new Image()
let bg = new Image()
let fg = new Image()
let pipeUp = new Image()
let pipeBottom = new Image()

bird.src = 'img/bird.png'
bg.src = 'img/bg.png'
fg.src = 'img/fg.png'
pipeUp.src = 'img/pipeUp.png'
pipeBottom.src = 'img/pipeBottom.png'
// КООРДИНАТЫ ПТИЧКИ
let xPos = 10
let xPos = 150
let xPos = 1.5

const  moveUp = ()=>{
    yPos -= 25
}
document.addEventListener('keydown',moveUp)

// припядствия
let pipe = []
pipe[0]={
    x:cvs.width,
    y:0
}


const draw=()=>{
    ctx.drawImage(bg,0,0)
    ctx.drawImage(bird, xPos,yPos)
    yPos += drav
   ctx.drawImage(fg,0,cvs.height-fg.height)
    
   for(let i=0; i<pipe.length;i++){
       ctx.drawImage(pipeUp, pipe[i].x,pipe[i].y)
       ctx.drawImage(pipeBottom,pipe[i].x, pipe[i].y+ pipeUp.height +otstop)
       pipe[i].x--

       if(pipe[i].x == 125){
           pipe.push({
               x: cvs.width,
               y:Math.floor(Math.random() * pipeUp.height) - pipeUp.height
           })
       
   }

      if(pipe[i].x ==5){
          score++
      }
}


   ctx.drawImage(fg,0, cvs.height-fg.height)

   ctx.fillStyle = '#000'
   ctx.font = '24px Verdana'
   ctx.filltext('Score: '+score,10, cvs.height - 20)
   reguestAnimationFrame(draw)
}   
pipeBottom.onload = draw


