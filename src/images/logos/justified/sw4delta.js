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
    svg.appendChild(rect)

    //draw top border
    var border = document.createElementNS(svgNS,"rect");
    border.setAttributeNS(null,"x",x);
    border.setAttributeNS(null,"y",y);
    border.setAttribute("width", 400);
    border.setAttribute("height", 400);
    // rect.setAttribute("fill", circleBorder);
    border.setAttribute("stroke", circleBorder)
    border.setAttribute("stroke-width", 20)
    svg.appendChild(border);

    //draw veritcal line
    var verticalLine = document.createElementNS(svgNS,"line");
    verticalLine.setAttributeNS(null,"x1",200);
    verticalLine.setAttributeNS(null,"y1",365);
    verticalLine.setAttributeNS(null,"x2",200);
    verticalLine.setAttributeNS(null,"y2",35);
    verticalLine.setAttributeNS(null,"stroke",verticalLineColor);
    verticalLine.setAttributeNS(null,"stroke-width", 10);

    //draw horizontal line
    var horizontalLine = document.createElementNS(svgNS,"line");
    horizontalLine.setAttributeNS(null,"x1",365);
    horizontalLine.setAttributeNS(null,"y1",200);
    horizontalLine.setAttributeNS(null,"x2",35);
    horizontalLine.setAttributeNS(null,"y2",200);
    horizontalLine.setAttributeNS(null,"stroke",horizontalLineColor);
    horizontalLine.setAttributeNS(null,"stroke-width",10);


    //draw letter s
    var s = document.createElementNS(svgNS,"text");
    s.setAttribute('x', 50);
    s.setAttribute('y',170);
    s.setAttribute('fill', sColor);
    s.setAttribute('font-family','Courier New');
    s.setAttribute('font-size',200);
    s.setAttribute('font-weight', 500);
    var sText =  document.createTextNode('S');
    s.appendChild(sText);

    //draw letter w
    var w = document.createElementNS(svgNS,"text");
    w.setAttribute('x', 235);
    w.setAttribute('y',170);
    w.setAttribute('fill', wColor);
    w.setAttribute('font-family','Courier New');
    w.setAttribute('font-size',200);
    s.setAttribute('font-weight', 500);
    var wText =  document.createTextNode('W');
    w.appendChild(wText);

    //draw number 4
    var four = document.createElementNS(svgNS,"text");
    four.setAttribute('x', 50);
    four.setAttribute('y',350);
    four.setAttribute('fill', fourColor);
    four.setAttribute('font-family','Courier New');
    four.setAttribute('font-size',200);
    s.setAttribute('font-weight', 500);
    var fourText =  document.createTextNode('4');
    four.appendChild(fourText);

    //draw delta
    var delta = document.createElementNS(svgNS,"text");
    delta.setAttribute('x', 235);
    delta.setAttribute('y', 350);
    delta.setAttribute('fill', deltaColor);
    delta.setAttribute('font-family','Courier New');
    delta.setAttribute('font-size', 200);
    s.setAttribute('font-weight', 500);
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



    // svg.appendChild(circle);
    svg.appendChild(verticalLine);
    svg.appendChild(horizontalLine);
    svg.appendChild(s);
    svg.appendChild(w);
    svg.appendChild(four);
    svg.appendChild(delta);
    // svg.appendChild(sw4delta);

};