var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","papa.jpeg", "mumma.jpeg" , "me.jpeg"];
var names = ["Family Book","Ajoy Agarwal", "Vinita Agarwal", "Aadya Agarwal"];
var i = 0;
function update(){
  var i = 0;
  i++;
  var numbers_of_family_member_in_array = 5
  if(i > numbers_of_family_member_in_array)
      //Debug the code to store list of images in updatedImage. Use images[i]
  var updatedImage = [images];
  //Debug the code to store list of names in updatedName. Use names[i]
  var updatedName = [names] ;

  document.getElementById("family_member_image").src = updatedImage;
  document.getElementById("family_member_name").innerHTML = updatedName;
  }
  

     
          
          


      
    

