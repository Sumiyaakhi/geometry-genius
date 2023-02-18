function getInputFieldValueById (inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue = inputField.value;
    // const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value ="";
    return inputFieldValue;

}
function setAreaInAreaField(areaId , areaValue){
    const areaElement = document.getElementById(areaId);
    areaElement.innerText = areaValue;
}