document.addEventListener("DOMContentLoaded", (event) => {
    let mybutton = document.getElementById("myBtn");
    
    // When the user scrolls down 20px from the top of the document, show the button
    
    
    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }
    window.onscroll = function() {scrollFunction()};

    let bober1 = document.querySelector(".bober1");
    console.log(bober1)

    let bober2 = document.querySelector(".bober2");
    console.log(bober2)

    let bober3 = document.querySelector(".bober3");
    console.log(bober3)

    let bober_all_1 = document.querySelectorAll(".bober_row_1")
    console.log(bober_all_1)

    let bober_all_2 = document.querySelectorAll(".bober_row_2")
    console.log(bober_all_2)

    let bober_all_3 = document.querySelectorAll(".bober_row_3")
    console.log(bober_all_3)

    bober1.addEventListener("mouseenter", (event) => {
        for (let index = 0; index < bober_all_1.length; index++) {
            const element = bober_all_1[index];
            element.style.color = "red";
            
        }
    })

    bober1.addEventListener("mouseleave", (event) => {
        for (let index = 0; index < bober_all_1.length; index++) {
            const element = bober_all_1[index];
            element.style.color = "white";
            
        }
    })
    bober2.addEventListener("mouseenter", (event) => {
        for (let index = 0; index < bober_all_2.length; index++) {
            const element = bober_all_2[index];
            element.style.color = "blue";
            
        }
    })

    bober2.addEventListener("mouseleave", (event) => {
        for (let index = 0; index < bober_all_2.length; index++) {
            const element = bober_all_2[index];
            element.style.color = "white";
            
        }
    })
    bober3.addEventListener("mouseenter", (event) => {
        for (let index = 0; index < bober_all_3.length; index++) {
            const element = bober_all_3[index];
            element.style.color = "yellow";
            
        }
    })

    bober3.addEventListener("mouseleave", (event) => {
        for (let index = 0; index < bober_all_3.length; index++) {
            const element = bober_all_3[index];
            element.style.color = "white";
            
        }
    })
});