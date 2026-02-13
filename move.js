const noBtn = document.getElementById("no-btn");

function moveButton() {
  const padding = 30;

  // 1. Get current viewport dimensions
  const vWidth = window.innerWidth;
  const vHeight = window.innerHeight;

  // 2. Get button dimensions
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  // 3. Calculate max available coordinates
  // We use Math.max to ensure maxX/maxY are at least 0
  const maxX = Math.max(0, vWidth - btnWidth - padding);
  const maxY = Math.max(0, vHeight - btnHeight - padding);

  // 4. Generate random position within the safe range
  // This formula ensures the result is always between 'padding' and 'max'
  const randomX = Math.floor(Math.random() * (maxX - padding + 1)) + padding;
  const randomY = Math.floor(Math.random() * (maxY - padding + 1)) + padding;

  // 5. Apply style
  noBtn.style.position = "fixed";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;

  // Remove transform to prevent it from shifting the button further off-point
  noBtn.style.transform = "none";
}

// Proximity Trigger
document.addEventListener("mousemove", (e) => {
  const rect = noBtn.getBoundingClientRect();

  // If the button isn't visible yet or hasn't been moved, rect might be 0
  if (rect.width === 0) return;

  const btnCenterX = rect.left + rect.width / 2;
  const btnCenterY = rect.top + rect.height / 2;

  const distance = Math.sqrt(
    Math.pow(e.clientX - btnCenterX, 2) + Math.pow(e.clientY - btnCenterY, 2)
  );

  // If cursor is within 150px, move it
  if (distance < 150) {
    moveButton();
  }
});

// Failsafe for hover and focus (keyboard)
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("focus", moveButton);

function showSuccess() {
  document.getElementById("main-container").classList.add("hidden");
  document.getElementById("success-message").classList.remove("hidden");
}
