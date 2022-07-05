
var cursor=document.getElementById('circle');
var pos;document.addEventListener('mousemove',function(e){
  var x=e.clientX-780;
  var y=e.clientY+100;
  abc=setTimeout(function(){
  
  cursor.style.left=x+"px";
  cursor.style.top=y+"px";
  cursor.style.animation="1s linear"
  },300);
})


let circle = document.getElementById('circle');
const onMouseMove = (e) =>{
    var x=e.clientX;
    var y=e.clientY;
    circle.style.marginleft = x+'px';
    circle.style.margintop = y+'px';
  }
  
document.addEventListener('mousemove', onMouseMove);

var longpress;
function newp(){
     longpress=setTimeout(
         function(){
             circle.style.border.startsWith(0,360);
             window.open("HTML/projects.html",'_top');
         },1000);
}

function clear_func(){
    clearTimeout(longpress);
}



