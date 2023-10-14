const icon = document.getElementById("icon")
const button = document.querySelector("button")
const date = document.querySelector(".input")

// setting icon toggle
function toggle() {
    // console.log(date);
    if (date.style.display == "none") {
        date.style.display = "block"
    } else {
        date.style.display = "none"
    }
}
button.addEventListener('click', function () {
    setInterval(() => {
        const content = document.querySelector(".content").style.display = "none"
        const birth = document.querySelector("input").value
        // console.log(birth);
        // connverting date of birth in milliseconds
        const dob = Date.parse(birth)
        // console.log(dob);
        const content2 = document.querySelector(".content2").style.display = "block"

        const filhal = new Date()
        // converting current date in millliseconds
        const now = Date.parse(filhal)
        // calculatting time diffrence from date of birth
        const diff = (now - dob) / 1000
        console.log(diff);
        // displaying time diffrence
        const year = Math.floor(diff / (60 * 60 * 24 * 365))
        const month = Math.floor(diff / (60 * 60 * 24 * 365)) % 12
        const day = Math.floor(diff / (60 * 60 * 24)) % 30
        const hour = Math.floor(diff / (60 * 60)) % 24
        const minute = Math.floor(diff / 60) % 60
        const second = Math.floor(diff) % 60
        // inserting value to the place holders
        const years = document.getElementById("year").innerHTML = year
        const months = document.getElementById("month").innerHTML = month
        const days = document.getElementById("day").innerHTML = day
        const hours = document.getElementById("hour").innerHTML = hour
        const minutes = document.getElementById("minute").innerHTML = minute
        const seconds = document.getElementById("second").innerHTML = second
    }, 1000);
})
