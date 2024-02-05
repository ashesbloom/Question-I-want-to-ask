function user_response_1(){
    Email.send({
        SecureToken : "409be726-7a60-4383-818e-3c724f9dcb95",
        To : 'smtp.request.js@gmail.com',
        From : "smtp.request.js@gmail.com",
        Subject : "User response has been submitted!",
        Body : "<h3> User selected <br><h2><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>YES..</u></b></h2></h3>"
    }).then(
      message => alert(message)
    );
};
function user_response_2(){
  Email.send({
      SecureToken : "409be726-7a60-4383-818e-3c724f9dcb95",
      To : 'smtp.request.js@gmail.com',
      From : "smtp.request.js@gmail.com",
      Subject : "User response has been submitted!",
      Body : "<h3> User selected <br><h2><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>NO</u></b></h2></h3>"
  }).then(
    message => alert(message)
  );
}

