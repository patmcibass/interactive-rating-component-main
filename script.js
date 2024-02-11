const ratingsContainer = document.getElementById('ratings-container');
const thankYouContainer = document.getElementById('thank-you-container');

const button1 = document.getElementById('1');
const button2 = document.getElementById('2');
const button3 = document.getElementById('3');
const button4 = document.getElementById('4');
const button5 = document.getElementById('5');

const submit = document.getElementById('submit');
const resultText = document.getElementById('result');

let buttonWasClicked = false;

const btnArr = [
    button1,
    button2,
    button3,
    button4,
    button5
]

const buttonClicked = (e) => {
    resultText.innerHTML = `
    <p class="orange">You selected ${e.target.value} out of 5</p>
    `;
    
    if(buttonWasClicked){
        btnArr.forEach((i) => {
            i.classList.remove('clicked');
        });
    }

    e.target.classList.add('clicked');
    buttonWasClicked = true;

}

const submitButtonClicked = () => {
    if(buttonWasClicked){
        ratingsContainer.classList.remove('container');
        ratingsContainer.classList.add('hidden');
        thankYouContainer.classList.remove('hidden');
        thankYouContainer.classList.add('container');
        ratingsContainer.ariaHidden = 'true';
        thankYouContainer.ariaHidden = 'false';
    }
    else {
        alert('Please give us a rating.')
    }

}

button1.addEventListener('click', buttonClicked);
button2.addEventListener('click', buttonClicked);
button3.addEventListener('click', buttonClicked);
button4.addEventListener('click', buttonClicked);
button5.addEventListener('click', buttonClicked);

submit.addEventListener('click', submitButtonClicked);