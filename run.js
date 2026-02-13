const noBtn = document.getElementById("no-btn");
const container = document.getElementById("main-container");

function moveButton() {
  // 1. Get the card's current position and size
  const rect = container.getBoundingClientRect();

  // 2. Get button dimensions
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  // 3. Define a small padding so it doesn't touch the card's border
  const padding = 10;

  // 4. Calculate available space inside the card
  const availableWidth = rect.width - btnWidth - padding * 2;
  const availableHeight = rect.height - btnHeight - padding * 2;

  // 5. Generate a random position WITHIN that available space
  const randomX = Math.floor(Math.random() * availableWidth) + padding;
  const randomY = Math.floor(Math.random() * availableHeight) + padding;

  // 6. Apply position relative to the CARD'S top-left corner
  noBtn.style.position = "absolute";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

// Proximity Trigger: Moves if cursor is within 60px of button
document.addEventListener("mousemove", (e) => {
  const rect = noBtn.getBoundingClientRect();
  const btnCenterX = rect.left + rect.width / 2;
  const btnCenterY = rect.top + rect.height / 2;

  const distance = Math.sqrt(
    Math.pow(e.clientX - btnCenterX, 2) + Math.pow(e.clientY - btnCenterY, 2)
  );

  if (distance < 60) {
    moveButton();
  }
});

noBtn.addEventListener("mouseover", moveButton);

function showSuccess() {
  container.innerHTML = `
    <h1>I knew it! 🍕</h1>
    <p>Ordering pizza right now...</p>
    <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJueW90eXpueG90eXpueG90eXpueG90eXpueG90eXpueG90eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKMGpxxS0uN0p7G/giphy.gif" style="width:100%; border-radius:10px;">
  `;
}
