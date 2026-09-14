# 🎮 Tic-Tac-Toe

A responsive two-player Tic-Tac-Toe game built from scratch using **HTML, CSS, and JavaScript**.

The project focuses on practicing DOM manipulation, event handling, game logic, and responsive UI design while creating a fun and polished user experience.

---

## ✨ Features

- 👤 Two-player gameplay
- 📝 Player name input
- ❌ Custom X and O images
- 🔄 Live player turn indicator
- 🏆 Automatic winner detection
- 🤝 Draw detection
- 🔁 Play Again / restart functionality
- 🎥 Animated looping background video
- 🪟 Glassmorphism-inspired UI
- 📱 Responsive design for desktop, tablet, and mobile
- 🎨 Custom fonts and visual elements

---

## 🛠️ Technologies Used

- **HTML5** – Structure and layout
- **CSS3** – Styling, animations, responsive design and glassmorphism
- **JavaScript** – Game logic, DOM manipulation and event handling

---

## 🎮 How to Play

1. Enter the name of **Player 1**.
2. Enter the name of **Player 2**.
3. Click **Start Game**.
4. Player 1 plays as ❌.
5. Player 2 plays as ⭕.
6. Players take turns selecting an empty cell.
7. The first player to get three symbols in a row wins.
8. If all cells are filled without a winner, the game ends in a draw.
9. Click **Play Again** to start a new game.

---

## 🧠 What I Learned

While building this project, I practiced:

- Selecting HTML elements using JavaScript
- Using `querySelector()` and `querySelectorAll()`
- Working with `textContent` and `value`
- Adding event listeners
- Using `if / else` conditions
- Working with arrays and nested arrays
- Using loops to check game conditions
- Managing game state with variables
- Manipulating CSS classes using `classList`
- Creating responsive layouts with CSS
- Building interactive UI components

---

## 🏆 Winning Logic

The game checks the following eight possible winning combinations:

`[0, 1, 2]    [3, 4, 5]    [6, 7, 8]`

`[0, 3, 6]    [1, 4, 7]    [2, 5, 8]`

`[0, 4, 8]    [2, 4, 6]`
