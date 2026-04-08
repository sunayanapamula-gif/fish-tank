const plantsContainer = document.getElementById('plantsContainer');
const houseContainer = document.getElementById('houseContainer');
const fishContainer = document.getElementById('fishContainer');
const bubbleContainer = document.getElementById('bubbleContainer');
const tortoiseContainer = document.getElementById('tortoiseContainer');

// Add plants with bubbles
for (let i = 0; i < 12; i++) {
  const plant = document.createElement('div');
  plant.className = 'plant';
  plant.style.left = `${i * 8}vw`;
  plantsContainer.appendChild(plant);

  setInterval(() => {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';

    // Random size
    const size = 5 + Math.random() * 15;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // Random horizontal position near plant
    bubble.style.left = `${i * 8 + Math.random() * 5}vw`;
    bubble.style.bottom = "80px";

    // Random speed
    const duration = 6 + Math.random() * 6; // 6–12s
    bubble.style.animationDuration = `${duration}s`;
    bubble.style.setProperty('--duration', `${duration}s`);

    // Random horizontal drift
    const drift = Math.random() < 0.5 ? -1 : 1;
    bubble.style.setProperty('--drift', drift * (5 + Math.random() * 15) + 'px');

    bubbleContainer.appendChild(bubble);
    setTimeout(() => bubble.remove(), duration * 1000);
  }, 3000);
}

// Add den/house
const house = document.createElement('div');
house.className = 'house';
houseContainer.appendChild(house);

// Function to create fish
function createFish(type, bigTail=false, small=false) {
  const fish = document.createElement('div');
  fish.className = `fish ${type} ${bigTail ? 'bigTail' : ''} ${small ? 'small' : ''}`;

  const body = document.createElement('div');
  body.className = 'body';
  const tail = document.createElement('div');
  tail.className = 'tail';
  const eye = document.createElement('div');
  eye.className = 'eye';

  fish.appendChild(body);
  fish.appendChild(tail);
  fish.appendChild(eye);

  fish.style.top = `${Math.random() * 70}vh`;
  fish.style.left = `${Math.random() * 90}vw`;

  fishContainer.appendChild(fish);

  // Random swimming with pauses
  setInterval(() => {
    if (Math.random() < 0.3) return; // pause sometimes
    fish.style.top = `${Math.random() * 70}vh`;
    fish.style.left = `${Math.random() * 90}vw`;
  }, 6000);

  // Hide beside plants or den when cursor near
  fish.addEventListener('mouseenter', () => {
    const hideOption = Math.random();
    if (hideOption < 0.5) {
      fish.style.top = "80vh";
      fish.style.left = `${Math.random() * 90}vw`;
    } else {
      fish.style.top = "70vh";
      fish.style.left = "42vw";
    }
  });
}

// Create multiple colorful fishes
createFish('rainbow', true);
createFish('orange');
createFish('blue', true);
createFish('rainbow');
createFish('orange', true);

// Add some small fishes
createFish('blue', false, true);
createFish('orange', false, true);
createFish('rainbow', false, true);

// Create big tortoise
const tortoise = document.createElement('div');
tortoise.className = 'tortoise';

const shell = document.createElement('div');
shell.className = 'shell';

const head = document.createElement('div');
head.className = 'head';
const eye = document.createElement('div');
eye.className = 'eye';
head.appendChild(eye);

const legFL = document.createElement('div');
legFL.className = 'leg front-left';
const legFR = document.createElement('div');
legFR.className = 'leg front-right';
const legBL = document.createElement('div');
legBL.className = 'leg back-left';
const legBR = document.createElement('div');
legBR.className = 'leg back-right';

tortoise.appendChild(shell);
tortoise.appendChild(head);
tortoise.appendChild(legFL);
tortoise.appendChild(legFR);
tortoise.appendChild(legBL);
tortoise.appendChild(legBR);

tortoise.style.top = `${Math.random() * 70}vh`;
tortoise.style.left = `${Math.random() * 90}vw`;

tortoiseContainer.appendChild(tortoise);

// Random slow swimming for big tortoise
setInterval(() => {
  tortoise.style.top = `${Math.random() * 70}vh`;
  tortoise.style.left = `${Math.random() * 90}vw`;
}, 8000);

// Create small tortoise
const smallTortoise = document.createElement('div');
smallTortoise.className = 'tortoise small';

const shellSmall = document.createElement('div');
shellSmall.className = 'shell';

const headSmall = document.createElement('div');
headSmall.className = 'head';
const eyeSmall = document.createElement('div');
eyeSmall.className = 'eye';
headSmall.appendChild(eyeSmall);

const legSFL = document.createElement('div');
legSFL.className = 'leg front-left';
const legSFR = document.createElement('div');
legSFR.className = 'leg front-right';
const legSBL = document.createElement('div');
legSBL.className = 'leg back-left';
const legSBR = document.createElement('div');
legSBR.className = 'leg back-right';

smallTortoise.appendChild(shellSmall);
smallTortoise.appendChild(headSmall);
smallTortoise.appendChild(legSFL);
smallTortoise.appendChild(legSFR);
smallTortoise.appendChild(legSBL);
smallTortoise.appendChild(legSBR);

smallTortoise.style.top = `${Math.random() * 70}vh`;
smallTortoise.style.left = `${Math.random() * 90}vw`;

tortoiseContainer.appendChild(smallTortoise);

// Random slow swimming for small tortoise
setInterval(() => {
  smallTortoise.style.top = `${Math.random() * 70}vh`;
  smallTortoise.style.left = `${Math.random() * 90}vw`;
}, 10000);