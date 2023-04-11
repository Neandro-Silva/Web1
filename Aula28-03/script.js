document.getElementById('logo').onclick = mudaCorFundo;

function mudaCorFundo(){
    let a = Math.floor(255 * Math.random());
    let b = Math.floor(255 * Math.random());
    let c = Math.floor(255 * Math.random());
    document.querySelector('body').style.backgroundColor = `rgba(${a}, ${b},${c})`;
}

