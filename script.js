const instrumentsArr = [
  { category: "woodwinds", instrument: "Flute", price: 500 },
  { category: "woodwinds", instrument: "Clarinet", price: 200 },
  { category: "woodwinds", instrument: "Oboe", price: 4000 },
  { category: "brass", instrument: "Trumpet", price: 200 },
  { category: "brass", instrument: "Trombone", price: 300 },
  { category: "brass", instrument: "French Horn", price: 4300 },
  { category: "percussion", instrument: "Drum Set", price: 500 },
  { category: "percussion", instrument: "Xylophone", price: 3000 },
  { category: "percussion", instrument: "Cymbals", price: 200 },
  { category: "percussion", instrument: "Marimba", price: 3000 }
];

const selectContainer = document.querySelector("select");
const productsContainer = document.querySelector(".products-container");

function instrumentCards(instrumentCategory) {
  // 1. Filter the array first (keeping your exact logic)
  const instruments =
    instrumentCategory === "all"
      ? instrumentsArr
      : instrumentsArr.filter(
          ({ category }) => category === instrumentCategory
        );

  // 2. Create an empty array to hold the HTML strings
  const cardsHTML = [];

  // 3. Loop through the filtered instruments
  for (let i = 0; i < instruments.length; i++) {
    const { instrument, price } = instruments[i];
    
    // 4. Push the template literal into the array
    cardsHTML.push(`
      <div class="card">
        <h2>${instrument}</h2>
        <p>$${price}</p>
      </div>
    `);
  }

  // 5. Return the completed array
  return cardsHTML;
}

selectContainer.addEventListener("change", () => {
  productsContainer.innerHTML = instrumentCards(selectContainer.value).join("");
});