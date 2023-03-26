const holes = document.querySelectorAll(".hole")
const scores = document.querySelector(".score span")
let score = 0


// generates random spot of mole
function run() {
    const i = Math.floor(Math.random() * holes.length)
    const hole = holes[i]
    let timer = null



    // the mole image
    const img = document.createElement('img')
    img.classList.add('mole')
    img.src = 'images/mole.png'



    // score going up by 1 point
    img.addEventListener('click', () => {
        score++
        scores.textContent = score



        // win at score of 10 returns score to 0
        if (score === 10) {
            score = -1;
            return alert("You Win!!!");
        }

    })



    hole.appendChild(img)




    // timer for mole to move
    timer = setTimeout(() => {
        hole.removeChild(img)
        run()
    }, 1200)
}

run()