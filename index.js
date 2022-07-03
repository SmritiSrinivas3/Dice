let images = ['die-1.png', 'die-2.png', 'die-3.png', 'die-4.png', 'die-5.png', 'die-6.png']

let dice = document.querySelectorAll('img')


function roll() {
    dice.forEach(function (die) {
        die.classList.add('shake')
    })
    setTimeout(function () {
        dice.forEach(function (die) {
            die.classList.remove('shake')
        })
        let dieValue = Math.floor(Math.random() * 6)
        console.log(dieValue)
        document.querySelector('#ourDie').setAttribute('src', images[dieValue])




    },
        1000
    )
}