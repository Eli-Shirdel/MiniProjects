var $ = document;
var myNum = $.getElementById("number")
var number = parseInt(myNum.innerHTML);
var bg = $.getElementById("backGround")
function increaseFunc(){
    number = number + 1 ;
    myNum.innerHTML = number;
    if(number == 1){
        bg.style.backgroundColor = "rgb(0, 170, 179)"
    }
}
function decreaseFunc(){
    number = number - 1 ;
    myNum.innerHTML = number
    if(number==0){
        bg.style.backgroundColor = "maroon "
    }
}
