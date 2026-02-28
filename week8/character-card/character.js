let character = {
  name: "Poet Knight",
  class: "Arcanist",
  level: 15,
  health: 100,
  type: "Goddess",
  element: "Light/Shadow",
  alignment: "Neutral Evil",
  weapon: "The Quill Sword",
  technique: "Words of Fire",
  dialog: "'All's fair in love and poetry'",
  image: "images/character.jpg"
};

// DYNAMIC BUTTONS
const attackedBtn = document.querySelector("#attackedBtn");
const levelBtn = document.querySelector("#levelBtn");

// DYNAMIC DOM
function updateUI() {
  document.querySelector(".image").src = character.image;
  document.querySelector(".name").textContent = character.name;
  document.querySelector("#charDialog").textContent = character.dialog;
  document.querySelector("#charType").textContent = character.type;
  document.querySelector("#charElement").textContent = character.element;
  document.querySelector("#charAlignment").textContent = character.alignment;
  document.querySelector("#charWeapon").textContent = character.weapon;
  document.querySelector("#charTechnique").textContent = character.technique;
  document.querySelector("#charLevel").textContent = character.level;
  document.querySelector("#charHealth").textContent = character.health;
}

// UI LOADS ON PAGE LOAD
document.addEventListener("DOMContentLoaded", () => {
  updateUI();
});

// BUTTON INTERACTIONS
attackedBtn.addEventListener("click", () => {
  character.health -= 20;

  if (character.health <= 0) {
    character.health = 0;
    alert(`${character.name} has died`);
  } else {
    document.querySelector("#charHealth").textContent = character.health;
  }
  updateUI();
});

levelBtn.addEventListener("click", () => {
  character.level += 1;
  updateUI();
});