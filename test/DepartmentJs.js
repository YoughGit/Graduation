/**
 * 
 */
function insertDepartment(){
	var department = {
			departname:"root",
			departnumber:100,
	}
	$.ajax({
		cache:false,
		type:'post',
		url:"/graduationProject/insertDepartment",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		dataType:"JSON",
		data:JSON.stringify(department),
		success:function(data){
		},	
		error:function(data, XMLHttpRequest, textStatus, errorThrown){  
			}  
	}) 
}
function deleteDepartment(){
	var department = {
			departid:1,
	}
	$.ajax({
		cache:false,
		type:'post',
		url:"/graduationProject/deleteDepartment",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		dataType:"JSON",
		data:JSON.stringify(department),
		success:function(data){
		},	
		error:function(data, XMLHttpRequest, textStatus, errorThrown){  
			}  
	}) 
}
function updateDepartment(){
	var department = {
			departid:2,
			departname:"update",
			departnumber:1050,
	}
	$.ajax({
		cache:false,
		type:'post',
		url:"/graduationProject/updateDepartment",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		dataType:"JSON",
		data:JSON.stringify(department),
		success:function(data){
		},	
		error:function(data, XMLHttpRequest, textStatus, errorThrown){  
			}  
	}) 
}
function findDepartment(){
/*	var department = {
			departname:"root",
	}
	var departmentMap = {
			//department:department,
			page:1,
			pageSize:4,
	}*/
	$.ajax({
		cache:false,
		type:'post',
		url:"/graduation/department/findDepartment",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		dataType:"JSON",
		data:{},
		success:function(data){
		},	
		error:function(data, XMLHttpRequest, textStatus, errorThrown){  
			}  
	}) 
}