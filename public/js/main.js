"use strict";

$(document).ready( () => {

	
	// Pattern for checking License Number...
	const licensePattern = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8}$/;
    
	// As an when user submits the form following function will be executed....
	$("#submitButton").click(function(e){
		
		let formSubmit=true;

		// Getting data from inputs and trimming it...
		let firstName=$("#firstName").val().trim();
        let lastName=$("#lastName").val().trim();
        let licenseNo=$("#licenseNo").val().trim();
		let age=$("#age").val().trim();
		let dob=$("#dob").val().trim();

		let car_details_make=$("#car_details_make").val();
        let car_details_model=$("#car_details_model").val();
        let car_details_year=$("#car_details_year").val();
        let car_details_plateNo=$("#car_details_plateNo").val();


		// Checking if first name is empty or not...
		if(!firstName)
		{
			$("#firstName").next().text("Please Enter First Name.");
			formSubmit=false;
		}
		else
		{
			$("#firstName").next().text("");
		}

        // Checking if last name is empty or not...
        if(!lastName)
		{
			$("#lastName").next().text("Please Enter Last Name.");
			formSubmit=false;
		}
		else
		{
			$("#lastName").next().text("");
		}

        // Checking if license number is empty or not and is 8 digit alpha numeric string or not...
        if(!licenseNo)
		{
			$("#licenseNo").next().text("Please Enter License Number.");
			formSubmit=false;
		}
		else if(!licenseNo.match(licensePattern))
		{
			$("#licenseNo").next().text("Please Enter A 8 Digit AlphaNumeric License Number.");
			formSubmit=false;
		}
		else
		{	
			$("#licenseNo").next().text("");
		}

		// Checking if age is empty or not and only numeric characters are there...
		if(!age)
		{
			$("#age").next().text("Please Enter your age.");
			formSubmit=false;
		}
		else if(isNaN(age))
		{
			$("#age").next().text("Please Enter Only Digit.");
			formSubmit=false;
		}
		else
		{
			$("#age").next().text("");
		}
		
        // Checking if age contains any alphabets or not...
       

		// Checking if date of birt is empty or not...
		if(!dob)
		{
			$("#dob").next().text("Please Enter Your Date Of Birth.");
			formSubmit=false;
		}
		else
		{
			$("#dob").next().text("");
		}

		// Checking if make is empty or not...
		if(!car_details_make)
		{
			$("#car_details_make").next().text("Please Enter Car Company.");
			formSubmit=false;
		}
		else
		{
			$("#car_details_make").next().text("");
		}

        // Checking if model is empty or not...
		if(!car_details_model)
		{
			$("#car_details_model").next().text("Please Enter Car Model.");
			formSubmit=false;
		}
		else
		{
			$("#car_details_model").next().text("");
		}

        // Checking if year is empty or not  and only numeric characters are there...
		if(!car_details_year)
		{
			$("#car_details_year").next().text("Please Enter Car Year.");
			formSubmit=false;
		}
		else if(isNaN(car_details_year))
		{
			$("#car_details_year").next().text("Please Enter Only Digit.");
			formSubmit=false;
		}
		else
		{
			$("#car_details_year").next().text("");
		}

        // Checking if plate number is empty or not...
		if(!car_details_plateNo)
		{
			$("#car_details_plateNo").next().text("Please Enter Car Plate Number.");
			formSubmit=false;
		}
		else
		{
			$("#car_details_plateNo").next().text("");
		}

		// If all the inputs are correct the form will be submitted or else it won't be submitted...
		if(!formSubmit) { e.preventDefault(); }
	});

	$("#checkLicenseNumber").click(function(e){
		
		let formSubmit=true;
		let licenseNo=$("#licenseNo").val().trim();

		// Checking if license number is empty or not and is 8 digit alpha numeric string or not...
        if(!licenseNo)
		{
			$("#licenseNo").next().text("Please Enter License Number.");
			formSubmit=false;
		}
		else if(!licenseNo.match(licensePattern))
		{
			$("#licenseNo").next().text("Please Enter A 8 Digit AlphaNumeric License Number.");
			formSubmit=false;
		}
		else
		{	
			$("#licenseNo").next().text("");
		}

		if(!formSubmit) { e.preventDefault(); }
	});

	$("#updateButton").click(function(e){
		
		let formSubmit=true;

		let car_details_make=$("#car_details_make").val();
        let car_details_model=$("#car_details_model").val();
        let car_details_year=$("#car_details_year").val();
        let car_details_plateNo=$("#car_details_plateNo").val();

		// Checking if make is empty or not...
		if(!car_details_make)
		{
			$("#car_details_make").next().text("Please Enter Car Company.");
			formSubmit=false;
		}
		else
		{
			$("#car_details_make").next().text("");
		}

        // Checking if model is empty or not...
		if(!car_details_model)
		{
			$("#car_details_model").next().text("Please Enter Car Model.");
			formSubmit=false;
		}
		else
		{
			$("#car_details_model").next().text("");
		}

        // Checking if year is empty or not  and only numeric characters are there...
		if(!car_details_year)
		{
			$("#car_details_year").next().text("Please Enter Car Year.");
			formSubmit=false;
		}
		else if(isNaN(car_details_year))
		{
			$("#car_details_year").next().text("Please Enter Only Digit.");
			formSubmit=false;
		}
		else
		{
			$("#car_details_year").next().text("");
		}

        // Checking if plate number is empty or not...
		if(!car_details_plateNo)
		{
			$("#car_details_plateNo").next().text("Please Enter Car Plate Number.");
			formSubmit=false;
		}
		else
		{
			$("#car_details_plateNo").next().text("");
		}

		// If all the inputs are correct the form will be submitted or else it won't be submitted...
		if(!formSubmit) { e.preventDefault(); }
	});
		
	$("#registerButton").click(function(e){
		
		let formSubmit=true;

		let userName = $("#userName").val().trim();
		let password=$("#password").val().trim();
		let conformPassword=$("#conformPassword").val().trim();
		let userType = $("#userType").val();

		// Checking if license number is empty or not and is 8 digit alpha numeric string or not...
        if(!userName)
		{
			$("#userName").next().text("Please Enter username.");
			formSubmit=false;
		}
		else
		{	
			$("#userName").next().text("");
		}

		if(!password)
		{
			$("#password").next().text("Please Enter password.");
			formSubmit=false;
		}
		else
		{	
			$("#password").next().text("");
		}

		if(!conformPassword)
		{
			$("#conformPassword").next().text("Please Enter conformPassword.");
			formSubmit=false;
		}
		else
		{	
			$("#conformPassword").next().text("");
		}

		if(password!=conformPassword)
		{
			$("#conformPassword").next().text("Password and Conform Password must be same...");
			formSubmit=false;
		}

		if(!userType)
		{
			$("#userType").next().text("Please Enter User Type.");
			formSubmit=false;
		}
		else
		{	
			$("#userType").next().text("");
		}

		if(!formSubmit) { e.preventDefault(); }
	});

	$("#loginButton").click(function(e){
		
		let formSubmit=true;

		let userName = $("#userName").val().trim();
		let password=$("#password").val().trim();

		// Checking if license number is empty or not and is 8 digit alpha numeric string or not...
        if(!userName)
		{
			$("#userName").next().text("Please Enter username.");
			formSubmit=false;
		}
		else
		{	
			$("#userName").next().text("");
		}

		if(!password)
		{
			$("#password").next().text("Please Enter password.");
			formSubmit=false;
		}
		else
		{	
			$("#password").next().text("");
		}

		if(!formSubmit) { e.preventDefault(); }
	});
}); // end