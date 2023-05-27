function test() {
    var date = new Date();  //新建时间对象
    var nian = date.getFullYear(); //获取年
    var yue = date.getMonth() + 1;  //获取月
    var ri = date.getDate();  //获取日
    var xq = date.getDay();   //获取星期 
    var xs = date.getHours();  //获取小时
    var fz = date.getMinutes();  //获取分钟
    var m = date.getSeconds(); // 获取秒
    var sd;
    var weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    //判断上下午
    if (xs >= 12) {
        sd = "下午";
    } else if (xs < 12) {
        sd = "上午";
    }
    //12小时制
    if (xs > 12) {
        xs = xs - 12;
    }
    //补0
    if (xs < 10) {
        xs = "0" + xs;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (fz < 10) {
        fz = "0" + fz;
    }
    //页面输出
    _wrapper.innerHTML = `${nian}年${yue}月${ri}日&ensp;${weekday[xq]}&ensp;${xs}:${fz}:${m}&ensp;${sd}`;
}
setInterval("test()", 1000); //定时器