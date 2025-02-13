$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var btn_open1 = $("#open1");
    var btn_open2 = $("#open2");
    var btn_open3 = $("#open3");
    var btn_open4 = $("#open4");

    envelope.click(function() {
        open();
    });

    btn_open.click(function() {
        open();
    });

    btn_open1.click(function() {
        open1Function();
    });

    btn_open2.click(function() {
        open2Function();
    });

    btn_open3.click(function() {
        open3Function();
    });

    btn_open4.click(function() {
        open4Function();
    });






    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open")
            .removeClass("close");
    }

    function open1Function() {
        window.location.href = "https://www.istockphoto.com/th/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B9%80%E0%B8%88%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A-%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%99%E0%B8%81";
    }

    function open2Function() {
        window.location.href = "https://www.youtube.com/watch?v=pk4q4-U891E&ab_channel=QLER";
    }

    function open3Function() {
        window.location.href = "https://www.youtube.com/watch?v=5JPGMJjioqs&ab_channel=WWJ";
    }

    function open4Function() {
        window.location.href = "https://www.youtube.com/watch?v=lbn60T92xUw&ab_channel=VELIKA";
    }

    function close() {
        envelope.addClass("close")
            .removeClass("open open2");
    }
});
