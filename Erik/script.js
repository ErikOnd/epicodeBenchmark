function createStarts() {
    let starContainer = document.getElementsByClassName('star_rating')[0]

    for (let i = 0; i < 10; i++) {
        let star = document.createElement('button')
        star.classList.add('star')
        star.innerHTML = '&#9734;'
        star.addEventListener('click', function () {
            let currentStar = i + 1;
            star.innerHTML = '&#9733'
            console.log(currentStar)
            for (let j = 0; j < star.length; j++) {
            }
        })
        starContainer.appendChild(star)
    }
}
createStarts()

const allStars = document.getElementsByClassName('star')

