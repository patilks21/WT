function validate()
{

	var uname = myform.uname.value;
	var pwd = myform.pass.value;
	var cpwd = myform.cpass.value;
	var mail = myform.email.value;
	var mob = myform.mbno.value;
	var addr = myform.addr.value;
	var pin = myform.pin.value;
	
	$(document).ready(function()
	{
		$("input").focus(function()
		{
			$(this).css("background-color", "grey");
	  	});

	  	$("input").blur(function()
		{
			$(this).css("background-color", "white");
		});
		
		$("body").mouseenter(function()
		{
			alert("Welcome!!!");
		});
	});
	
	var flag = true;
	var str = "";
	var email_filter = /^([a-zA-Z0-9\_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var name_filter = /^([a-zA-Z0-9])+$/;
	
if(uname.trim() === "")
	{
		flag = false;
		str += "Username should not be blank!!\n";
	}

      if(pwd.trim() === "")
	{
		flag = false;
		str += "Password should not be blank!!\n";
	}

	if(cpwd.trim() === "" || pwd != cpwd)
	{
		flag = false;
		str += "Password is blank or does not match!!\n";
	}
	if(mail.trim() === "" || !email_filter.test(mail))
	{
		flag = false;
		str += "Email Id is blank or is invalid!!\n";
	}
	if(isNaN(mob) || mob.length<10)
	{
		flag = false;
		str += "Mobile no. is not entered or invalid!!\n";
	}

	if(addr.trim() === "" )
	{
		flag = false;
		str += "Address should not be blank!!\n";
	}
	if(pin.trim() === "" )
	{
		flag = false;
		str += "Pincode should not be blank!!\n";
	}


	if(!flag)
	{
		alert("Warning!!!\n" + str);
	}
	return flag;

}
