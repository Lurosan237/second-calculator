var num1;
var num11;
var num2;
var num22;
var add;
var check= false;

const un = document.querySelector("#un");
const deux = document.querySelector("#deux");
const trois = document.querySelector("#trois");
const quatre = document.querySelector("#quatre");
const cinq = document.querySelector("#cinq");
const six = document.querySelector("#six");
const sept = document.querySelector("#sept");
const huit = document.querySelector("#huit");
const neuf = document.querySelector("#neuf");
const zero = document.querySelector("#zero");
const on = document.querySelector("#on");
const egal = document.querySelector("#egal");
const screen = document.querySelector('#screen');

/*_________________ Les chiffres 0 à 9 _________________________*/
un.addEventListener('click', (e) =>{
  if(check==false){
   screen.value += "1";
    }
  else if(check==true){
    screen.value ="1";
    check=false;
    }
   e.preventDefault();
});
deux.addEventListener('click', (e) => {
   if(check==false){
   screen.value += "2";
    }
  else if(check==true){
    screen.value ="2";
    check=false;
    }
   e.preventDefault();
});
trois.addEventListener('click', (e) =>{
      if(check==false){
   screen.value += "3";
    }
  else if(check==true){
    screen.value ="3";
    check=false;
    }
   e.preventDefault();
});
quatre.addEventListener('click', (e) =>{
      if(check==false){
   screen.value += "4";
    }
  else if(check==true){
    screen.value ="4";
    check=false;
    }
   e.preventDefault();
});
cinq.addEventListener('click', function(e){
      if(check==false){
   screen.value += "5";
    }
  else if(check==true){
    screen.value ="5";
    check=false;
    }
   e.preventDefault();
});
six.addEventListener('click', function(e){
    
      if(check==false){
   screen.value += "6";
    }
  else if(check==true){
    screen.value ="6";
    check=false;
    }
   e.preventDefault();
});
sept.addEventListener('click', function(e){
      if(check==false){
   screen.value += "7";
    }
  else if(check==true){
    screen.value ="7";
    check=false;
    }
      
   e.preventDefault();
});
huit.addEventListener('click', function(e){
      if(check==false){
   screen.value += "8";
    }
  else if(check==true){
    screen.value ="8";
    check=false;
    }
      
   e.preventDefault();
});
neuf.addEventListener('click', function(e){
      if(check==false){
   screen.value += "9";
    }
  else if(check==true){
    screen.value ="9";
    check=false;
    }
     
   e.preventDefault();
});
zero.addEventListener('click', function(e){

      if(check==false){
   screen.value += "0";
    }
  else if(check==true){
    screen.value ="0";
    check=false;
    }
      
   e.preventDefault();
});


/*_______ les operateurs ____________ */
plus.addEventListener('click', function(e){
   memoire1();
  screen.value="";
});

moins.addEventListener('click', function(e){
   memoire1();
  screen.value="";
});
fois.addEventListener('click', function(e){
   memoire1();
  screen.value="";
});

divise.addEventListener('click', function(e){
   memoire1();
  screen.value="";
});


/*____________fonction pour les operateurs__________ */

function checkoperator(value){
  add= value;
  /* console.log(value); */
  }
/*___________les resultats____________*/
egal.addEventListener('click', function(){
  check= true;
  memoire2();
  if(add==="+"){
     resultplus();
  }
  else if(add==="-"){
    resultmoins();
    }
  else if(add==="x"){
    resultfois();
    }
  else if(add==="÷"){
    resultdivise();
    }
  
}); 

/*___________Quelques fonctions utiliser____________ */

function memoire1(){
  num1 = document.getElementById('screen').value;
  num11 = parseInt(num1);
}
function memoire2(){
  num2 = document.getElementById('screen').value;
  num22 = parseInt(num2);
}
function resultplus(){
  resultat = num11 + num22;
  screen.value= resultat;
 }
function resultmoins(){
  resultat = num11 - num22;
  screen.value= resultat;
 }
function resultfois(){
  resultat = num11 * num22;
  screen.value= resultat;
 }
function resultdivise(){
  resultat = num11 / num22;
  screen.value= resultat;
 }
function reset(){
if(check==true){
  resetBtn();
  }
}
function resetBtn(){
  screen.value="";
  num11=0;
  num22=0;
  resultat = 0;
  }


  






