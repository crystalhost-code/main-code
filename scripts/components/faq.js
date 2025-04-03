const faq = [
  {
    id: 1,
    question: "Czy mogę ulepszyć mój serwer Minecraft w dowolnym momencie?",
    answer: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    question: "Czy mogę zarabiać ze swojego serwera (itemshop)?",
    answer: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    question: "Czy hosting oferuje wsparcie dla pluginów i modów?",
    answer: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    question: "Czy serwer będzie dostępny online bez przerw 24/7?",
    answer: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    question: "Jak długo trwa uruchomienie nowego serwera Minecraft?",
    answer: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 6,
    question: "Czy hosting oferuje zabezpieczenia DDoS?",
    answer: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const faqItems = document.querySelector("#faq-items");
console.log(faqItems);
faq.forEach((object) => {
  const faqItem = document.createElement("div");

  faqItem.classList.add("faq-item");
  faqItem.innerHTML = `
          <div class="faq-question">
            <h4 class='question-header'>${object.question}</h4>
            <i onclick="showAnswer(${object.id})" class="fa-solid fa-chevron-down pointer" id='chevron-${object.id}'></i></div>
            <div class='faq-answer non-visible' id="faq-answer-${object.id}">
            <p  >${object.answer}</p>
          </div>
          <div class='line'></div>
        `;

  faqItems.appendChild(faqItem);
});

console.log(faq);
let isVisibleState = [];
const showAnswer = (id) => {
  const faqAnswer = document.querySelector(`#faq-answer-${id}`);
  const faqChevron = document.querySelector(`#chevron-${id}`);

  isVisibleState[id] = !isVisibleState[id];

  if (isVisibleState[id]) {
    faqAnswer.style.display = "block";
    faqChevron.classList.remove("fa-chevron-down");
    faqChevron.classList.add("fa-chevron-up");
  } else {
    faqAnswer.style.display = "none";
    faqChevron.classList.remove("fa-chevron-up");
    faqChevron.classList.add("fa-chevron-down");
  }
};
