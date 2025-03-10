


function add(e){
  
     var addInp = document.getElementById('inp');
     addInp.value += e
   
}


function eqal(){
  var addInp = document.getElementById('inp');
  var shows = eval(addInp.value)
  if( shows === undefined){
    alert("Error")
  }else{
    
    addInp.value = shows
  }

  
}

function clears(){
  var addInp = document.getElementById('inp');
  addInp.value =  addInp.value.slice(0 , -1) ;

}

function clearall(){
  var addInp = document.getElementById('inp');
  addInp.value = "";
}

 function off() {
      var addInp = document.getElementById('inp');
      var buttons = document.getElementsByTagName('button');
      
   
      if (!addInp.disabled) {
       
        addInp.disabled = true;
        
       
        for (var i = 0; i < buttons.length; i++) {
          buttons[i].disabled = true;
        }
      }
      else {
        
        addInp.disabled = false;
        
        
        for (var i = 0; i < buttons.length; i++) {
          buttons[i].disabled = false;
        }
      } 
    }