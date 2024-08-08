
function calculateSum(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}


function calculate() {

    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

   
    const result = calculateSum(num1, num2);

   
    document.getElementById('result').textContent = 'The sum is: ' + result;
} 