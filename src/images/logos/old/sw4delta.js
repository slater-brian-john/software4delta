/*

*/

var drawLogo= function(svgId, x, y, backgroundColor, circleFill, circleBorder, verticalLineColor, horizontalLineColor, sColor, wColor, fourColor, deltaColor, sw4deltaColor){

    var svg = document.getElementById(svgId);
    //append base svg
    var svgNS = "http://www.w3.org/2000/svg";
    //draw base rectangle
    var rect = document.createElementNS(svgNS,"rect");
    rect.setAttributeNS(null,"x",x);
    rect.setAttributeNS(null,"y",y);
    rect.setAttribute("width", 400);
    rect.setAttribute("height", 400);
    rect.setAttribute("fill", backgroundColor);

    //draw base circle
    var circle = document.createElementNS(svgNS,"circle");
    circle.setAttributeNS(null,"id","mycircle");
    circle.setAttributeNS(null,"cx", 200);
    circle.setAttributeNS(null,"cy", 200);
    circle.setAttributeNS(null,"r", 150);
    circle.setAttributeNS(null,"fill", circleFill);
    circle.setAttributeNS(null,"stroke",circleBorder);
    circle.setAttributeNS(null,"stroke-width",6);

    //draw veritcal line
    var verticalLine = document.createElementNS(svgNS,"line");
    verticalLine.setAttributeNS(null,"x1",200);
    verticalLine.setAttributeNS(null,"y1",320);
    verticalLine.setAttributeNS(null,"x2",200);
    verticalLine.setAttributeNS(null,"y2",80);
    verticalLine.setAttributeNS(null,"stroke",verticalLineColor);
    verticalLine.setAttributeNS(null,"stroke-width",6);

    //draw horizontal line
    var horizontalLine = document.createElementNS(svgNS,"line");
    horizontalLine.setAttributeNS(null,"x1",300);
    horizontalLine.setAttributeNS(null,"y1",200);
    horizontalLine.setAttributeNS(null,"x2",80);
    horizontalLine.setAttributeNS(null,"y2",200);
    horizontalLine.setAttributeNS(null,"stroke",horizontalLineColor);
    horizontalLine.setAttributeNS(null,"stroke-width",6);


    //draw letter s
    var s = document.createElementNS(svgNS,"text");
    s.setAttribute('x', 100);
    s.setAttribute('y',170);
    s.setAttribute('fill', sColor);
    s.setAttribute('font-family','Courier New');
    s.setAttribute('font-size',150);
    var sText =  document.createTextNode('s');
    s.appendChild(sText);

    //draw letter w
    var w = document.createElementNS(svgNS,"text");
    w.setAttribute('x', 210);
    w.setAttribute('y',170);
    w.setAttribute('fill', wColor);
    w.setAttribute('font-family','Courier New');
    w.setAttribute('font-size',150);
    var wText =  document.createTextNode('w');
    w.appendChild(wText);

    //draw number 4
    var four = document.createElementNS(svgNS,"text");
    four.setAttribute('x', 100);
    four.setAttribute('y',310);
    four.setAttribute('fill', fourColor);
    four.setAttribute('font-family','Courier New');
    four.setAttribute('font-size',150);
    var fourText =  document.createTextNode('4');
    four.appendChild(fourText);

    //draw delta
    var delta = document.createElementNS(svgNS,"text");
    delta.setAttribute('x', 210);
    delta.setAttribute('y',310);
    delta.setAttribute('fill', deltaColor);
    delta.setAttribute('font-family','Courier New');
    delta.setAttribute('font-size',150);
    var deltaText =  document.createTextNode(String.fromCharCode(916));
    delta.appendChild(deltaText);

    //draw nsw4delta text
    var sw4delta = document.createElementNS(svgNS,"text");
    sw4delta.setAttribute('x', 50);
    sw4delta.setAttribute('y',380);
    sw4delta.setAttribute('fill', sw4deltaColor);
    sw4delta.setAttribute('font-family','Courier New');
    sw4delta.setAttribute('font-size',26.319);
    sw4delta.setAttribute('font-weight','bold');
    var sw4deltaText =  document.createTextNode('software||4||change');
    sw4delta.appendChild(sw4deltaText);



    svg.appendChild(rect);
    svg.appendChild(circle);
    svg.appendChild(verticalLine);
    svg.appendChild(horizontalLine);
    svg.appendChild(s);
    svg.appendChild(w);
    svg.appendChild(four);
    svg.appendChild(delta);
    // svg.appendChild(sw4delta);

};