// This function get the value of input field
function getInputFieldValueById (inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue = inputField.value;
    inputField.value ="";
    return inputFieldValue;
   
}
// This function set the value of area in area calculation field
function setAreaInAreaField(areaId , areaValue){
    const areaElement = document.getElementById(areaId);
    areaElement.innerText = areaValue;
}
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 
  
  