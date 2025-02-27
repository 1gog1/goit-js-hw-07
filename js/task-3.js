const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
    const name = event.currentTarget.value.trim();
    output.textContent = name || 'Anonymous';
});