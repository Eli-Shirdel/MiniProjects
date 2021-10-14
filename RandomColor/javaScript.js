var $ = document;


var bg = $.getElementById("backGround");
var button = $.getElementById("colorButton");


var bgColors = ["orange" , "rebeccapurple" , "teal" , "tomato" , "yellowgreen" , "olive" , "orchid" , "palegreen" , "purple" , "steelblue" , "darkcyan" , "darkmagenta" ,
                "darkgoldenrod" , "deepskyblue" , "mediumspringgreen" , "midnightblue" , "mediumvioletred" , "mediumslateblue" , "maroon" , "navy" , "bisque" ,
                "forestgreen" , "gold" , "hotpink" ,"firebrick"  , "lawngreen" , "crimson" ,"chocolate" , "blueviolet" , "cyan", "lime" , "coral" , "khaki" ,
                "darkolivegreen" , "#5a3b00"]
      


function changeColorFunc(){
    var number = Math.floor(Math.random()*35)
    
    bg.style.backgroundColor = bgColors[number]
 }
