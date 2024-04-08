const dropdownToggle = document.querySelector(".dropdown-toggle");
const menuItems = document.querySelectorAll(".menu-item a");

dropdownToggle.addEventListener("click", () => {
    const dropdownMenu = document.querySelector("#dropdown > .menu");
    dropdownMenu.classList.toggle("open");
    dropdownToggle.classList.toggle("open");
});

menuItems.forEach(menuItem => {
    menuItem.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent event from bubbling up
        const selectedOption = menuItem.textContent;
        dropdownToggle.querySelector("span").textContent = selectedOption;
        const dropdownMenu = document.querySelector("#dropdown > .menu");
        dropdownMenu.classList.remove("open");
        dropdownToggle.classList.remove("open");
    });
});

document.addEventListener("click", (event) => {
    if (!event.target.closest("#dropdown")) {
        const dropdownMenu = document.querySelector("#dropdown > .menu");
        dropdownMenu.classList.remove("open");
        dropdownToggle.classList.remove("open");
    }
});
