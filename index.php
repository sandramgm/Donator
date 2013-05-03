<?php 
require_once 'donator/model/global_var.php';

require "donator/model/db_connection.php";

require "donator/model/register.php";

$page = "content_construction.php";
require "donator/view/templates/main.php";

require "donator/model/db_connection_close.php";