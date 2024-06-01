document.addEventListener("DOMContentLoaded", (event) => {
    let shrek = document.querySelectorAll("#shrek");
    let show_image = document.querySelector("#show_image")
    let show_image_img = document.querySelector("#show_image_img")
    show_image.addEventListener("click", (event) => {
        show_image.style.display = "none"
    });

    for (let index = 0; index < shrek.length; index++) {
        const element = shrek[index];
        element.addEventListener("click", (event) => {
            const src = element.src
            show_image_img.src = src
            show_image.style.display = "block"
        });
    }
  });

