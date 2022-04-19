//English name: Evan Pingyin name: Xinkai Shen this is This is used for simple mathematical calculations//
function addNum(){
    var a=document.getElementById("num1").value;
    var b=document.getElementById("num2").value;
    var c=a*1+b*1;
    var reg=/\d/i;
    if(reg.test(a)&&reg.test(b)){
     alert(c)
    }else{
    alert("please write number")
    }
    
     }

