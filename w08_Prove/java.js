let health = 100;
let level = 5;

const healthDisplay = document.getElementById("health");
const levelDisplay = document.getElementById("level");

const attackBtn = document.getElementById("attackBtn");
const levelBtn = document.getElementById("levelBtn");

attackBtn.addEventListener("click", function() {
  if (health > 0) {
    health -= 20;

    if (health == 0) {
      alert("Character Died");
    }

    healthDisplay.textContent = health;
  }
});

levelBtn.addEventListener("click", function() {
  level += 1;

  levelDisplay.textContent = level;
  healthDisplay.textContent = health;
});
