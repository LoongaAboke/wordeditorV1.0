let section2;
let Open;
let section1;

section2 = document.querySelector(".section2");
Open = document.querySelector(".open");
section1 = document.querySelector(".section1");
//section2.style.left = "-300px"; 
Open.style.opacity = "20%"; 

  
	
 


Open.addEventListener("mouseover", function() {
if(true){
Open.style.opacity = "100%"; 
}else if(!true){
  setTimeout(function(){
Open.style.opacity = "20%"; 
  }, 1000); 
}
}); 




