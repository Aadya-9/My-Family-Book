var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","Papa.jpeg", "mumma.jpeg" , "me.jpeg"];
var names = ["Family Book","Ajoy Agarwal", "Vinita Agarwal", "Aadya Agarwal"];
var i = 0;
function next_image(){
  
 i++
 var number_of_family_member = 4
 if(i > number_of_family_member)
 {i= 0}
      //Debug the code to store list of images in updatedImage. Use images[i]
  var updatedImage = images[i];
  //Debug the code to store list of names in updatedName. Use names[i]
  var updatedName = names[i] ;

  document.getElementById("family_member_image").src = updatedImage;
  document.getElementById("family_member_name").innerHTML = updatedName;
  }
  

     
          
          


      
    

