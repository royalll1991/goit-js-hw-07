const nameInput = document.getElementById(`name-input`);
const nameOutput = document.getElementById(`name-output`);

nameInput.addEventListener(`input`, newName);

function newName () {
    const inputText = nameInput.value.trim();
    const outputText = inputText || 'Anonymous';
    nameOutput.textContent = outputText;
    
}
