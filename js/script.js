function hitungLuas() {
  const alas = parseFloat(document.getElementById('alas-luas').value);
  const tinggi = parseFloat(document.getElementById('tinggi-luas').value);
  
  if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
    alert('Harap masukkan nilai alas dan tinggi yang valid.');
    return;
  }

  const luas = 0.5 * alas * tinggi;

  document.getElementById('result-luas').innerHTML = `Luas: ${luas}`;
}

function hitungKeliling() {
  const sisiA = parseFloat(document.getElementById('sisiA').value);
  const sisiB = parseFloat(document.getElementById('sisiB').value);
  const sisiC = parseFloat(document.getElementById('sisiC').value);
  
  if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC) || sisiA <= 0 || sisiB <= 0 || sisiC <= 0) {
    alert('Harap masukkan nilai sisi yang valid.');
    return;
  }

  const keliling = sisiA + sisiB + sisiC;

  document.getElementById('result-keliling').innerHTML = `Keliling: ${keliling}`;
}

function resetFormLuas() {
  document.getElementById('alas-luas').value = '';
  document.getElementById('tinggi-luas').value = '';
  document.getElementById('result-luas').innerHTML = `Luas: 0`;
}

function resetFormKeliling() {
  document.getElementById('sisiA').value = '';
  document.getElementById('sisiB').value = '';
  document.getElementById('sisiC').value = '';
  document.getElementById('result-keliling').innerHTML = `Keliling: 0`;
}
