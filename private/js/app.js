function dateToString(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    date = year + '-' + month + '-' + day
    return date;
}

function slide(href, direction) {
    if(!direction) direction = 'left';
    window.plugins.nativepagetransitions.slide({
        "direction" : direction,
        "href" : href,
        "androiddelay": 0
    });
}

var options = {
    "duration"       :  1000, // in milliseconds (ms), default 400
    "slowdownfactor" :    1, // overlap views (higher number is more) or no overlap (1), default 3
    "iosdelay"       :  0, // ms to wait for the iOS webview to update before animation kicks in, default 50
    "androiddelay"   :  0  // same as above but for Android, default 50
};

window.plugins.nativepagetransitions.slide(
    options,
    function (msg) {console.log("success: " + msg)}, // called when the animation has finished
    function (msg) {alert("error: " + msg)} // called in case you pass in weird values
);

// wait for deviceready..
document.addEventListener("deviceready", function() {
    // then override any default you want
    window.plugins.nativepagetransitions.globalOptions.duration = 700;
    window.plugins.nativepagetransitions.globalOptions.iosdelay = 100;
    window.plugins.nativepagetransitions.globalOptions.androiddelay = 150;
    window.plugins.nativepagetransitions.globalOptions.winphonedelay = 175;
    window.plugins.nativepagetransitions.globalOptions.slowdownfactor = 8;
    // these are used for slide left/right only currently
    window.plugins.nativepagetransitions.globalOptions.fixedPixelsTop = 64;
    window.plugins.nativepagetransitions.globalOptions.fixedPixelsBottom = 48;
}, false);