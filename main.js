let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
//WRITER WORDS!
typewriter
  .pauseFor(2500)
  .typeString('Currenlty front-end developer junior..')
  .pauseFor(200)
  .deleteChars(10)
  .start();
