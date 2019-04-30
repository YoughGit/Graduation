/**
 * 
 */
function findTextbook(){
	var textbookCustom = {
			courseid:2,
	}
	$.ajax({
		cache:false,
		type:'post',
		url:"/graduation/textbook/findTextbook",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		dataType:"JSON",
		data:JSON.stringify(textbookCustom),
		success:function(data){
		},	
		error:function(data, XMLHttpRequest, textStatus, errorThrown){  
			}  
	}) 
}