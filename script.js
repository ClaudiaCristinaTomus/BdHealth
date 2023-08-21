const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;

const faqs = document.querySelectorAll(".faq1");

const tabs = document.querySelectorAll('.tab_btn');
const all_content = document.querySelectorAll('.content');

let isDragging = false, startX, startScrollLeft;





arrowBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
  });
})

const dragStart = (e) =>{
  isDragging = true;
  carousel.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft= carousel.scrollLeft;
}

const dragging = (e) => {
  if (!isDragging) return;
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop =()=>{
  isDragging =  false;
  carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown",dragStart);
carousel.addEventListener("mousemove",dragging);
carousel.addEventListener("mouseup", dragStop);


faqs.forEach((faq1) => {
    faq1.addEventListener("click", () => {
        faq1.classList.toggle("active");
    });
});


tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        tabs.forEach(tab => { tab.classList.remove('active') });
        tab.classList.add('active');
        const line = document.querySelector('.line');
        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";

        all_content.forEach(content => { content.classList.remove('active') });

        all_content[index].classList.add('active');
    })

})