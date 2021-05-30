/**
 * url发送请求的路径
 * fnSuccess成功的回调
 * fnFail失败的回调函数
 */
function ajax(url, fnSuccess,fnFail){
    //1、创建一个ajax
    var oAjax = null;
    if(window.XMLHttpRequest){
        oAjax = new XMLHttpRequest();//标准浏览器
    }else{
        oAjax = new ActiveXObject('Microsoft.XMLHTTP')//IE浏览器
    }
    /**
     * 2、连接服务器，打开服务器
     * 第一个参数 get或者post提交
     * 第二个参数 url去请求服务器资源路径
     * 第三个参数 同步或者异步请求，true异步请求，false同步请求
     */
    oAjax.open('GET',url,true);
    //3、发送请求
    oAjax.send();
    //4、解析相应内容
    /**
     * readyState：ajax请求的几种形式（0-4）
     * 0：未调用open方法，未连接服务器
     * 1：已经调用open方法，正在发送请求
     * 2：send方法调用完成，已接收相应数据
     * 3：正在解析相应数据
     * 4：数据解析完成，客户端可以调用
     *
     * status 前端相应状态码    200请求成功  404请求失败
     * responseText   服务器的相应数据
     * 
    */
   oAJAX.onreadystatechange=function(){
       if(oAjax.readyState==4){
           if(oAjax.status==200){
               fnSuccess(oAjax.responseText);
           }else{
               fnFail();
           }
       }
   }
}