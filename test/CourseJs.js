/**
 * 
 */
function findCourse(){
	var courseCustom = {
			departid:1,
			page:1,
			pageSize:6,
			
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