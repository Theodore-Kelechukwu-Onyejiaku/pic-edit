var saveButton = document.getElementById("save");
var myPicture = document.getElementById("myImage").src;

console.log(myPicture)

saveButton.addEventListener("click", save)



//Save function 
function save(){
    printJS(myPicture, 'image')
}


