// Init values

const burgerBtn = document.querySelector(".hamburger")
const navLinks = document.querySelectorAll(".nav__link")
const linksContainer = document.querySelector(".nav__links")

// Functions
const openNav = params => {
	if (!burgerBtn.classList.contains("is-active")) {
		burgerBtn.classList.add("is-active")
		linksContainer.classList.add("active")
	} else {
		burgerBtn.classList.remove("is-active")
		linksContainer.classList.remove("active")
	}
}

const closeNav = params => {
	burgerBtn.classList.remove("is-active")
	linksContainer.classList.remove("active")
}

// Eventlisiners
burgerBtn.addEventListener("click", openNav)
navLinks.forEach(el => {
	el.addEventListener("click", closeNav)
})
