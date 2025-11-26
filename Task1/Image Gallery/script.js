const images = document.querySelectorAll(".gallery img");
const popup = document.querySelector(".popup");
const popupImg = document.querySelector("#popup-img");
const closeBtn = document.querySelector("#close");

images.forEach((img) => {
  img.addEventListener("click", () => {
    popup.style.display = "flex";
    popupImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

const buttons = document.querySelectorAll(".filter button");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const all = document.querySelector(".filter .active");
    all.classList.remove("active");
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    const pics = document.querySelectorAll(".pic");
    pics.forEach((pic) => {
      if (filter === "all" || pic.dataset.category === filter) {
        pic.style.display = "block";
      } else {
        pic.style.display = "none";
      }
    });
  });
});
