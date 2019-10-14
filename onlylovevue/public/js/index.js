// 导航栏
window.onload = function () {
    var oNav_message
    var aNav_message
    var oDiv_Nav_message
    $(document).ready(function () {
        $('#nav_3').on('mouseover', function () {
            $('#drop-nav').css('display', 'block')
            $('#inversion').addClass('fa fa-chevron-down')
        })
        $('#nav_3').on('mouseout', function () {
            $('#inversion').removeClass()
            $('#drop-nav').css('display', 'none')
            // $('#drop-nav li a').css('background-color', 'rgba(255, 255, 255, 0.8)')
            $('#inversion').addClass('fa fa-chevron-up')
        })
        $('#mymenu li').on('click', function () {
            $('#mymenu li').removeClass()
            $(this).addClass('nav-active')
        })

        oNav_message = document.getElementById('nav_message')
        aNav_message = oNav_message.getElementsByTagName('li')
        // console.log(aNav_message.length)
        var timer = null
        var index = 0
        if (timer == null) {
            timer = setInterval(function () {
                for (var i = 0; i < aNav_message.length; i++) {
                    aNav_message[i].style.display = 'none'
                }
                aNav_message[index++].style.display = 'block'
                if (index == aNav_message.length) {
                    index = 0
                }
            }, 2000)
        }



        setInterval(function () {
            changeBg()
        }, 10000);

    })
    var bgIndex = 0;

    function changeBg() {
        var bgImgs = ['bg0.jpg', 'bg1.jpg', 'bg2.jpg', 'bg2.jpg']
        for (var i = 0; i < bgImgs.length; i++) {
            $('#bgImg')
        }
        $(this).css('background-image', 'url(./imgs/' + bgImgs[bgIndex] + ')');

    }
    // 侧边栏

    $(function () {
        $(".pop").click(function () {
            $(".popRank").show()
            $(".loveRank").hide()
            $(".pop").css("background-color", "#e27c31")
            $(".pop").removeClass("sanjiao").addClass("pop-sanjiao")
            $(".love").removeClass("love-sanjiao").addClass("sanjiao")
            $(".love").css("background-color", "rgba(255,255,255,0.4)")
        })
        $(".love").click(function () {
            $(".popRank").hide()
            $(".loveRank").show()
            $(".love").css("background-color", "#e27c31")
            $(".love").removeClass("sanjiao").addClass("love-sanjiao")
            $(".pop").removeClass("pop-sanjiao").addClass("sanjiao")
            $(".pop").css("background-color", "rgba(255,255,255,0.4)")
        })
    })
    $(function () {
        $('.rankHot').click(function () {
            $('.hotRank1').show()
            $('.beautRank1').hide()
            $('.loveRank1').hide()
            $('.rankHot').css('background-color', '#e27c31')
            $('.rankBeaut').css('background-color', 'rgba(255,255,255,0.4)')
            $('.rankLove').css('background-color', 'rgba(255,255,255,0.4)')
        })
        $('.rankBeaut').click(function () {
            $('.beautRank1').show()
            $('.hotRank1').hide()
            $('.loveRank1').hide()
            $('.rankBeaut').css('background-color', '#e27c31')
            $('.rankHot').css('background-color', 'rgba(255,255,255,0.4)')
            $('.rankLove').css('background-color', 'rgba(255,255,255,0.4)')
        })
        $('.rankLove').click(function () {
            $('.loveRank1').show()
            $('.beautRank1').hide()
            $('.hotRank1').hide()
            $('.rankLove').css('background-color', '#e27c31')
            $('.rankHot').css('background-color', 'rgba(255,255,255,0.4)')
            $('.rankBeaut').css('background-color', 'rgba(255,255,255,0.4)')
        })
    })

    $(document).ready(function () {
        $(".gotop").hide();
        $(function () {
            var height = $(window).height();
            $(window).scroll(function () {
                if ($(window).scrollTop() > height) {
                    $(".gotop").fadeIn(1000);
                } else {
                    $(".gotop").fadeOut(1000);
                }
            });
        });
    });

    // 尾栏
    $(function () {
        var x = 10;
        var y = 20;
        var newtitle = '';
        $('.footer-mytooltip').mouseover(function (e) {
            newtitle = this.title;
            this.title = '';
            $('body').append('<div id="footer-mytitle">' + newtitle + '</div>');
            $('#footer-mytitle').css({ 'left': (e.pageX + x + 'px'), 'top': (e.pageY + y - 80 + 'px') }).show();
        }).mouseout(function () {
            this.title = newtitle;
            $('#footer-mytitle').remove();
        }).mousemove(function (e) { $('#footer-mytitle').css({ 'left': (e.pageX + x + 10 + 'px'), 'top': (e.pageY + y - 60 + 'px') }).show(); })
    });
}