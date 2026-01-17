
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        logo.src = 'image (2).png';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        logo.src = 'image.png';
    }
}           
                    