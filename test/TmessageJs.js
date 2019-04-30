/**
 * 
 */
function findTmessage(){
	var tmessageCustom = {
			textbookid:1,
	}
	$.ajax({
		cache:false,
		type:'post',
		url:"/graduation/tmessage/findTmessage",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		dataType:"JSON",
		data:JSON.stringify(tmessageCustom),
		success:function(data){
		},	
		error:function(data, XMLHttpRequest, textStatus, errorThrown){  
			}  
	}) 
}