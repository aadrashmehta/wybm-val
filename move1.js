const noBtn = document.getElementById("no-btn");
const btnGroup = document.querySelector(".btn-group");

// Make sure button can move freely
// noBtn.style.position = "absolute";

function moveButton(e) {
  const btnRect = noBtn.getBoundingClientRect();
  const groupRect = btnGroup.getBoundingClientRect();

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Distance between mouse and button center
  const btnCenterX = btnRect.left + btnRect.width / 2;
  const btnCenterY = btnRect.top + btnRect.height / 2;

  const distance = Math.sqrt(
    Math.pow(mouseX - btnCenterX, 2) + Math.pow(mouseY - btnCenterY, 2)
  );

  // Trigger movement only when mouse is close
  if (distance < 50) {
    const maxX = groupRect.width - btnRect.width;
    const maxY = groupRect.height - btnRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
  }
}

// Attach proper event listener
btnGroup.addEventListener("mousemove", moveButton);

function showSuccess() {
  document.getElementById("main-container").classList.add("hidden");
  document.getElementById("success-message").classList.remove("hidden");
}
