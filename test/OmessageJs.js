/**
 * 
 */
function findOmessage(){
	var omessageCustom = {
			otherbookid:1,
	}
	$.ajax({
		cache:false,
		type:'post',
		url:"/graduation/omessage/findOmessage",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		dataType:"JSON",
		data:JSON.stringify(omessageCustom),
		success:function(data){
		},	
		error:function(data, XMLHttpRequest, textStatus, errorThrown){  
			}  
	}) 
}