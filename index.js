const toggleMenu = (event) => {
	event.currentTarget.classList.toggle("open");
};

document
	.getElementById("nav__menu-button")
	.addEventListener("click", toggleMenu);
