<?php
// 执行结果中有中文, 必须在php文件顶部设置
//header("content-type:text/html; charset=utf-8");
// 如果PHP中需要返回XML数据, 也必须在PHP文件顶部设置
header("content-type:text/xml; charset=utf-8");

// 把文件“07-ajax-xml.xml”中的数据返回给前端
echo file_get_contents("07-ajax-xml.xml");