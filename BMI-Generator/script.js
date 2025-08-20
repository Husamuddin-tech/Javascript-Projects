const form = document.querySelector('#bmi-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const height = parseFloat(document.querySelector('#height').value);
  const weight = parseFloat(document.querySelector('#weight').value);
  const result = document.querySelector('#bmiResult');

  if (isNaN(height) || height <= 0) {
    result.innerHTML = `❌ Please enter a valid height.`;
  } else if (isNaN(weight) || weight <= 0) {
    result.innerHTML = `❌ Please enter a valid weight.`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    let category = '';
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi < 25) {
      category = 'Normal weight';
    } else if (bmi < 30) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }

    result.innerHTML = `
      ✅ Your BMI is: <strong>${bmi}</strong><br/>
      📌 Category: <strong>${category}</strong>
    `;
  }
});
