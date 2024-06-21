document.addEventListener('DOMContentLoaded', () => {
  var audio = document.createElement('audio');
  audio.setAttribute('src', 'sound.mp3');
  audio.loop = true;

  // Create a button to start the audio
  var playButton = document.createElement('button');
  playButton.innerText = 'Play Sound';
  playButton.style.position = 'absolute';
  playButton.style.top = '10px';
  playButton.style.left = '10px';
  document.body.appendChild(playButton);

  playButton.addEventListener('click', () => {
    audio.play().catch(error => {
      console.log("Audio play failed:", error);
    });
    playButton.style.display = 'none'; // Hide the button after audio starts
  });
});
