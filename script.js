const plantsContainer = document.getElementById('plantsContainer');
const houseContainer = document.getElementById('houseContainer');
const fishContainer = document.getElementById('fishContainer');
const bubbleContainer = document.getElementById('bubbleContainer');
const tortoiseContainer = document.getElementById('tortoiseContainer');
const coralContainer = document.getElementById('coralContainer');
const jellyfishContainer = document.getElementById('jellyfishContainer');
const starfishContainer = document.getElementById('starfishContainer');
const crabContainer = document.getElementById('crabContainer');
const neonFishContainer = document.getElementById('neonFishContainer');

// Add plants with bubbles
for (let i = 0; i < 12; i++) {
  const plant = document.createElement('div');
  plant.className = 'plant';
  plant.style.left = `${i * 8}vw`;
  plantsContainer.appendChild(plant);

  setInterval(() => {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';

    const size = 5 + Math.random() * 15;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    bubble.style.left = `${i * 8 + Math.random() * 5}vw`;
    bubble.style.bottom = "80px";

    const duration = 6 + Math.random() * 6;
    bubble.style.animationDuration = `${duration}s`;
    bubble.style.setProperty('--duration', `${duration}s`);

    const drift = Math.random() < 0.5 ? -1 : 1;
    bubble.style.setProperty('--drift', drift * (5 + Math.random() * 15) + 'px');

    bubbleContainer.appendChild(bubble);
    setTimeout(() => bubble.remove(), duration * 1000);
  }, 3000);
}

// Add coral reefs
for (let i = 0; i < 6; i++) {
  const coral = document.createElement('div');
  coral.className = 'coral';
  coral.style.left = `${i * 15}vw`;
  coralContainer.appendChild(coral);
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

  setInterval(() => {
    if (Math.random() < 0.3) return;
    fish.style.top = `${Math.random() * 70}vh`;
    fish.style.left = `${Math.random() * 90}vw`;
  }, 6000);

  // Cursor escape behavior
  fish.addEventListener('mouseenter', () => {
    fish.classList.add('escape');
    fish.style.top = `${Math.random() * 70}vh`;
    fish.style.left = `${Math.random() * 90}vw`;
    setTimeout(() => fish.classList.remove('escape'), 1000);
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
function createTortoise(small=false) {
  const tortoise = document.createElement('div');
  tortoise.className = `tortoise ${small ? 'small' : ''}`;

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

  setInterval(() => {
    tortoise.style.top = `${Math.random() * 70}vh`;
    tortoise.style.left = `${Math.random() * 90}vw`;
  }, small ? 10000 : 8000);
}

// Add tortoise family
createTortoise(false); // big
createTortoise(true);  // small

// Add jellyfish
function createJellyfish() {
  const jelly = document.createElement('div');
  jelly.className = 'jellyfish';
  jelly.style.top = `${Math.random() * 60}vh`;
  jelly.style.left = `${Math.random() * 90}vw`;
  jellyfishContainer.appendChild(jelly);

  setInterval(() => {
    jelly.style.top = `${Math.random() * 60}vh`;
    jelly.style.left = `${Math.random() * 90}vw`;
  }, 12000);
}

// Create a few jellyfish
for (let i = 0; i < 3; i++) {
  createJellyfish();
}

// Add starfish
const starfish = document.createElement('div');
starfish.className = 'starfish';
starfishContainer.appendChild(starfish);

// Add crab
const crab = document.createElement('div');
crab.className = 'crab';
crabContainer.appendChild(crab);

// Add neon fish
const neonFish = document.createElement('div');
neonFish.className = 'neon-fish';
neonFishContainer.appendChild(neonFish);

// --- Interactive Buttons ---
document.getElementById("resetBtn").addEventListener("click", () => {
  fishContainer.innerHTML = "";
  tortoiseContainer.innerHTML = "";
  jellyfishContainer.innerHTML = "";
  starfishContainer.innerHTML = "";
  crabContainer.innerHTML = "";
  neonFishContainer.innerHTML = "";
  // Recreate everything
  createFish('rainbow', true);
  createFish('orange');
  createFish('blue', true);
  createFish('rainbow');
  createFish('orange', true);
  createFish('blue', false, true);
  createFish('orange', false, true);
  createFish('rainbow', false, true);
  createTortoise(false);
  createTortoise(true);
  for (let i = 0; i < 3; i++) createJellyfish();
  starfishContainer.appendChild(starfish);
  crabContainer.appendChild(crab);
  neonFishContainer.appendChild(neonFish);
});

document.getElementById("orbitBtn").addEventListener("click", () => {
  const fishes = document.querySelectorAll(".fish");
  fishes.forEach((fish, i) => {
    fish.style.transition = "transform 5s linear";
    fish.style.transform = `rotate(${i * 45}deg) translate(150px)`;
  });
});

document.getElementById("schoolBtn").addEventListener("click", () => {
  const fishes = document.querySelectorAll(".fish");
  fishes.forEach(fish => {
    fish.style.top = "50vh";
    fish.style.left = `${40 + Math.random() * 20}vw`;
  });
});
