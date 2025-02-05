let share = document.getElementById('share')
let shared = document.getElementById('shared')

share.addEventListener("click", (e) => {
    shared.classList.toggle("active")
    shared.classList.toggle("inactive")
})