<?php
$emailTo = "osamathadon@gmail.com";
$emailFrom = $_POST['emailFrom'];
$emailSubject = $_POST['subject'];
$emailMsg = $_POST['msg'];

$error = "";
$missing = "";
$emailSuccess = "";
$emailFail = "";

  if ($_POST) {
    
    if (filter_var($emailFrom, FILTER_VALIDATE_EMAIL) === false) {
     $error .= "<p>".$emailFrom." is considered Invalid.</p>"; 
    }


    if (!$emailSubject) {
      $missing .=  "<p>Subject is empty</p>";
    }
    if (!$emailMsg) {
      $missing .=  "<p>Message is empty<p/>";
    }
    if (!$emailFrom) {
      $missing .=  "<p>Email From is empty</p>";
    }

    if ($error != "") {
      $error = '<div class="alert alert-danger" role="alert"> <p> There are some missing field(s): </p>'.$error.' </div>';
    }

    if ($missing != "") {
      $missing = '<div class="alert alert-warning" role="alert"> <p> There are some error(s): </p> '.$missing.' </div>';
    }

    if ($error == "" && $missing == "") {
      
       if ( mail ($emailFrom, $emailTo, $emailSubject, $emailMsg) ) {
       $emailSuccess .= '<div class="alert alert-success ">Email Sent Successfully</div>'; 
       } else {
       $emailFail .= '<div class="alert alert-danger ">Failed to send the email</div>'; 
       
       }
    
    }
    
  }
?>

  <script type="text/javascript"src="index.js"></script>
  <link rel="stylesheet" href="index.css">
  
    <div class="container-contact">
      <h2> Get in touch </h2>
      
      <div id="error" > <?php echo $error; ?> </div>
      <div id="missing" > <?php echo $missing; ?> </div>
      <div id="emailRespond"> <?php echo $emailSuccess.$emailFail; ?> </div>
      
    <form method="post">
      <label>Email from:</label><input id="emailFrom" type="text" class="form-control" name="emailFrom" placeholder="Enter sender email">
      <label>Subject: </label><input id="emailSubject" type="text" class="form-control" name="subject" placeholder="Email subject">
      <label>Message: </label><textarea id="emailMsg" type="text" class="form-control" row="5" name="msg" placeholder="Enter your message"></textarea>
      <br>
      <button id="sendEmail" type="submit" class="btn btn-primary btn-send">Send </button>
    </form>
    </div>