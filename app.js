function clock(){
    //Parametreler
    var now = new Date(); 
    var getHours= now.getHours();
    var Minutes = now.getMinutes();
    var Seconds = now.getSeconds();
    var timePeriod = now.getHours();

    var Hours = ((getHours<10) ? '0' : '')+getHours + ':' + ((Minutes<10) ? '0' : '') + Minutes + ':' + ((Seconds<10) ? '0' : '') + Seconds
    var clock = document.getElementById("demo").innerHTML=""+Hours
    setTimeout("clock()",1000);
}