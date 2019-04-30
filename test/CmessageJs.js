/**
 * 
 */
function findCmessage(){
	var cmessageCustom = {
			
	}
	$.ajax({
		cache:false,
		type:'post',
		url:"/graduation/cmessage/findCmessage",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		dataType:"JSON",
		data:JSON.stringify(cmessageCustom),
		success:function(data){
		},	
		error:function(data, XMLHttpRequest, textStatus, errorThrown){  
			}  
	}) 
}