function user_response_1(){
    Email.send({
        SecureToken : "eeea90b8-2805-426c-8dd6-445f948f58da",
        // To : 'doctorvirtucare@gmail.com',
        // From : "doctorvirtucare@gmail.com",
        // Subject : "User response has been submitted!",
        // Body : "<h3> User selected <br><h2><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>YES..</u></b></h2></h3>"
    }).then(
      message => alert(message)
    );
};
function user_response_2(){
  Email.send({
      SecureToken : "eeea90b8-2805-426c-8dd6-445f948f58da",
      // To : 'doctorvirtucare@gmail.com',
      // From : "doctorvirtucare@gmail.com",
      // Subject : "User response has been submitted!",
      // Body : "<h3> User selected <br><h2><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>NO</u></b></h2></h3>"
  }).then(
    message => alert(message)
  );
}

