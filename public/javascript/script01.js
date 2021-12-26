let quit_btn;
let display_count;
let Text_Area = document.querySelector("#document");


quit_btn = document.querySelector("#quite_btn"); 

quit_btn.addEventListener("click", function(){

});



function countWords() {
      requestAnimationFrame(countWords)
            // Get the input text value
            let text = Text_Area.value;
  
            // Initialize the word counter
            var numWords = 0;
  
            // Loop through the text
            // and count spaces in it 
            for (var i = 0; i < text.length; i++) {
                var currentCharacter = text[i];
  
                // Check if the character is a space
                if (currentCharacter == " ") {
                    numWords += 1;
                }
            }
  
            // Add 1 to make the count equal to
            // the number of words 
            // (count of words = count of spaces + 1)
            numWords += 1;
  
            // Display it as output

display_count = document.querySelector(".word_count").value = numWords+ " :Word Count"; 
           
        }
        countWords();


window.onmscontentzoom = () => {
  alert("zoom not support");
}