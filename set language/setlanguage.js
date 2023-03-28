
localStorage.setItem("set-language","english-romanian");
console.log(localStorage);


function handleLanguageClick(event) {
    localStorage.setItem("language", event.target.value);
    checkSelectedLanguage();
}

const checkSelectedLanguage = () => {
    const language = localStorage.getItem ("language");
    if (language) {
    if (language === "RO") {
        document.querySelectorAll(".text-ro").forEach((node) => (node.style.display = "block"));
        document.querySelectorAll(".text-us").forEach((node) => (node.style.display = "none"));
    } else {
        document.querySelectorAll(".text-ro").forEach((node) => (node.style.display = "none"));
        document.querySelectorAll(".text-us").forEach((node) => (node.style.display = "block"));
    }
}
};

const initPage = () => {
checkSelectedLanguage();
document.querySelector("#lang-ro").addEventListener("click", handleLanguageClick);
document.querySelector("#lang-us").addEventListener("click", handleLanguageClick);
};

window.addEventListener("load", initPage);

