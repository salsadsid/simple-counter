document.getElementById('display').value = "0";
function counter(isAdd) {
    const displayField = document.getElementById('display');
    let count = parseInt(displayField.value);
    if (isAdd) {
        displayField.value = count + 1;
    }
    else if (count != 0) {
        displayField.value = count - 1;
    }
}
document.getElementById('plus').addEventListener('click', function () {
    counter(true)
})
document.getElementById('minus').addEventListener('click', function () {
    counter(false);
})
document.getElementById('reset').addEventListener('click', function () {
    document.getElementById('display').value = "0";
})