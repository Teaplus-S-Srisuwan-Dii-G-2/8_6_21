/*document.getElementById('ok').addEventListener('click',function(e){
    
    alert("OK");
    console.log(e)
})
document.getElementById("cancel").addEventListener( 'mousemove',function(e) {
    var x = e.clientX;
    var y = e.clientY;
    var coor = "(X : " + x + ", Y : " + y + ")";
    if(e.shiftKey)
    console.log(coor)
  })
document.getElementById('cancel').addEventListener('click',function(e){
    alert("Cancel");
    console.log(e)
})
document.getElementById('no').addEventListener('click',function(e){
    alert("No");
    console.log(e)
})
document.getElementById('ok').addEventListener('click',function (e){

    let noElement =document.getElementById('no')
    if (noElement.classList.contains('toggleOn')){
        noElement.classList.replace('toggleOn','toggleOff')
    }else if(noElement.classList.contains('toggleOff')){
        noElement.classList.replace('toggleOff','toggleOn')
    }else{
        noElement.classList.add('toggleOn')
    }

})
var borderTick = 20
document.getElementById('cancel').style.border = `${borderTick}px solid white`

var cancelElement=document.getElementById('cancel')
cancelElement.addEventListener('mouseover',function (e){
    cancelElement.innerHTML=`
    <div class="container-col">
        <div class="flex-item">
            no1
        </div>
        <div class="flex-item">
            no2
        </div>
    </div>`
})
cancelElement.addEventListener('mouseleave',function (e){
    cancelElement.innerHTML=`cancel`
})*/

var margin=20;
document.getElementById('ok').addEventListener('click',function (e){
    margin=margin+25;
    document.getElementById('ok').style.marginLeft =`${margin}px`
    document.getElementById('ok').style.marginRight =`${margin}px`
    document.getElementById('no').style.marginLeft =`${margin}px`
    document.getElementById('no').style.marginRight =`${margin}px`
})

var W_1="วิชานี้";
var W_2="ง่าย";
var W_3="จริงๆนะ";

var count=0;

document.getElementById('no').addEventListener('dblclick',function (e){
    count++;
    if(count==1){
        document.getElementById("ok").innerHTML=`${W_1}`
    }else if(count==2){
        document.getElementById("ok").innerHTML=`${W_2}`
    }else{
        document.getElementById("ok").innerHTML=`${W_3}`
        count=0;
    }
})

