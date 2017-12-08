<?php
$dossier = getcwd();
$dossier = str_replace("/home/u146112993/public_html/", "", $dossier); 

$file = file_get_contents("http://jeux-arena-esport.esy.es/erreur.template.html");
$file = str_replace("%dossier%", $dossier, $file);

echo $file;

?>
