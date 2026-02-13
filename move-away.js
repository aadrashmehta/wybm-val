const noBtn = document.getElementById("no-btn");

function moveButton() {
  // 1. Get current viewport dimensions
  const vWidth = window.innerWidth;
  const vHeight = window.innerHeight;

  // 2. Get button dimensions
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  // 3. Set a small margin so it doesn't hug the edge
  const margin = 20;

  // 4. Calculate the ACTUAL available space
  // We subtract the button's size and margin from the total width/height
  const availableWidth = vWidth - btnWidth - margin * 2;
  const availableHeight = vHeight - btnHeight - margin * 2;

  // 5. If the window is too small to even fit the button + margin,
  // we default to 0 to prevent "NaN" or "Infinity" errors
  const safeWidth = Math.max(0, availableWidth);
  const safeHeight = Math.max(0, availableHeight);

  // 6. Generate random offset and then ADD the margin back
  // This guarantees the result is ALWAYS between [margin] and [Viewport - margin]
  const randomX = Math.floor(Math.random() * safeWidth) + margin;
  const randomY = Math.floor(Math.random() * safeHeight) + margin;

  // 7. Apply coordinates
  noBtn.style.position = "fixed";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
  noBtn.style.transform = "none";
}

// Proximity Trigger
document.addEventListener("mousemove", (e) => {
  const rect = noBtn.getBoundingClientRect();
  if (rect.width === 0) return;

  const btnCenterX = rect.left + rect.width / 2;
  const btnCenterY = rect.top + rect.height / 2;

  // Measure distance from cursor to button center
  const distance = Math.sqrt(
    Math.pow(e.clientX - btnCenterX, 2) + Math.pow(e.clientY - btnCenterY, 2)
  );

  // Move if mouse is closer than 150px
  if (distance < 150) {
    moveButton();
  }
});

// Failsafe for direct hover/keyboard
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("focus", moveButton);

function showSuccess() {
  document.getElementById("main-container").style.display = "none";
  document.getElementById("success-message").classList.remove("hidden");
  document.getElementById("success-message").style.display = "block";
}
