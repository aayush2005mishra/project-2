// Add event listener to navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('mouseover', () => {
    link.classList.add('hover');
  });
  link.addEventListener('mouseout', () => {
    link.classList.remove('hover');
  });
});
// Add event listener to background audio
document.getElementById('background-audio').addEventListener('load', () => {
  document.getElementById('background-audio').play();
});
// Add animation to decorative designs
document.querySelectorAll('.decorative-designs div').forEach((design, index) => {
  design.style.animation = `design-animation ${index * 2}s infinite`;
});

const audio = document.getElementById('background-audio');

audio.autoplay = true;
audio.loop = true;
const audio = document.getElementById('background-audio');

audio.autoplay = true;
audio.loop = true;

// Fade in the audio
audio.volume = 0;
setTimeout(() => {
  audio.volume = 1;
}, 1000);

// Adjust the volume
audio.volume = 0.5; // Set the volume to 50%
// Get the screen width
let screenWidth = window.innerWidth;

// Define the breakpoints for different screen sizes
const breakpoints = {
  mobile: 480,
  tablet: 768,
  desktop: 1024
};

// Add event listener to window resize event
window.addEventListener('resize', () => {
  screenWidth = window.innerWidth;
  adjustLayout();
});

// Function to adjust the layout based on screen size
function adjustLayout() {
  if (screenWidth < breakpoints.mobile) {
    // Mobile layout
    document.body.classList.add('mobile-layout');
  } else if (screenWidth < breakpoints.tablet) {
    // Tablet layout
    document.body.classList.add('tablet-layout');
  } else {
    // Desktop layout
    document.body.classList.add('desktop-layout');
  }
}

// Initial layout adjustment
adjustLayout();
// Get the audio element
let audio = document.getElementById('backgroundAudio');

// Add an event listener to handle errors
audio.addEventListener('error', function() {
  console.log('Error playing audio');
});

// Add an event listener to handle when the audio is paused or played
audio.addEventListener('play', function() {
  console.log('Audio is playing');
});

audio.addEventListener('pause', function() {
  console.log('Audio is paused');
});