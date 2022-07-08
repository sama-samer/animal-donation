const form = document.getElementById('form');
const cardnumber = document.getElementById('cardnumber');
const cardholder = document.getElementById('cardholder');
const cvvinput =document.getElementById('cvvinput');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const cardnumberValue = cardnumber.value.trim();
    const cardholderValue = cardholder.value.trim();
    const cvvinputValue=cvvinput.value.trim();

    if(cardnumberValue === '') {
        setError(cardnumber, 'cardnumber is required');
    }// else if (!isValidEmail(emailValue)) {
       // setError(email, 'Provide a valid email address');}
        else {
        setSuccess(cardnumber);
    }

    if(cardholderValue === '') {
        setError(cardholder, 'your name is required');
    }else {
        setSuccess(cardholder);
    }
if(cvvinputValue===''){
    setError(cvvinput,'this field is required');

}
else{
    setSuccess(cvvinput);
}
};