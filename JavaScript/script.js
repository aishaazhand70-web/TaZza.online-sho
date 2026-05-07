// header scroll
let nav = document.querySelector(".navbar");
window.onscroll + function () {
    if (document.documentElement.scrollTop > 50) {
        nav.classList.add("header-scrolled")
    } else {
        nav.classList.remove("header-scrolled")
    }
}

// nav hide
let navBar = document.querySelectorAll(".nav-link");

let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (e) {
    e.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})

const form = document.querySelector(".contact-form")

 form.addEventListener("submit", function (e) { 
    e.preventDefault();

    let name = document.getElementById("name").value;
     let email = document.getElementById("email").value;

     if (name === "") {
        document.getElementById("nameError").innerText = "Name is required";
    } else {
        document.getElementById("nameError").innerText = "";
    }

    // email validation
     if (!email.includes("@")) {
        document.getElementById("emailError").innerText = "Invalid Email";
     } else {
         document.getElementById("emailError").innerText = "";
    }

}) 

