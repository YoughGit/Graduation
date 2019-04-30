/**
 * 
 */
function findCourse(){
	var courseCustom = {
			courseid:2,
	}
	$.ajax({
		cache:false,
		type:'post',
		url:"/graduation/course/findCourse",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		dataType:"JSON",
		data:JSON.stringify(courseCustom),
		success:function(data){
		},	
		error:function(data, XMLHttpRequest, textStatus, errorThrown){  
			}  
	}) 
}