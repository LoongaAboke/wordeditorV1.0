//Creating variables
let Text_Document;
let Loading;
let More; 
let Download_button;
let Save_button;
let DOC_NAME; 
let FontColor;
let FontSize; 
let Cloud_search_bar; 
let Cloud_font_picker;
let Cloud_upload_file;
let LoaderHolder; 


//defining variables
Download_button = document.querySelector(".download_btn"); 
Save_button = document.getElementById("save");
More = document.querySelector(".more_btn");
Text_Document = document.querySelector("#document");
Loading = document.querySelector(".loading_holder").style;
DOC_NAME = document.querySelector("#DOC_NAME"); 
FontColor = document.querySelector(".fontColor");
FontSize = document.querySelector(".fontSize");
 Cloud_font_picker = document.querySelector(".FontStyle_holder"); 
Cloud_search_bar = document.querySelector(".search"); 
Cloud_upload_file = document.querySelector(".Upload"); 
LoaderHolder = document.querySelector(".loading_holder");
//Cloud_search_bar.value = "hello"; 
Cloud_font_picker.value = "Arial"; 

//all event EventListiners
Save_button.onclick = () => {};
Download_button.onclick = () => {	
	if(DOC_NAME.value === "" || DOC_NAME.value === undefined){
    alert("WARNING: Your document needs a title!");
	}else{
	console.log("save")
console.log("download");
saveTextAsFile(localStorage.getItem("document"),DOC_NAME.value+ "."+More.value);}
};



//loading Text_Document animation 
Loading.display = "block"; 
window.onload = () =>{
  Loading.display = "none"; 
  return true;
};






//auto save mechanics
 function draw(){
  





//font negative number ban 
if(FontSize.value < 0){
  FontSize.value = 0; 
} else if(FontSize.value > 200){
  FontSize.value = 200;
}

   if(keyIsPressed){
      localStorage.setItem("document",Text_Document.value);
      localStorage.setItem("DOC_NAME",DOC_NAME.value);
   }else{
     localStorage.setItem("document",Text_Document.value);
     localStorage.setItem("DOC_NAME",DOC_NAME.value);
     localStorage.setItem("Plate", FontColor.value);
     
   }
   if(mouseIsPressed){
     localStorage.setItem("document",Text_Document.value);
     localStorage.setItem("DOC_NAME",DOC_NAME.value);
   
   }


  //this is the font functionality
  if(Cloud_font_picker.value.onchange = true){
    localStorage.setItem("font",Cloud_font_picker.value);
  
  Text_Document.style.fontFamily = localStorage.getItem("font"); 
  }
   
 //fontColor background
   
 localStorage.setItem("fontSize", FontSize.value); 
 Text_Document.style.fontSize =  localStorage.getItem("fontSize") +"pt";
FontColor.style.background = localStorage.getItem("Plate");
Text_Document.style.color = localStorage.getItem("Plate"); 
}




 //importing saved text data back to the Text_Document
Text_Document.value = localStorage.getItem("document");
DOC_NAME.value = localStorage.getItem("DOC_NAME"); 
FontSize.value = localStorage.getItem("fontSize");
Text_Document.style.fontSize =  localStorage.getItem("fontSize") +"pt";

FontColor.style.background = localStorage.getItem("Plate"); 
 Text_Document.style.color = localStorage.getItem("plate");
localStorage.getItem("Plate", FontColor.value);
FontColor.value = localStorage.getItem("Plate");
Text_Document.style.color = localStorage.getItem("Plate");

//font saving mechanics
console.log(localStorage.getItem("font"));
Cloud_font_picker.value = localStorage.getItem("font");

Text_Document.style.fontFamily = localStorage.getItem("font"); 







//downloading Text_Document as in a txt file
function saveTextAsFile(textToWrite, fileNameToSaveAs)
    {
    	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'}); 
    	var downloadLink = document.createElement("a");
    	downloadLink.download = fileNameToSaveAs;
    	downloadLink.innerHTML = "Download File";
    	if (window.webkitURL !== null)
    	{
    		// Chrome allows the link to be clicked
    		// without actually adding it to the DOM.
    		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    	}
    	else
    	{
    		// Firefox requires the link to be added to the DOM
    		// before it can be clicked.
    		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    		downloadLink.onclick = destroyClickedElement;
    		downloadLink.style.display = "none";
    		document.body.appendChild(downloadLink);
    	}
    
    	downloadLink.click();
    }


    //reading uploaded files
            Cloud_upload_file.addEventListener('change', function() {
              
            var fr=new FileReader();
            fr.onload=function(){
               
              Text_Document.value=fr.result;
              //DOC_NAME.value = Cloud_upload_file.value;
              
            }
              
            fr.readAsText(this.files[0]);
        });
        




//Make the DIV element draggagle:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

	LoaderHolder.style.display = "none";




