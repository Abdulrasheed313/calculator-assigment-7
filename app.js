function add(e){
  
     var addInp = document.getElementById('inp');
     addInp.value += e
}


function eqal(){
  var addInp = document.getElementById('inp');
  addInp.value = eval(addInp.value)
}
function clear(){
  var addInp = document.getElementById('inp');
  addInp.value = addInp.value.slice(0, -1);
}

function clearall(){
  var addInp = document.getElementById('inp');
  addInp.value = "";
}

 function off() {
      var addInp = document.getElementById('inp');
      var buttons = document.getElementsByTagName('button');
      
      // Check if the input field is enabled, if true, disable them all
      if (!addInp.disabled) {
        // Disable the input field
        addInp.disabled = true;
        
        // Loop through all buttons and disable them
        for (var i = 0; i < buttons.length; i++) {
          buttons[i].disabled = true;
        }
      }
      else {
        // Enable the input field
        addInp.disabled = false;
        
        // Loop through all buttons and enable them
        for (var i = 0; i < buttons.length; i++) {
          buttons[i].disabled = false;
        }
      } 
    }