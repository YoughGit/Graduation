/**
 * 
 */
function findMajor(){
	var major = {
			departid :1,
	}
	$.ajax({
		cache:false,
		type:'post',
		url:"/graduation/major/findMajor",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		dataType:"JSON",
		data:JSON.stringify(major),
		success:function(data){
		},	
		error:function(data, XMLHttpRequest, textStatus, errorThrown){  
			}  
	}) 
}