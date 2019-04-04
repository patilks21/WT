function val()
{
	var n=document.cntc.name.value;
	var c=document.cntc.contact.value;
	var m=document.cntc.message.value;
	if(n=="")
		{
			alert("Enter Name");
		}
	if(c=="")
	{
		alert("Enter contact details");
	}
	if(m=="")
	{
		alert("Enter message");
	}
}