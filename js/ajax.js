var realTime = 0;
var oldData;
setInterval(function () {
    realTime++;
    // console.log(realTime);
    if ((realTime % 5 == 0) && (realTime > 0)) {
        if (Co.accessToken !== undefined) {
            $.ajax({
                type: "GET",
                url: `https://graph.facebook.com/me/apprequests?access_token=${Co.accessToken}`,
                success: function (data) {
                    if(oldData !== data.data[0].data){
                        oldData = data.data[0].data;
                        console.log(JSON.parse(oldData));
                    }
                },
                // dataType: "jsonp"
            });
        }
        // $.ajax({
        //     type: "GET",
        //     url: "https://graph.facebook.com/",
        //     success: function (data) {
        //         // console.log(data.data[0].data);
        //     }
        //     //    dataType: "jsonp"
        // });
    };
}, 1000);
