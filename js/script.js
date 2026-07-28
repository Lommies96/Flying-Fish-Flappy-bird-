const canvas = document.getElementById("canvas");
//ctx-context, getContext = retourne un context
const ctx = canvas.getContext("2d")
//set d'image; on crée
const img = new Image();
img.src ="./media/flappy-bird-set.png"; 


//Rules of the game

let gamePlaying = false;

const gravity = 0.5;

const speed = 6.2;

const size = [60, 36];

const jump = -11.5;

const cTenth = canvas.width / 10;

//pipe settings

const pipeWidth = 78;

const pipeGap = 270;

const pipeLoc = () => Math.random() * (canvas.height - (pipeGap + pipeWidth) - pipeWidth) + pipeWidth;


//paralax

let index = 0,

  bestScore = 0,
  currentScore = 0,
  pipes = [],
  flight,
  flyHeight;

const setup = () => {
  currentScore = 0;
  flight = jump;
  flyHeight = canvas.height / 2 - size[1] / 2;
  pipes = Array(3)
    .fill()
    .map((a, i) => [canvas.width + i * (pipeGap + pipeWidth), pipeLoc()]);

  console.log(pipes);
};

const render = () => {
  index++;
  ctx.drawImage(
    img,
    0, 0,
    canvas.width,
    canvas.height,
    -((index * (speed / 2)) % canvas.width) + canvas.width, 0,
    canvas.width,
    canvas.height

  );

  ctx.drawImage(
    img,
    0, 0,
    canvas.width,
    canvas.height,
    -((index * (speed / 2)) % canvas.width) + canvas.width, 0,
    canvas.width,
    canvas.height

  );

  if (gamePlaying) {

    ctx.drawImage(
      img,
      432,
      Math.floor((index % 9) / 3) * size[1],
      ...size,
      cTenth,
      flyHeight,
      ...size
    );


    flight += gravity;

    flyHeight = Math.min(flyHeight + flight, canvas.height - size[1]);

  } else {

    ctx.drawImage(
      img,
      432,
      Math.floor((index % 9) / 3) * size[1],
      ...size,
      canvas.width / 2 - size[0] / 2,
      flyHeight,
      ...size
    );
  


  flyHeight = canvas.height / 2 - size[1] / 2;

  ctx.fillText(`Best score : ${bestScore}`, 55, 245);
  ctx.fillText(`Click to play`, 48, 535);

  ctx.font ="bold 30px courier";
  }

  if (gamePlaying) {
    pipes.map((pipe)=>{
      ctx.drawImage{
        img,
        432,
        588 - pipe[1],
        pipeWidth,
        pipe[1],
        pipe[0],
        0,
        pipeWidth,
        pipe[1],
      }
    }
 }

//undone

