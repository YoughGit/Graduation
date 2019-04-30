/**
 * 
 */
function findOtherbook(){
	var OtherbookCustom = {
			courseid:2,
	}
	$.ajax({
		cache:false,
		type:'post',
		url:"/graduation/otherbook/findOtherbook",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		dataType:"JSON",
		data:JSON.stringify(OtherbookCustom),
		success:function(data){
		},	
		error:function(data, XMLHttpRequest, textStatus, errorThrown){  
			}  
	}) 
}