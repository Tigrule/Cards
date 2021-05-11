let reserved = [];
let isOpened = 0;
let isLike = false;
let lastClickedI = -1;
let done = [];

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function howMuch(num) {
    let mass = reserved.filter(el => el === num)
    return mass.length;
}

function randomFour() {
    let gotten = getRandomIntInclusive(1, 3).toFixed();
    let lots = howMuch(gotten);
    if (lots < 4) {
        reserved.push(gotten);
    } else {
        randomFour()
    }
}

function clearTwo(lastClickedI, i) {
    cards[lastClickedI].innerHTML = '';
    cards[i].innerHTML = '';
    done.push(i);
    done.push(lastClickedI);
}

function red(index) {
    cards[index].style.color = 'red';
}

function black(index) {
    cards[index].style.color = 'black'
    hide(index);
}

function openCard(i) {
    if (!(done.some(el => el === i))) {
        if (isOpened === 0) {
            isLike = false;
            lastClickedI = i;
            red(lastClickedI)
            isOpened = reserved[i]
        } else {
            if (lastClickedI === i) {
                lastClickedI = -1;
                isOpened = 0;
                isLike = false;
                return;

            } else {
                if (reserved[i] === isOpened) {
                    isLike = true;
                    isOpened = 0;
                    clearTwo(lastClickedI, i)
                } else {
                    black(lastClickedI)
                    isLike = false;
                    isOpened = 0;

                }
            }
        }
    }

}

let cards = document.getElementsByClassName('card');

for (let i = 0; i < 12; i++) {
    randomFour()
    cards[i].innerHTML = reserved[i].toString();
}

function hide() {
    hide[arguments].forEach(el => cards[el].style.background = "black")
}

let nu
function left(){
    let leftLeft = window.document.getElementById('slider')
    if (leftLeft.style.left === '') {
        leftLeft.style.left = '0';
        left();
    }
    else {
        leftLeft.style.left = `${(parseFloat(leftLeft.style.left) + 100).toString()}px`;
    }
}

