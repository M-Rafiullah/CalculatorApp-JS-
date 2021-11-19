function mybtn(sum){
    var reslut = document.getElementById("result");
    reslut.value += sum;
}
function clearbtn(){
    var result = document.getElementById("result");
    result.value = "";

}
function equlbtn(){
    var result = document.getElementById("result");
    result.value = eval(result.value);
}
function acbtn(){
    var result = document.getElementById("result");
    result.value = result.value.slice(0,-1)
}