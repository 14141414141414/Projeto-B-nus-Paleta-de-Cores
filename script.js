// ----------------------------------------------------------------------------

const cor1 = document.querySelector('.cor1');
const cor2 = document.querySelector('.cor2');
const cor3 = document.querySelector('.cor3');
const cor4 = document.querySelector('.cor4');
const cor5 = document.querySelector('.cor5');
const inputCor1 = document.querySelector('#cor1');
const inputCor2 = document.querySelector('#cor2');
const inputCor3 = document.querySelector('#cor3');
const inputCor4 = document.querySelector('#cor4');
const inputCor5 = document.querySelector('#cor5');
const inputColor = document.querySelectorAll('.input-Color');

async function randomColor() {
    const url = 'https://x-colors.herokuapp.com/api/random?number=5';
    
    const response = await fetch(url);
    const data = await response.json();
    
    return data;
}

const palette = async () => {

    const random = await randomColor()
    if (inputCor1.checked === false) { 
    cor1.style.backgroundColor = `${random[0].hex}`;
    inputColor[0].value = `${random[0].hex}`;
    cor1.firstChild.style.color = `${random[0].hex}`;
    }
    if (inputCor2.checked === false) { 
    cor2.style.backgroundColor = `${random[1].hex}`;
    inputColor[1].value = `${random[1].hex}`;
    cor2.firstChild.style.color = `${random[1].hex}`;
    }
    if (inputCor3.checked === false) { 
    cor3.style.backgroundColor = `${random[2].hex}`;
    inputColor[2].value = `${random[2].hex}`;
    cor3.firstChild.style.color = `${random[2].hex}`;
    }
    if (inputCor4.checked === false) { 
    cor4.style.backgroundColor = `${random[3].hex}`;
    inputColor[3].value = `${random[3].hex}`;
    cor4.firstChild.style.color = `${random[3].hex}`;
    }
    if (inputCor5.checked === false) { 
    cor5.style.backgroundColor = `${random[4].hex}`;
    inputColor[4].value = `${random[4].hex}`;
    cor5.firstChild.style.color = `${random[4].hex}`;
    }
}

window.onload = palette()

const clickBtn = document.querySelector('.layout-btn');
clickBtn.addEventListener('click', palette)

// -------------------------------------------------------------------------------

const header = document.querySelector('.header');
const body = document.querySelector('body');
const textContainer = document.querySelector('.generate-color');
const footer = document.querySelector('footer');

const layoutBtn = document.querySelector('.click-btn');

layoutBtn.addEventListener('click', () => {
    header.style.backgroundColor = cor1.children[1].value
    body.style.backgroundColor = cor2.children[1].value
    textContainer.style.backgroundColor =cor3.children[1].value
    footer.style.backgroundColor = cor4.children[1].value    
    document.querySelector('.click-btn').style.backgroundColor = cor5.children[1].value
    document.querySelector('.click-btn').firstChild.style.color = cor5.children[1].value
    document.querySelector('.nave').style.color = cor1.children[1].value
})

// --------------------------------------------------------------------

const colorNum = document.querySelector('.colorNum');

function colorEnter() {
inputColor.forEach((xablau) => xablau.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        inputColor.forEach((element) => 
        element.parentNode.style.backgroundColor = element.value
        )
    }
}))
}

window.onload = colorEnter()