document.getElementById('display').value = "0";
document.getElementById('plus').addEventListener('click', function () {
    const displayField = document.getElementById('display');
    let count = parseInt(displayField.value);
    displayField.value = count + 1;
})
document.getElementById('minus').addEventListener('click', function () {
    const displayField = document.getElementById('display');
    let count = parseInt(displayField.value);

    if (count == 0) {
        displayField.value = "0";
    }
    else {
        displayField.value = count - 1;
    }
})