function validation()
{
	
	var fn=document.f1.fn.value;
	var ln=document.f1.ln.value;
	var cnt=document.f1.cnt.value;
	var em=document.f1.em.value;
	var dob=document.f1.dob.value;
	var qal=document.f1.qal.value;
	var g=document.f1.g.value;
	if(fn=="" || ln=="" || cnt=="" || em=="" || dob=="" || qal=="" || g=="")
	{
		alert("fill all the details");
	}
	var name = /^[a-z]{2,100}$/;
	if(name.test(fn)==false)
	{
		alert("invalid first name");
	}
	if(name.test(ln)==false)
	{
		alert("invalid last name");
	}
	var num= /^[0-9]{10}$/;
	if(num.test(cnt)==false)
	{
		alert("invalid phone number");
	}
	var mail= /^([a-zA-Z])+([0-9]\.\_)+([@])+([a-z]\.)$/
	
}
