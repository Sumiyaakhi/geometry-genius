// function for 
document.getElementById('triangle-calc').addEventListener('click', function () {
    const getValueOne = getInputFieldValueById('triangle-b');
    const getValueTwo = getInputFieldValueById('triangle-h');
    if(getValueOne,getValueTwo < 0){
        alert("Please give me a positive number!!");
        return;
    }
    const areaOfTriangle = 0.5 * getValueOne * getValueTwo;
    const areaTriangle = areaOfTriangle.toFixed(2);
    setAreaInAreaField('area-output1', areaTriangle);
});
document.getElementById('rectangle-calc').addEventListener('click', function () {
    const getValueOne = getInputFieldValueById('rectangle-w');
    const getValueTwo = getInputFieldValueById('rectangle-l');
    const areaOfRectangle = getValueOne * getValueTwo;
    const areaRectangle = areaOfRectangle.toFixed(2);
    setAreaInAreaField('area-output2', areaRectangle);
});
document.getElementById('parallelogram-calc').addEventListener('click', function () {
    const getValueOne = getInputFieldValueById('parallelogram-b');
    const getValueTwo = getInputFieldValueById('parallelogram-h');
    const areaOfParallelogram = getValueOne * getValueTwo;
    const areaParallelogram = areaOfParallelogram.toFixed(2);
    setAreaInAreaField('area-output3', areaParallelogram);
});
document.getElementById('rhombus-calc').addEventListener('click', function () {
    const getValueOne = getInputFieldValueById('rhombus-d1');
    const getValueTwo = getInputFieldValueById('rhombus-d2');
    const areaOfRhombus = 0.5 * getValueOne * getValueTwo;
    const areaRhombus = areaOfRhombus.toFixed(2);
    setAreaInAreaField('area-output4', areaRhombus);
});
document.getElementById('pentagon-calc').addEventListener('click', function () {
    const getValueOne = getInputFieldValueById('pentagon-p');
    const getValueTwo = getInputFieldValueById('pentagon-b');
    const areaOfPentagon = 0.5 * getValueOne * getValueTwo;
    const areaPentagon = areaOfPentagon.toFixed(2);
    setAreaInAreaField('area-output5', areaPentagon);
});
document.getElementById('ellipse-calc').addEventListener('click', function () {
    const getValueOne = getInputFieldValueById('ellipse-b');
    const getValueTwo = getInputFieldValueById('ellipse-h');
    const areaOfEllipse = 3.1416 * getValueOne * getValueTwo;
    const areaEllipse = areaOfEllipse.toFixed(2);
    setAreaInAreaField('area-output6', areaEllipse);
});

document.getElementById('card1').addEventListener("mouseover", function(){
    document.getElementById('card1').style.backgroundColor = randomColor();
  });
  document.getElementById('card1').addEventListener('mouseleave',function(){
    document.getElementById('card1').style.backgroundColor = "white";
  })
  document.getElementById('card2').addEventListener("mouseover", function(){
    document.getElementById('card2').style.backgroundColor = randomColor();
  });
  document.getElementById('card2').addEventListener('mouseleave',function(){
    document.getElementById('card2').style.backgroundColor = "white";
  })
  document.getElementById('card3').addEventListener("mouseover", function(){
    document.getElementById('card3').style.backgroundColor = randomColor();
  });
  document.getElementById('card3').addEventListener('mouseleave',function(){
    document.getElementById('card3').style.backgroundColor = "white";
  })
  document.getElementById('card4').addEventListener("mouseover", function(){
    document.getElementById('card4').style.backgroundColor = randomColor();
  });
  document.getElementById('card4').addEventListener('mouseleave',function(){
    document.getElementById('card4').style.backgroundColor = "white";
  })
  document.getElementById('card5').addEventListener("mouseover", function(){
    document.getElementById('card5').style.backgroundColor = randomColor();
  });
  document.getElementById('card5').addEventListener('mouseleave',function(){
    document.getElementById('card5').style.backgroundColor = "white";
  })
  document.getElementById('card6').addEventListener("mouseover", function(){
    document.getElementById('card6').style.backgroundColor = randomColor();
  });
  document.getElementById('card6').addEventListener('mouseleave',function(){
    document.getElementById('card6').style.backgroundColor = "white";
  })
  