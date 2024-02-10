function user_response_yes(){
    Email.send({
        SecureToken : "eeea90b8-2805-426c-8dd6-445f948f58da",
        To : 'doctorvirtucare@gmail.com',
        From : "doctorvirtucare@gmail.com",
        Subject : "User response has been submitted!",
        Body : "<h3> User selected <br><h2><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>YES..</u></b></h2></h3>"
    }).then(
      message => {
        alert('Your response has forwarded to the creator!');
        location.reload();
        
      }
    );
};
function user_response_no(){
  Email.send({
      SecureToken : "eeea90b8-2805-426c-8dd6-445f948f58da",
      To : 'doctorvirtucare@gmail.com',
      From : "doctorvirtucare@gmail.com",
      Subject : "User response has been submitted!",
      Body : "<h3> User selected <br><h2><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>NO</u></b></h2></h3>"
  }).then(
    message => {
      alert('Your response has forwarded to the creator!');
      location.reload();
    }
  );
}

