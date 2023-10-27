const cuerdas = ["4ta", "5ta", "6ta"];
const direccion = ["atras", "adelante"];
const nota = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const patron = ["1234", "1243", "1324", "1342", "1423", "1432"];

function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function generateTest() {
  const selectedCuerda = getRandomElement(cuerdas);
  const selectedDireccion = getRandomElement(direccion);
  const selectedNota = getRandomElement(nota);
  const selectedPatron = getRandomElement(patron);

  const result = `Tocar en ${selectedNota} en ${selectedCuerda} cuerda hacia ${selectedDireccion} patron ${selectedPatron}.<br>`;
  const resultDiv = document.createElement("div");
  resultDiv.innerHTML = `Tocar en ${selectedNota} en ${selectedCuerda} cuerda hacia ${selectedDireccion} patron ${selectedPatron}.`;

  document.getElementById("results").appendChild(resultDiv);
}

function clearResults() {
  document.getElementById("results").innerHTML = "";
}
