
let darkMode = true;

function toggleMode() {
    if (darkMode) {
        // Setzen auf helle Farben
        document.documentElement.style.setProperty('--text-color', '#ffffff');
        document.documentElement.style.setProperty('--bg-light', '#333742');
        document.documentElement.style.setProperty('--bg-light-secondary', '#21232F');
        document.documentElement.style.setProperty('--white-changable', '#ffffff');

        darkMode = false;
    } else {
        // Setzen auf dunkle Farben
        document.documentElement.style.setProperty('--text-color', '#444');
        document.documentElement.style.setProperty('--bg-light', '#EFEFEF');
        document.documentElement.style.setProperty('--bg-light-secondary', '#ffffff');
        document.documentElement.style.setProperty('--white-changable', '#21232f');
        darkMode = true;

    }
}
let switchBtn = document.querySelector(".switch-btn");

console.log(switchBtn);

switchBtn.addEventListener("click", swichMe)

function swichMe() {
    switchBtn.classList.toggle("custom-left")
    toggleMode()
}