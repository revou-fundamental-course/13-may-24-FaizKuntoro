function hitung() {
  const alas = parseFloat(document.getElementById('alas').value);
  const tinggi = parseFloat(document.getElementById('tinggi').value);
  
  if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
    alert('Harap masukkan nilai alas dan tinggi yang valid.');
    return;
  }

  const luas = 0.5 * alas * tinggi;
  const hypotenuse = Math.sqrt(Math.pow(tinggi, 2) + Math.pow(alas, 2));
  const keliling = tinggi + alas + hypotenuse

  document.getElementById('result-luas').innerHTML = `Luas: ${luas}`;
  document.getElementById('result-keliling').innerHTML = `Warning: ${keliling}`;
}

function resetForm() {
  document.getElementById('alas').value = '';
  document.getElementById('tinggi').value = '';
  document.getElementById('result-luas').innerHTML = `Luas: 0`;
  document.getElementById('result-keliling').innerHTML = `Keliling: 0`;
}
