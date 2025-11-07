const input=document.getElementById("input");
const tofahrenheit=document.getElementById("tofahrenheit")
const tocelsius=document.getElementById("tocelsius")
const result=document.getElementById("result")

function convert(){
    temp=input.value;
    temp=Number(temp);
    if(tofahrenheit.checked){
      temp=temp* ( 9 / 5 ) + 32;
      result.textContent=temp +'°F'
    }
    else if(tocelsius.checked){
        temp=(temp -32) * 5 / 9;
        temp=Math.round(temp);
       result.textContent=temp +'°C'
    }
}
