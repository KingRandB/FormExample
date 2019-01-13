

function uploadimg(){

  var a=document.querySelector('input[type=file]')
  var b= document.querySelector('img');

  var reader= new FileReader();
  
  if (a) {
    reader.readAsDataURL(a.files[0]);
    }

  reader.addEventListener("load",function(){
   
     b.src = reader.result;
    
    },false);

    
    
 
}
