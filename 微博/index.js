$(function () {
    // 监听文本框，当内容不为空的时候，发布按钮可用
    $("body").delegate(".comment","propertychange input",function () {
        if ($(this).val().length > 0) {
            $(".send").prop("disabled",false);
        } else {
            $(".send").prop("disabled",true);
        }
    });
    // 监听发布按钮
    $(".send").click(function () {
        // 取到输入框的内容
        var $weiboText = $(".comment").val();
        // 创建一条微博
        var $weibo = createWeibo($weiboText);
        // 把微博插入
        $(".commentText").prepend($weibo);
        // 清空输入框
        $(".comment").val("");
    });
    // 赞按钮的方法
    $("body").delegate(".infoUp","click",function () {
        $(this).text(parseInt($(this).text())+1);
    });
    // 踩按钮的方法
    $("body").delegate(".infoDown","click",function () {
        $(this).text(parseInt($(this).text())+1);
    });
    // 删除按钮的方法
    $("body").delegate(".infoDel","click",function () {
        $(this).parents(".info").remove();
    });

    // 创建当前时间的方法
    function thisTime() {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth()+1;
        var timedate = date.getDate();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var time = year + "-" + month + "-" + timedate + " " + hours + ":" + minutes + ":" + seconds;
        return time;
    }
    // 创建微博的方法
    function createWeibo(weiboText) {
        var $weibo = $("<div class=\"info\">\n" +
            "                <p class=\"text1\">" + weiboText + "</p>\n" +
            "                <p class=\"text2\">\n" +
            "                    <span class=\"infoTime\">"+ thisTime() + "</span>\n" +
            "                    <span class=\"infoRight\">\n" +
            "                        <a class='infoUp' href=\"javascript:;\">0</a>\n" +
            "                        <a class='infoDown' href=\"javascript:;\">0</a>\n" +
            "                        <a class='infoDel' href=\"javascript:;\">删除</a>\n" +
            "                    </span>\n" +
            "                </p>\n" +
            "            </div>")
        return $weibo;
    };
});
