let currentStep = 1;

function hideSteps() {
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => {
        if (step.id !== 'step' + currentStep) {
            step.style.display = 'none';
        } else {
            step.style.display = 'block';
        }
    });
}

function nextStep() {
    if (currentStep < 11) {
        currentStep++;
        hideSteps();
    } 
}

document.getElementById('os').addEventListener('change', function() {
    const os = document.getElementById('os').value;
    if (os === 'windows' || os === 'mac') {
        document.getElementById('nextButton').disabled = false;
        document.getElementById('nextButton').classList.remove('disabled');
    } else {
        document.getElementById('nextButton').disabled = true; 
    }
    if (os === 'windows') {
        document.querySelectorAll('#windowsInstructions').forEach(instruction => instruction.style.display = 'block');
        document.querySelectorAll('#macInstructions').forEach(instruction => instruction.style.display = 'none');
    }
    if(os === 'mac') {
        document.querySelectorAll('#windowsInstructions').forEach(instruction => instruction.style.display = 'none');
        document.querySelectorAll('#macInstructions').forEach(instruction => instruction.style.display = 'block');
    }
});

hideSteps();
