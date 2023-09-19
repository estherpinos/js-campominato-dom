
const select=document.getElementById('inputGroupSelect01');


document.getElementById('play').addEventListener('click', function(){
 
  let scelta=select.selectedIndex;


 //  Fare un switch per creare le diverse opzioni del gioco, che sarebbero facile:100 box, medio:81box e difficile 64box.
 const container= document.querySelector('.container');
 switch (scelta) {

   default:
     reset();
     alert("Scegliere una difficoltà");
     break;

   case 1:
     reset();
     creaDiv(100, "box1");

     while(listaBomba.length < numeriBombe){
      let bombeRandom = Math.ceil(Math.random() * 100 + 1);
      let valori = bombeRandom;
      listaBomba.push(valori);
      console.log(listaBomba);
       
     }
     
     break;
     

   
   case 2:
     reset();
     creaDiv(81, "box2");
     break;  

   case 3:
     reset();
     creaDiv(64, "box3");
     break;
  
 
  }

  function reset(){
   container.innerHTML="";
  }

  

  function creaDiv(n, classe){
   for (let cont = 1; cont <= n; cont++) {
     const element = document.createElement('div');
     element.innerHTML = `<span class="number">${cont}</span>`;
     element.classList.add(classe);
     element.addEventListener("click", function(){
       element.classList.toggle("clicked");
       console.log(this);
     })
     container.append(element);
   }
  }

  creaBombe();

  function creaBombe(){
    const listaBombe=[];
    for(let i=0; i<16; i++){
      let numero = Math.ceil(Math.random() * 100 + 1);
      let controlloNumeriDoppi = false;
      for(let conta=0; conta<listaBombe.length; conta++){
        if(listaBombe[conta]==numero)
        {
          controlloNumeriDoppi= true;
          i--;
        }
      }
      if(controlloNumeriDoppi==false)
        listaBombe.push(numero);
    } 

    console.log(listaBombe);
    
  }





})