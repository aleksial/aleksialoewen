const card = document.querySelector(".text-box");
      
card.addEventListener("click", () => {
    const front = card.querySelector(".front");
    const back = card.querySelector(".back");

    front.hidden = !front.hidden;
    back.hidden = !back.hidden;
});