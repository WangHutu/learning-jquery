function obj2str(data){
    data = data || {};
    data.t = new Date().getTime();
    var res =[];
    for(var key in data){
        // 在URI中不可以出现中文，所以用encodeERIComponent方法转换
        res.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
    }
    return res.join("&");
}

function ajax(option){
    // 参数改成一个对象，这样的话，直接去对象里面取，就没有顺序限制
    // option = {
    //     type:"",
    //     url:"",
    //     data:"{
    //     }",
    //     timeout:"",
    //     success:function(){
    //     },
    //     error:function () {
    //     }
    // }
    var str = obj2str(option.data);
    var xmlhttp,timer;
    if (window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (option.type.toLowerCase() === "get"){
        xmlhttp.open(option.type,option.url+"?"+ str,true);
        xmlhttp.send();
    } else {
        xmlhttp.open(option.type,option.url,true);
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlhttp.send(str);
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 ) {
            clearInterval(timer);
            if (xmlhttp.status >= 200 && xmlhttp.status < 300 || xmlhttp.status === 304){
                option.success(xmlhttp);
            }else {
                option.error(xmlhttp);
            }
        }
    }
    if(option.timeout){
        timer = setInterval(function(){
            console.log("中断请求");
            xmlhttp.abort();   // 中断请求
            clearInterval(timer);
        },option.timeout)
    }
}