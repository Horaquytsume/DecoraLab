// quando a página carregar, vamos mostrar uma barra
//com 3 botões e uma imagem na tela
window.addEventListener("load",estrutura);

function estrutura(){
    console.log("Carregado.");

    const body = window.document.body;
    const divBarra = document.createElement("div");
    divBarra.className = "barra";

    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");
    const btn3 = document.createElement("button");
    
    btn1.innerHTML = "Imagem1";
    btn2.innerHTML = "Imagem2";
    btn3.innerHTML = "Imagem3";

    divBarra.appendChild(btn1);
    divBarra.appendChild(btn2);
    divBarra.appendChild(btn3);


    const img1 = document.createElement("img");
    img1.src="img/foto1.jpg";
    img1.className="imgHome";


    // adicionar a div ao body
    body.appendChild(divBarra);

    // adicionar a imagem ao corpo da página
    body.appendChild(img1);

// Ações para os botões
btn1.onclick = function(){
    img1.src = "img/foto.jpg";
}

btn2.onclick = ()=>{
    img1.src = "img/foto2.jpg";
}

btn3.onclick = ()=>{
    img1.src = "img/foto3.jpg";
}


img1.onmouseover = ()=>{
    img1.style.width = "60%";
    img1.style.zIndex = "1000";
}

img1.onmouseout = () => {
    img1.style.width = "50%";
    img1.style.zIndex = "10";
}

}