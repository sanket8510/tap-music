const keys = document.querySelectorAll('.key');

keys.forEach(key => {
  key.addEventListener('click', () => {
    const soundId = key.getAttribute('data-sound');
    const audio = document.getElementById(soundId);
    audio.currentTime = 0; // Rewind
    audio.play();
  });
});
