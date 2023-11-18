let textarea = document.getElementById("textarea");
let button = document.querySelector("#button");

button.addEventListener("click",()=>{
         let valeur =textarea.value;
         if(valeur==""){
                  alert("Veillez entré une valeur");
         }else{
                  let ecouteur = new SpeechSynthesisUtterance(valeur);
                  speechSynthesis.speak(ecouteur)
         }
         
});
