    const changeclr=()=> {
        let color = document.getElementById('colorSelect').value;
        document.body.style.backgroundColor = color;
        localStorage.setItem('selectedColor', color);
    }
    let savedColor = localStorage.getItem('selectedColor');
    let select = document.getElementById('colorSelect');
    if (savedColor && select) {
        document.body.style.backgroundColor = savedColor;
        select.value = savedColor;
    }
  