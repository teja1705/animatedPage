var t=10
var l=380
move();
function move(){
    var st=document.getElementById('snowtop')
    var sr=document.getElementById('snowright')
    t=t+1;
    l=l-1;
    st.style.top = t + 'px';
    sr.style.left = l + 'px';
    // console.log(window.screen.height);
    if(t==150){
        clearInterval(id);
    }

}

var id = setInterval(move,8)