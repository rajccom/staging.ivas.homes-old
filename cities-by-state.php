<?php
// require_once "database.php";
$conn = new mysqli("localhost:3306", "root", "", "ivas");
// $conn = new mysqli("localhost", "ivas_homes_uat", "6rl9d3zxwuqb", "ivas_homes_uat");

$states_id = $_POST["states_id"];
$result = mysqli_query($conn,"SELECT * FROM city where state_id = $states_id");
?>
<option value="">Select City</option>
<?php
while($row = mysqli_fetch_array($result)) {
?>
<option value="<?php echo $row["city_id"];?>"><?php echo $row["city_name"];?></option>
<?php
}
?>