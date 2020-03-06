

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open ("https://beerorcoffee.com/coworking/space/global-labs--araraquara");
    //window.location.href = "https://beerorcoffee.com/coworking/space/global-labs--araraquara"
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*function soma (n1, n2){
    return n1 + n2;
}*/

/*function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true;
    }else{
        validar = false
    }
    return validar; 
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));*/

//alert(soma(5,10));

/*var d = new Date();
alert(d.getMinutes());
alert(d.getHours());
alert(d.getDay());*/

/*var count; 
for(count 0; count <=5; count++) {
    alert(count);
}*/




/*var count = 0;
while (count < 5){
    console.log(count);
    alert (count);
    count++;  
};*/


/*var idade = prompt("Qual sua idade?")
if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade")
};*/



/*var fruta = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(fruta);
alert(fruta[1].nome);*/



/*var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);*/


//var lista = ["maça", "pera", "uva"];
//lista.push("laranja");
//lista.pop()
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join("  "));


/*
var nome = "Danilo Cassiano Dias";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo"
alert(nome + " tem " + idade + " anos");
alert(n1*n2);
console.log(nome);
console.log(n1);
console.log(frase.toLowerCase());
alert(frase.replace("Japão", "Brasil"))*/