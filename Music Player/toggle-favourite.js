document.addEventListener("DOMContentLoaded", () => {
    const favoriteIcon = document.getElementById("favorite-icon");
  
    favoriteIcon.addEventListener("click", () => {
      if (favoriteIcon.innerText === "favorite_border") {
        favoriteIcon.innerText = "favorite";
        favoriteIcon.classList.add("favorite");
      } else {
        favoriteIcon.innerText = "favorite_border";
        favoriteIcon.classList.remove("favorite");
      }
    });
  });


  