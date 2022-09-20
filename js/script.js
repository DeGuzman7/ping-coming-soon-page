const submit = document.querySelector('#submit');

submit.addEventListener('click', (e)=>{
    e.preventDefault();

    const input_value = document.querySelector('#email').value;
    const input = document.querySelector('#email');
    const emailRegex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+)(\.[a-z]+)(\.[a-z]+)?$/;
    const error = document.querySelector('.error');
    if (emailRegex.test(input_value)) {
        console.log('Valid')
        input.classList.remove('error-border');
        error.style.display = 'none';
        alert('Your email address has been received!')
        location.reload();
    }
    else{
        console.log('Invalid')
        input.classList.add('error-border');
        error.style.display = 'block';
    }
})