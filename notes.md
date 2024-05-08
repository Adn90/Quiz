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

#quiz {
  counter-reset: quiz-item;  /* prepara uma contagem dos elementos */
}

.quiz-item {
  margin-top: 24px;
  border: 1px solid #475569;
  border-radius: 6px;

  overflow: hidden; /* como pai, vai evitar que o background do h3 transborde da caixa */
}

.quiz-item  h3 {
  padding: 16px 20px;
  color: #e2e8f0;

  /* ajutar a numeração das perguntas para ficar de lado do texto  */
  display: flex;
  align-items: center;
  gap: 12px;

  background-color: #e1293B;
}

.quiz-item  h3:before {
  counter-increment: quiz-item;/* incremento do counter-reset*/
  content: counter(quiz-item);/* coloca antes das perguntas o número ** */

  background-color: #475569;
  width: 28px;
  height: 28px;
  font-size: 12px;
  border-radius: 50%;

  /* flex para deixar a numeração centralizada com background color  */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0; /* flex por padrão, vai achantando os elementos; Com esse valor, os lementos não vão ser achatados. */
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
  **
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