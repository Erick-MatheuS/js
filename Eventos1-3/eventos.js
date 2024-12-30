
// Onload

// window.onload = function(){

//     console.log("Carregou o DOM");

// }

//     console.log("Carregou o JS");

// <<<<<<<<<<< PARA ENTENDERMOS MELHOR PODEMOS MUDAR DE "WINDOW" PARA "DOCUMENT" >>>>>>>>>>>>>>>

///////////////////////////////////////////////////////////////////////////////////

// Click

/////// ex1  

       //// Não esta funcionanod esse codigo não sei porque////

// var btn = document.getElementById("button");

// console.log(btn);

// btn.addEventListener("click", function() {

//   console.log("clicou");

//   console.log(this)

// })

    // exeplificando 

    // elemento.adicionarElemento('nome do evento', funccao que executa pos evento)

  ///// ex2

  
  document.getElementById("go").addEventListener("go", myFunction);

  function myFunction() {
    document.getElementById("go").innerHTML = "YOU CLICKED ME!";
  }



//////////////////////////////////////////////////////////////////////////////////


// onMouseOver e OnmouseOut

  function entra(nonoboy){
    nonoboy.innerHTML = "thank you";
  }

  function sai(nonoboy){
    nonoboy.innerHTML = "de nada";
  }

/////////////////////////////////////////////////////////////////////////////////

  // onblur e onFocus

  document.getElementById('valor').focus();

  function minhaFuncao(){
    var valor = document.getElementById("valor").value;

    if(valor){
      document.getElementById("resultado").innerHTML = valor;
    }else{
      document.getElementById("resultado").innerHTML = "Campo vazio!!"
    }
  }

/////////////////////////////////////////////////////////////////////////////////

  // onchange

  // function myFunction(val){
  //   alert("The input has changed. The new value is: " + val)
  // }

  // function myFunction()
  //   {
  //   var x=document.getElementById("fname");
  //   x.value=x.value.toUpperCase();
  //   }
