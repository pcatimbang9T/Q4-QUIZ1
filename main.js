function calculateBMI() {
  let weight = parseFloat(document.getElementById('numA').value);
  let height = parseFloat(document.getElementById('numB').value);
  let result = document.getElementById('result');

  let bmi = weight / Math.pow(height, 2);
  let roundedResult = bmi.toFixed(2);

  if (bmi < 18.5) {
    result.innerHTML = 'UNDERWEIGHT (' + roundedResult + ').';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    result.innerHTML = 'NORMAL WEIGHT (' + roundedResult + ').';
  } else if (bmi >= 25 && bmi <= 29.9) {
    result.innerHTML = 'OVERWEIGHT (' + roundedResult + ').';
  } else if (bmi >= 30) {
    result.innerHTML = 'OBESE (' + roundedResult + ').';
  } else {
    result.innerHTML = "No valid input.";
  }
}
