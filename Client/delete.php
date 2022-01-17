<?php
include "database.php";
if(isset($_GET['deleteid'])){

    $id=$_GET['deleteid'];

    $sql= "delete from `clients` where id=$id";
	$result=mysqli_query($conn,$sql);

	if($result){
        // echo 'Deleted Successfully';
        header('location:client.php');
    } else{
	die(mysqli_error($conn));
}
}
?>