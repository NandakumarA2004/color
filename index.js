const changeclr = () => {
    let color = document.getElementById('colorSelect').value;
    document.body.style.backgroundColor = color;
    sessionStorage.setItem('selectedColor', color);
}
let savedColor = sessionStorage.getItem('selectedColor');
let select = document.getElementById('colorSelect');
if (savedColor && select) {
    document.body.style.backgroundColor = savedColor;
    select.value = savedColor;
}
