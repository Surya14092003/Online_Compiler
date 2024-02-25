<?php
$language = strtolower($_POST['language']);
$code = $_POST['code'];
$random = substr(md5(mt_rand()), offset: 0, length: 7);
$filePath = "temp/" . $random . "." . $language;
$programFile = fopen($filePath, mode: "w");
fwrite($programFile, $code);
fclose($programFile);


if ($language == "php") {
    $phpExecutable = "C:\\xampp\\php\\php.exe";
    $output = shell_exec("$phpExecutable \"$filePath\" 2>&1");
    echo $output;
} elseif ($language == "node") {
    rename($filePath, "$filePath.js");
    $output = shell_exec("node \"$filePath.js\" 2>&1");
    echo $output;
}
