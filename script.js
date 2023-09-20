
const select=document.getElementById('inputGroupSelect01');
const container= document.querySelector('.container');


document.getElementById('play').addEventListener('click', function(){
 
  let scelta=select.selectedIndex;


 //  Fare un switch per creare le diverse opzioni del gioco, che sarebbero facile:100 box, medio:81box e difficile 64box.
 
 switch (scelta) {

   default:
     reset();
     alert("Scegliere una difficoltà");
     break;

   case 1:
     reset();
     const listaBombe = creaBombe();
     creaDiv(100, "box1", listaBombe);
     break;
     

   
   case 2:
     reset();
     creaBombe();
     creaDiv(81, "box2");
     break;  

   case 3:
     reset();
     creaBombe();
     creaDiv(64, "box3");
     break;
  
 
  }

})



// FUNZIONI

function reset(){
  container.innerHTML="";
 }

 

 function creaDiv(n, classe, listaBombe){
  console.log(listaBombe)
  for (let cont = 1; cont <= n; cont++) {
    const element = document.createElement('div');
    element.innerHTML = `<span class="number">${cont}</span>`;
    element.classList.add(classe);
    element.addEventListener("click", function(){
      let indiceDiv = this.textContent;
      let controlloBombe = false;
      for(let i=0; i<listaBombe.length; i++){
        if(listaBombe[i]==indiceDiv){
          controlloBombe = true;
        }
      }
      if(controlloBombe==false){
        element.classList.toggle("clicked");
      }
      else{
        for(i=0; i<listaBombe.length; i++){
          let element = listaBombe[i];
          document.getElementsByClassName(classe)[element-1].classList.add("red");
        }
       
      }
   
      
    })
    container.append(element);
  }
 }

 

 function creaBombe(){
   const listaBombe=[];  // array dove verranno messi i numeri delle bombe
   let numeroBombs=16;

   while(listaBombe.length<numeroBombs){
    bomb=Math.ceil(Math.random() * 100 + 1);
    // Pusho la bomba se non è dentro al array
    if(!listaBombe.includes(bomb)) listaBombe.push(bomb);

   }

   return listaBombe;

   
 }