document.addEventListener('DOMContentLoaded', () => {
  const orderedValues = JSON.parse(localStorage.getItem('selectedValues'));

  orderedValues.forEach((value, index) => {
    const p = document.createElement('p');
    p.textContent = `Value ${index + 1}: ${value}`;
    document.body.appendChild(p);
  });
});