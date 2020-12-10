function validate(){
  var name = document.getElementById("name").value;
  var employee = document.getElementById("Employee").value;
  var department = document.getElementById("Department").value;
  var email = document.getElementById("email").value;
  var date = document.getElementById("Date").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(name.length < 5){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if(employee.length < 0){
    text = "Please Enter valid employee Id";
    error_message.innerHTML = text;
    return false;
  }
  if (department.selectedIndex < 1) { 
         text = "Please Enter  Department";
    error_message.innerHTML = text;
    return false;   
   
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  
  alert("Form Submitted Successfully!");
  return true;
}