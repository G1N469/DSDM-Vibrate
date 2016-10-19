document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
            $("#vibra1").click(function () {
                navigator.vibrate([1000]);
            });

            $("#vibra2").click(function () {
                navigator.vibrate([2000]);
            });

            $("#vibra3").click(function () {
                navigator.vibrate([3000]);
            });
            
            $("#vibra4").click(function () {
                navigator.vibrate([4000]);
            });
            
            $("#vibra5").click(function () {
                navigator.vibrate([5000]);
            });

            $("#pattern").click(function(){
                navigator.vibrate([1000, 1000, 2000, 1000, 3000]);
            });

            $("#cancela").click(function(){
                navigator.vibrate([]);
            })
}


