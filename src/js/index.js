const buttons = document.querySelectorAll('.button')
const character = document.querySelectorAll(".character")

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {

        const selectedbutton = document.querySelector(".selected.button")
        selectedbutton.classList.remove("selected")

        button.classList.add("selected")

        const selectedcharacter = document.querySelector(".selected.character")
        selectedcharacter.classList.remove("selected")

        character[index].classList.add("selected")
    })
})