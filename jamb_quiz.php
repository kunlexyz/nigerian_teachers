<?php
require('./database_con.php');

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$x = $_SERVER['REQUEST_URI'];
$xx = explode('/',$x);

if(count($xx) > 3 && $xx[3] == 'process'){
	
	// expecting
	#"jamb_quiz.php/process/"+name+"/"+ph+"/"+localStorage.g_identity,
		
		$name = test_input($xx[4]);
		$phone = test_input($xx[6]);
		$score = test_input($xx[5]);

		$sql = "INSERT INTO jamb_process (name, phone_no, score) VALUES ('$name', '$phone', '$score')";
		
	
	#$result = $conn->query($sql);
				
		if (mysqli_query($conn, $sql)) {
			#echo 'registered '.$phone.' successfully';
		
		} else {
			#echo "<div> Error: " . mysqli_error($conn).'</div>';
		} 
		
#retrieving data from database		
$content = '';
$sql2 = "SELECT * FROM jamb_process ORDER BY id DESC LIMIT 20";
$result = $conn->query($sql2);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $content .=$row["id"] .'-+-'. $row["name"] .'-+-'. $row["score"].'*_*';
    }
}
echo $content;

		exit;

}

if(count($xx) > 3 && $xx[3] == 'update'){
	
	// expecting
#"jamb_quiz.php/update/"
		
#retrieving data from database		
$content = '';
$sql2 = "SELECT * FROM jamb_process ORDER BY id DESC LIMIT 20";
$result = $conn->query($sql2);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $content .=$row["id"] .'-+-'. $row["name"] .'-+-'. $row["score"].'*_*';
    }
}
echo $content;

		exit;

}

if(count($xx) > 5 && $xx[3] == 'reg'){
	
	// expecting
	#"jamb_quiz.php/reg/"+name+"/"+ph+"/"+localStorage.g_identity/score,
		
		$name = test_input($xx[4]);
		$phone = test_input($xx[5]);
		$device_id = test_input($xx[6]);
		$score = test_input($xx[7]);
		
		$sql = "INSERT INTO jamb_quiz (name, phone_no, phone_id, score) VALUES ('$name', '$phone', '$device_id', $score)
		
		";
		mysqli_query($conn, $sql);
	
#retrieving data from database		
$content = '';
$sql2 = "SELECT * FROM jamb_quiz ORDER BY id DESC LIMIT 20";
$result = $conn->query($sql2);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $content .=$row["id"] .'-+-'. $row["name"] .'-+-'. $row["score"].'*_*';
    }
}
echo $content;

		exit;
}


if(count($xx) > 5 && $xx[3] == 'reg'){
	
	// expecting
	#"jamb_quiz.php/reg/"+name+"/"+ph+"/"+localStorage.g_identity,
		
		$name = test_input($xx[4]);
		$phone = test_input($xx[5]);
		$device_id = test_input($xx[6]);
		
		#$sql = "INSERT INTO jamb_quiz (name, phone, device) VALUES ('$name', '$phone', '$score')";
		
		
		#$sql = "INSERT INTO jamb_quiz (name, phone, device) VALUES ('$name', '$phone', '$score')";
		
		
		
	$sql = "SELECT * FROM jamb_quiz WHERE phone_id ='$device_id'";
	$result = $conn->query($sql);
				
		
		if ($result->num_rows > 0) {
			echo 'exist';
		}else{
			$sql2 = "INSERT INTO jamb_quiz (name, phone_no, phone_id) VALUES ('$name', '$phone', '$device_id')
		
		";
			if (mysqli_query($conn, $sql2)) {
				echo 'registered '.$name.' successfully';
			
			} else {
				echo "<div> Error: " . mysqli_error($conn).'</div>';
			}  
		}
		exit;

	
}

//submit voucher 
if(count($xx) > 5 && $xx[3] == 'load'){
	
	// expecting
	#"jamb_quiz.php/load/"+name+"/"+ph+"/"
		#echo 'let card up';
		$vou = test_input($xx[4]);
		$name = test_input($xx[5]);
	
		
				
		$sql2 = "INSERT INTO jamb_card (card, name) VALUES ('$vou', '$name')";
		
		if (mysqli_query($conn, $sql2)) {
			echo "card recieved successfully";
			
		} else {
			echo "Error: " . $sql2 . "<br>" . mysqli_error($conn);
		}
	
	exit;
}

//WINNING SHOT
//WINNING SHOT
if(count($xx) > 5 && $xx[3] == 'shot'){
	// expecting
	#"jamb_quiz.php/shot/"+name+"/"+ph+"/"+sco
		#echo 'let card up';
		$name = test_input($xx[4]);
		$phone = test_input($xx[5]);
		$score = test_input($xx[6]);

if($score > 1){	
	$sql = "SELECT * FROM jamb_card WHERE winner_no='' LIMIT 1";
	$result = $conn->query($sql);
	if ($result->num_rows > 0){
	
			while($row = $result->fetch_assoc()) {
				$card = $row['card'];
				$id = $row['id'];
				//echo $video_url;
			}
			
	$sql3 = "UPDATE jamb_card SET winner_no='$phone' WHERE id='$id'";
	
			#if ($conn->query($sql3) === TRUE)
			if (mysqli_query($conn, $sql3)){
				echo 'You are a winner <br> you just won N100 MTN voucher: '.$card;
echo $score;
			
			} 
		}else{
			echo 'all cards has been won';
		}
		$conn->close();
		exit;
}}
echo 'I escape the isset()';
		$conn->close();
?>