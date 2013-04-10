<?php 
/**
 * Comunicate with the DB
 * */

$my_row = $wpdb->get_results("SELECT * FROM donator_campaign");
/*print '<pre>';
print_r($my_row);
print '</pre>';*/
$json_campaigns = json_encode($my_row); 
echo $json_campaigns; 