// Elemen Stasion
var TimerCondition = true;


function GetUpdate(){
    setInterval(function() {
        if(TimerCondition == false){
            console.log("mati wak");
            return;
        }
        const now = new Date();
        const day = now.getDay();
        const numDay = now.getDate();
        const month = now.getMonth()+1;
        const year = now.getFullYear();
        const hours = now.getHours();
        let   minute = now.getMinutes();

        if(minute < 10){
            minute = '0' + minute;
        }
        $(".time h2").text(hours + ":" + minute);
        $(".day-container").find("p").eq(day-1).addClass("day-active");
        console.log("berhasil " + hours + minute)
        $(".date").text(numDay + "-" + month + "-" + year )
    },1000)
}

window.onload = function(){
    GetUpdate();
}

function MusicControl() {
    if(TimerCondition == false){
        return;
    }
    var audio = $("#music-file").get(0);
    if(audio.paused){
        audio.play();
        $("#music").find("svg").eq(1).addClass("music-control-none");
        $("#music").find("svg").eq(0).removeClass("music-control-none");
    } else {
        audio.pause();
        $("#music").find("svg").eq(1).removeClass("music-control-none");
        $("#music").find("svg").eq(0).addClass("music-control-none");
    }
}

function StopTimer(){
    if(TimerCondition){
        $(".time h2").text("00" + ":" + "00");
        $(".music-title h5").text("--");
        $(".music-title p").text("Artist");
        $(".day-container").children().each(function() {
            $(this).removeClass("day-active");
        })
        $("body").css("color","#3d3d3d");
        TimerCondition = false;
        var audio = $("#music-file").get(0);
        audio.pause();
        $("#music").find("svg").eq(1).removeClass("music-control-none");
        $("#music").find("svg").eq(0).addClass("music-control-none");
    } else {
        GetUpdate();
        $("body").css("color",'');
        $(".music-title h5").text("Title Song");
        $(".music-title p").text("Artist");
        TimerCondition = true;
    }
}