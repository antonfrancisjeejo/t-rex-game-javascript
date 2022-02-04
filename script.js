let character = document.getElementById("character");
let block = document.getElementById("block");

document.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (event.key === " ") {
    jump();
  }
  if (event.key === "Enter") {
    block.classList.add("animate_block");
  }
});

function jump() {
  if (character.classList !== "animate") {
    character.classList.add("animate");
  }
  setTimeout(function () {
    character.classList.remove("animate");
  }, 500);
}

const checkDead = setInterval(function () {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
    block.classList.remove("animate_block");

    alert("Game Over!");
  }
}, 10);
