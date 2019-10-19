$(document).ready(function(){
    function returnResult() {
        $.post('/validInvoice', {}, function (result) {
            console.log('ok!')
            console.log(result)
        })
    }
    returnResult()
    $('#createInvoiceButton').on("click", function () {
    
        displayMessageBar(false);
    
        if ($('#invoiceAmount').val() == "") {
            displayMessage("请填写测试金额.");
            return;
        }
        $('#createInvoiceLoading').css("display", "");
    
    
        /* 请求创建订单 建议加上验证码 */
        $.post('/createInvoice', {
            amount: $('#invoiceAmount').val()
        }, function (result) {
    
            $('#createInvoiceLoading').css("display", "none");
    
            if (result.status == false) {
                displayMessage(result.message);
                return;
            }
    
            /* 将输入金额框隐藏 来显示二维码 */
            $("div.ui.action.input").css("display", "none");

            $("img.qrcode").attr("src", "/createQRCode?text=" +
                encodeURIComponent(result.message.qrCode) + "&_=" + new Date().getTime());
            $("img.qrcode").css("display", "");
    
    
            /* 开始轮询订单是否成功支付 实际使用中建议使用WebSocket */
            var intervalId = setInterval(function () {
                checkInvoiceStatus(result.message.noInvoice, intervalId);
            }.bind(this), 2000)
    
    
        });
    });
    
    var checking = false;
    function checkInvoiceStatus(noInvoice, intervalId) {
        if (checking) {
            return;
        }
        checking = true;
        $.post('/checkInvoice', { noInvoice: noInvoice }, function (result) {
            if (result.status === true && result.message === true) {
                displayMessageBar(true, "您成功支付了订单!")
                $("div.ui.action.input").css("display", "");
                $("img.qrcode").css("display", "none");
                $('#invoiceAmount').val("");
                clearInterval(intervalId);
            }
    
            checking = false;
        });
    }
    
    function displayMessageBar(display, message) {
        if (message != undefined) {
            $('div.ui.green.message > p').html(message);
        }
        $('div.ui.green.message').css("display", display ? "" : "none")
    }
    
    function displayMessage(message) {
        $('div.top-message > div > span').html(message);
        $('div.top-message').addClass("top-message-display");
        setTimeout(function () {
            $('div.top-message').removeClass("top-message-display");
        }, 1800);
    }
})

