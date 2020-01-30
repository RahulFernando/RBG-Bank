			
	function validate(){
		var username = document.getElementById("username").value;
		var password = document.getElementById("password").value;
		if ( username == "Formget" && password == "formget#123"){
		window.open("Dashboard.html"); 
		}
		else{
		alert("Invalid User Id or Password");
		}
	}

	function signvalidate() {
		var accnum = document.getElementById("accnum").value;
		var cona = document.getElementById('cona').value;
		var n = accnum.toString().length;
		var psw = document.getElementById('psw').value;
		var repsw = document.getElementById('repsw').value;
		var num = document.getElementById('num').value;
		var numnew = num.toString().length;
		if(n != 8 && psw != repsw && numnew != 10 && accnum != cona){
			alert("Account Number must be include 8 digit\nPassword is invalid\nYour phone number is invalid");
		}
		else if(n != 8 && psw != repsw){
			alert("Account Number must be include 8 digit\nPassword is invalid");
		}
		else if( psw != repsw && numnew != 10){
			alert("You entered re-password is invalid\nYour phone number is invalid");
		}
		else if(numnew != 10){
			alert("Your phone number is Invalid");
		}
		else if(n != 8){
			alert("Account Number must be include 8 digit");
		}
		else if(psw != repsw){
			alert("Password is invalid");
		}
		else if(accnum != cona){
			alert("Account number dont match");
		}
		else{
			window.open("Dashboard.html");
		}

	}

	var account = document.getElementById('i01');

		window.onclick = function(event) {
    	if (event.target == account) {
        account.style.display = "none";
    	}
	}
		function myFunction(){
		var acn = document.getElementById('acn').value;
		var z = acn.toString().length;
		var amount = document.getElementById('amount').value;
		var a = document.getElementById('mySelect');
		var text = a.options[a.selectedIndex].text;
		

		var benName = document.getElementById('benName').value;
		if(z != 8){
			alert("Invalid account number");
		}
		else if(amount == ''){
			alert("Amount should enter");
		}
		else
		alert("Account number"+' '+'-'+' '+acn+'\n'+"Amount"+' '+'-'+' '+amount+'\n'+"Account Type"+' '+'-'+' '+text+'\n' +"Benfiary Name"+' '+'-'+' '+benName);
	}

	function selectType() {
		var loanType = document.getElementById('loan');
		var a = loanType.options[loanType.selectedIndex].text;
		var repayment = document.getElementById('repayment');
		var b = repayment.options[repayment.selectedIndex].text;
		var date = document.getElementById('date').value;
		var am = document.getElementById('am').value;
		var priod = document.getElementById('priod').value;

		if(a != '-Select Loan Type-' && b != '-Select Repayment frequancy-' && date != '' && am != '' && priod != ''){
			alert("Your loan request has been sent to the bank");
		}

		else if(a == '-Select Loan Type-'){
			alert("You have not selected Loan");
		}
		else if(b == '-Select Repayment frequancy-'){
			alert("You have not selected Repayment frequancy");
		}
		else if(date == ''){
			alert("Date must be give");
		}
		else if(am == ''){
			alert('Amount must be filled out');
		}
		else if(priod == ''){
			alert("Period must be filled out");
		}
	}

	function verification() {
		var verif = document.getElementById('verif').value;
		if(verif == 'W68HP'){
			alert("Your details has been sent to the bank administration");
		}
		else{
			alert("Verify the code");
		}
	}

	function feedback() {

        	alert("Your feedback has been sent to the bank staff");
        	
	}

	function paymentcon() {
		var selectPay = document.getElementById('selectPay');
		var p = selectPay.options[selectPay.selectedIndex].text;
		var payee = document.getElementById('payee');
		var l = payee.options[payee.selectedIndex].text;
		//var rs = document.getElementById('rs').value;
		
		if(p == '-Select your Payment -' && p == '-Select your Payment -'){
			alert('You must select Payment and Payee');
		} 
		else if(p == '-Select your Payment -'){
			alert("You mus select Payment");
		}
		else if(l == '-Select a Payee-'){
			alert("You must select payee");
		}
		else{
			alert("Payment successful");
		}s

	}
