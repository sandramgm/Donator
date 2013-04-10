<?php 
/**
 * Comunicate with the DB
 * */

$campaigns = $wpdb->get_results("SELECT * FROM donator_campaign WHERE status = 1");
$donator_page = $_SERVER["REQUEST_URI"];
$json_campaigns = json_encode($campaigns); 

echo "MY ACTIVE CAMPAIGNS: " . $json_campaigns; 
/*
$array = array();
for ($i = 0; $i < )*/


$variablephp = "contenido de la variable php";
?>

<script>
var jsonDonatorCampaigns2 = "<?= $campaigns ?>";

var variablejs = "<?php echo $variablephp; ?>" ;
alert("VariableJS = " + variablejs);
</script>