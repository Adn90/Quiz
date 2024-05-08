```css

*, :root {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: 'Inter', sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
}


.quiz-item dl dt {
  font-size: 14px;
  line-height: 24px;

  /* flex para alinhar e dar gap no input customizado */
  display: flex;
  align-items: center;
  gap: 8px;

  color: #e2e8f0;
}

input {
  all: unset;

  border: 1px solid #94a3b8;
  width: 16px;
  height: 16px;

  border-radius: 50%;

  /* deixar a seleção do radiobutton centralizada */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* pseudo-selector -> elemento:pseudo-selector */
input:checked {
  border: 1px solid #A3E635;
}

/* 
  before insere algo antes de um elemento 
  https://www.w3schools.com/cssref/sel_before.php
*/
input:checked:before {
  content: "";
  width: 10px;
  height: 10px;

  background-color: #A3E635;
  border-radius: 50%;
}

```