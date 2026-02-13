// const noBtn = document.getElementById("no-btn");

// // Function to move the button within viewport bounds
// function moveButton() {
//   const padding = 20; // Keeps button from touching the very edge

//   // 1. Get current viewport dimensions
//   const vWidth = window.innerWidth;
//   const vHeight = window.innerHeight;

//   // 2. Get button dimensions
//   const btnWidth = noBtn.offsetWidth;
//   const btnHeight = noBtn.offsetHeight;

//   // 3. Calculate max available coordinates
//   const maxX = vWidth - btnWidth - padding;
//   const maxY = vHeight - btnHeight - padding;

//   // 4. Generate random position within the safe range [padding, max]
//   const randomX = Math.floor(Math.random() * (maxX - padding)) + padding;
//   const randomY = Math.floor(Math.random() * (maxY - padding)) + padding;

//   // 5. Apply style
//   noBtn.style.position = "fixed";
//   noBtn.style.left = `${randomX}px`;
//   noBtn.style.top = `${randomY}px`;
// }

// // Proximity Trigger: Move if mouse is within 150px
// document.addEventListener("mousemove", (e) => {
//   const rect = noBtn.getBoundingClientRect();
//   const btnCenterX = rect.left + rect.width / 2;
//   const btnCenterY = rect.top + rect.height / 2;

//   const distance = Math.sqrt(
//     Math.pow(e.clientX - btnCenterX, 2) + Math.pow(e.clientY - btnCenterY, 2)
//   );

//   if (distance < 150) {
//     moveButton();
//   }
// });

// // Final failsafe: If they somehow hover it, move it
// noBtn.addEventListener("mouseover", moveButton);

// function showSuccess() {
//   document.getElementById("main-container").classList.add("hidden");
//   document.getElementById("success-message").classList.remove("hidden");
// }

//
//
//
//
//
//
//
//
//
//
//
//

// const noBtn = document.getElementById("no-btn");

// // 1. Proximity Detection: Move before the cursor even touches it
// document.addEventListener("mousemove", (e) => {
//   const x = e.clientX;
//   const y = e.clientY;

//   // Get button position and dimensions
//   const btnRect = noBtn.getBoundingClientRect();
//   const btnCenterX = btnRect.left + btnRect.width / 2;
//   const btnCenterY = btnRect.top + btnRect.height / 2;

//   // Calculate distance between cursor and button center
//   // Distance formula: sqrt((x2-x1)^2 + (y2-y1)^2)
//   const distance = Math.sqrt(
//     Math.pow(x - btnCenterX, 2) + Math.pow(y - btnCenterY, 2)
//   );

//   // If cursor is within 100 pixels, move the button
//   if (distance < 100) {
//     moveButton();
//   }
// });

// function moveButton() {
//   const padding = 20;
//   const maxX = window.innerWidth - noBtn.offsetWidth - padding;
//   const maxY = window.innerHeight - noBtn.offsetHeight - padding;

//   const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
//   const randomY = Math.max(padding, Math.floor(Math.random() * maxY));
//   noBtn.style.position = "fixed";
//   noBtn.style.left = randomX + "px";
//   noBtn.style.top = randomY + "px";
// }

// // 2. Keyboard Protection: Prevent "Tab" or "Enter" from clicking it
// noBtn.addEventListener("keydown", (e) => {
//   e.preventDefault();
//   moveButton();
// });

// function showSuccess() {
//   document.getElementById("main-container").classList.add("hidden");
//   document.getElementById("success-message").classList.remove("hidden");
// }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// function moveButton() {
//   const noBtn = document.getElementById("no-btn");
//   const container = document.getElementById("main-container");

//   // 1. Get the container's dimensions and position on the screen
//   const rect = container.getBoundingClientRect();

//   // 2. Get the dimensions of the button
//   const btnWidth = noBtn.offsetWidth;
//   const btnHeight = noBtn.offsetHeight;

//   // 3. Calculate the boundaries relative to the container
//   // We stay within the container's width/height minus the button size
//   const maxX = rect.width - btnWidth;
//   const maxY = rect.height - btnHeight;

//   // 4. Generate random coordinates within those bounds
//   // We add rect.left and rect.top so the button stays inside the card's screen position
//   const randomX = rect.left + Math.random() * maxX;
//   const randomY = rect.top + Math.random() * maxY;

//   // 5. Apply the coordinates
//   noBtn.style.position = "fixed"; // Keep it fixed relative to the viewport
//   noBtn.style.left = randomX + "px";
//   noBtn.style.top = randomY + "px";
// }

// function showSuccess() {
//   document.getElementById("main-container").classList.add("hidden");
//   document.getElementById("success-message").classList.remove("hidden");
// }

//
//
//
//
//
//
//
//
//

// function moveButton() {
//   const noBtn = document.getElementById("no-btn");

//   // 1. Get the width and height of the entire browser window
//   const viewportWidth = window.innerWidth;
//   const viewportHeight = window.innerHeight;

//   // 2. Get the dimensions of the button itself
//   const btnWidth = noBtn.offsetWidth;
//   const btnHeight = noBtn.offsetHeight;

//   // 3. Calculate the maximum allowed X and Y positions
//   // We subtract the button size so the "end" of the button stays on screen
//   const maxX = viewportWidth - btnWidth - 20; // 20px buffer
//   const maxY = viewportHeight - btnHeight - 20; // 20px buffer

//   // 4. Ensure we don't get negative numbers if the window is tiny
//   const safeX = Math.max(0, Math.floor(Math.random() * maxX));
//   const safeY = Math.max(0, Math.floor(Math.random() * maxY));

//   // 5. Apply the coordinates
//   noBtn.style.left = safeX + "px";
//   noBtn.style.top = safeY + "px";

//   // Optional: Ensure the button is set to fixed so it moves relative to the screen
//   noBtn.style.position = "fixed";
// }

// function moveButton() {
//   const noBtn = document.getElementById("no-btn");

//   // Calculate boundaries to keep the button on screen
//   const padding = 20;
//   const maxX = window.innerWidth - noBtn.offsetWidth - padding;
//   const maxY = window.innerHeight - noBtn.offsetHeight - padding;

//   // Generate random coordinates
//   const randomX = Math.floor(Math.random() * maxX);
//   const randomY = Math.floor(Math.random() * maxY);

//   // Apply the new position
//   noBtn.style.left = randomX + "px";
//   noBtn.style.top = randomY + "px";
// }

// function showSuccess() {
//   document.getElementById("main-container").classList.add("hidden");
//   document.getElementById("success-message").classList.remove("hidden");
// }
