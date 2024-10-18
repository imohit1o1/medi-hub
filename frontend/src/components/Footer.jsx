@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Londrina+Outline&display=swap');

body {
  font-family: 'Poppins', Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(0deg, rgba(136, 0, 255, 1) 24%, rgba(65, 45, 253, 1) 48%, rgba(29, 29, 29, 1) 100%);
}

.container {
  width: 100%;
  max-width: 1000px;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 170px;
}

.subtitle {
  text-align: center;
  color: #f6ac62;
  font-family: 'Londrina Outline', cursive;
  font-size: 5rem;
  padding: 8px 16px;
  text-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
}

h1 {
  text-align: center;
  color: #fff;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px #000;
}

input, button {
  font-size: 15px;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #333;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

input:hover, button:hover {
  cursor: pointer;
  font-weight: bold;
}

.js-add-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
  row-gap: 1rem;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.js-actions-wrapper {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

button {
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.js-add-button {
  background-color: green;
  color: white;
}

.js-add-button:hover {
  background-color: darkgreen;
}

.js-cancel-button {
  background-color: #ff0000;
}

.js-cancel-button:hover {
  background-color: #8b0000;
}

.task-info {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.task-name {
  font-weight: bold;
  overflow: hidden;
  max-height: 40px;
}

.category-tag, .priority-tag {
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 12px;
  font-weight: bold;
}

.priority-high {
  background-color: #ffcccb;
  color: #d8000c;
}

.priority-medium {
  background-color: #feefb3;
  color: #9f6000;
}

.priority-low {
  background-color: #d4edda;
  color: #155724;
}

button img {
  margin-right: 5px;
}

footer {
  background-color: transparent;
  color: white;
  text-align: center;
  padding: 20px 0;
  position: fixed;
  width: 100%;
  bottom: 0;
  font-size: 1rem;
  display: flex;
  justify-content: space-around;
}

.social-media a {
  margin: 0 10px;
  font-size: 15px;
  padding: 8px;
  border: 2px solid black;
  border-radius: 8px;
}

.social-media a:hover {
  transform: scale(1.05);
  transition: all 0.25s ease-out;
  border: none;
}

.social-media .insta:hover {
  background: linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5);
}

.js-add-html {
  overflow-y: scroll;
  height: 30vh;
}

.js-add-html::-webkit-scrollbar {
  width: 10px;
}

.js-add-html::-webkit-scrollbar-thumb {
  background-color: rgb(136, 132, 132);
  border-radius: 7px;
}

.js-add-html::-webkit-scrollbar-track {
  background-color: black;
}

#js-success-notification {
  position: absolute;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #46a34a;
  width: 15%;
  min-width: 200px;
  height: 7%;
  left: 2%;
  bottom: 10%;
  color: #d4edda;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@media (max-width: 947px) {
  .container {
    max-width: 100%;
    padding: 10px;
  }

  .subtitle {
    font-size: 3rem;
  }

  .js-add-grid, .js-add-html {
    grid-template-columns: 1fr;
  }

  .task-info {
    flex-direction: column;
  }

  footer {
    font-size: 0.8rem;
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .subtitle {
    font-size: 2rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  footer p {
    font-size: 10px;
  }
}
export default Footer;
