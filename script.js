// Containers
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

// Water sound control
const waterSound = document.getElementById("waterSound");
waterSound.volume = 0.4; // softer background volume

// Plants with bubbles
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

// Coral reefs
for (let i = 0; i < 6; i++) {
  const coral = document.createElement('div');
  coral.className = 'coral';
  coral.style.left = `${i * 15}vw`;
  coralContainer.appendChild(coral);
}

// House/Den
const house = document.createElement('div');
house.className = 'house';
houseContainer.appendChild(house);

// Fish creation
function createFish(type, bigTail=false, small=false) {
  const fish = document.createElement('div');
  fish.className = `fish ${type} ${bigTail ? 'bigTail' : ''} ${small ? 'small' : ''}`;
  const body = document.createElement('div'); body.className = 'body';
  const tail = document.createElement('div'); tail.className = 'tail';
  const eye = document.createElement('div'); eye.className = 'eye';
  fish.appendChild(body); fish.appendChild(tail); fish.appendChild(eye);

  fish.style.top = `${Math.random() * 70}vh`;
  fish.style.left = `${Math.random() * 90}vw`;
  fishContainer.appendChild(fish);

  // Cursor escape with visible motion
  fish.addEventListener('mouseenter', () => {
    fish.classList.add('escape');
    const newTop = `${Math.random() * 70}vh`;
    const newLeft = `${Math.random() * 90}vw`;
    fish.style.transition = "top 1s ease, left 1s ease";
    fish.style.top = newTop;
    fish.style.left = newLeft;
    setTimeout(() => fish.classList.remove('escape'), 1000);
  });
  // Continuous random swimming
  setInterval(() => {
    const newTop = `${Math.random() * 70}vh`;
    const newLeft = `${Math.random() * 90}vw`;
    fish.style.transition = "top 5s ease, left 5s ease";
    fish.style.top = newTop;
    fish.style.left = newLeft;
  }, 6000); // every 6 seconds
}

}

// Fishes
createFish('rainbow', true);
createFish('orange');
createFish('blue', true);
createFish('rainbow');
createFish('orange', true);
createFish('blue', false, true);
createFish('orange', false, true);
createFish('rainbow', false, true);

// Tortoise
function createTortoise(small=false) {
  const tortoise = document.createElement('div');
  tortoise.className = `tortoise ${small ? 'small' : ''}`;
  const shell = document.createElement('div'); shell.className = 'shell';
  const head = document.createElement('div'); head.className = 'head';
  const eye = document.createElement('div'); eye.className = 'eye'; head.appendChild(eye);
  const legFL = document.createElement('div'); legFL.className = 'leg front-left';
  const legFR = document.createElement('div'); legFR.className = 'leg front-right';
  const legBL = document.createElement('div'); legBL.className = 'leg back-left';
  const legBR = document.createElement('div'); legBR.className = 'leg back-right';
  tortoise.appendChild(shell); tortoise.appendChild(head);
  tortoise.appendChild(legFL); tortoise.appendChild(legFR);
  tortoise.appendChild(legBL); tortoise.appendChild(legBR);
  tortoise.style.top = `${Math.random() * 70}vh`;
  tortoise.style.left = `${Math.random() * 90}vw`;
  tortoiseContainer.appendChild(tortoise);
}
createTortoise(false);
createTortoise(true);

// Jellyfish
function createJellyfish() {
  const jelly = document.createElement('div');
  jelly.className = 'jellyfish';
  jelly.style.top = `${Math.random() * 60}vh`;
  jelly.style.left = `${Math.random() * 90}vw`;
  jellyfishContainer.appendChild(jelly);
}
for (let i = 0; i < 3; i++) createJellyfish();

// Starfish, Crab, Neon Fish
const starfish = document.createElement('div'); starfish.className = 'starfish'; starfishContainer.appendChild(starfish);
const crab = document.createElement('div'); crab.className = 'crab'; crabContainer.appendChild(crab);
const neonFish = document.createElement('div'); neonFish.className = 'neon-fish'; neonFishContainer.appendChild(neonFish);

// --- Buttons ---
document.getElementById("resetBtn").addEventListener("click", () => {
  fishContainer.innerHTML = "";
  tortoiseContainer.innerHTML = "";
  jellyfishContainer.innerHTML = "";
  starfishContainer.innerHTML = "";
  crabContainer.innerHTML = "";
  neonFishContainer.innerHTML = "";
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

document.getElementById("schoolBtn").addEventListener("click", () => {
  const fishes = document.querySelectorAll(".fish");
  fishes.forEach(fish => {
    fish.style.top = "50vh";
    fish.style.left = `${40 + Math.random() * 20}vw`;
  });
});
