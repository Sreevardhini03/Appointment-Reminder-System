let questionCount = 0;

function addQuestion(type) {
    questionCount++;
    const container = document.createElement('div');
    container.className = 'appointments-container draggable';
    container.draggable = true;
    container.id = `question-${questionCount}`;
    container.innerHTML = `
        <label>Question ${questionCount} (${type}):</label>
        <input type="text" name="question-${questionCount}" required>
        ${type === 'multiple-choice' ? '<button type="button" onclick="addOption(this)">Add Option</button><div class="options-container"></div>' : '<textarea name="answer-${questionCount}" required></textarea>'}
        <button type="button" onclick="removeQuestion(this)">Remove Question</button>
    `;
    container.addEventListener('dragstart', dragStart);
    container.addEventListener('dragover', dragOver);
    container.addEventListener('drop', drop);
    document.getElementById('questions-container').appendChild(container);
    updatePreview();
}

function addOption(button) {
    const optionsContainer = button.nextElementSibling;
    const optionInput = document.createElement('input');
    optionInput.type = 'text';
    optionInput.name = 'option';
    optionInput.required = true;
    optionsContainer.appendChild(optionInput);
    updatePreview();
}

function removeQuestion(button) {
    button.parentElement.remove();
    updatePreview();
}

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const draggedElementId = event.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(draggedElementId);
    const dropZone = event.target.closest('.draggable');
    dropZone.parentNode.insertBefore(draggedElement, dropZone.nextSibling);
    updatePreview();
}

document.getElementById('survey-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Survey saved successfully!');
    // Save survey logic here
});

function updatePreview() {
    const questionsContainer = document.getElementById('questions-container');
    const previewContainer = document.getElementById('survey-preview');
    previewContainer.innerHTML = questionsContainer.innerHTML;
}