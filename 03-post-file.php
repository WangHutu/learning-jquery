<?php
////echo "post page";
//print_r($_POST);
//echo "<br>";
//print_r($_FILES);


// 1. 获取上传文件的对应字典
$fileInfo = $_FILES["upFile"];
//print_r($fileInfo);

// 2. 获取上传文件的名称
$fileName = $fileInfo["name"];
// 2. 获取上传文件保存的临时路径
$filePath = $fileInfo["tmp_name"];

echo $fileName;
echo "<br>";
echo $filePath;

// 4. 移动文件到新的目录
move_uploaded_file($filePath,"./new-file/".$fileName);
?>