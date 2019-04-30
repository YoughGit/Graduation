/**
 * 
 */
function loginUser(){
	var user = {
			username:"123",
	}
	$.ajax({
		cache:false,
		type:'post',
		url:"http://localhost:8008/graduation/user/loginUser",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		dataType:"JSON",
		data:JSON.stringify(user),
		success:function(data){
			
		},	
		error:function(data, XMLHttpRequest, textStatus, errorThrown){  
			}  
	}) 
}
function findUser(){
	var userCustom = {
			id:1,
	}
	$.ajax({
		cache:false,
		type:'post',
		url:"http://localhost:8008/graduation/user/findUser",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		dataType:"JSON",
		data:JSON.stringify(userCustom),
		success:function(data){
			
		},	
		error:function(data, XMLHttpRequest, textStatus, errorThrown){  
			}  
	}) 
}
function getSessionUser(){
	$.ajax({
		xhrFields:{withCredentials:true},
		cache:false,
		type:'post',
		url:"http://localhost:8008/graduation/user/getSessionUser",
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
function setSessionUser(){
	$.ajax({
		xhrFields:{withCredentials:true},
		cache:false,
		type:'post',
		url:"http://localhost:8008/graduation/user/setSessionUser",
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
/*function updataUser(){
	var user = {
			username:5,
			password:1,
	}
	$.ajax({
		cache:false,
		type:'post',
		url:"/graduationProject/updataUser",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		dataType:"JSON",
		data:JSON.stringify(user),
		success:function(data){
		},	
		error:function(data, XMLHttpRequest, textStatus, errorThrown){  
			}  
	}) 
}
function DeleteUser(){
	var user = {
			userid:1,
	}
	$.ajax({
		cache:false,
		type:'post',
		url:"/graduationProject/DeleteUser",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		dataType:"JSON",
		data:JSON.stringify(user),
		success:function(data){
		},	
		error:function(data, XMLHttpRequest, textStatus, errorThrown){  
			}  
	}) 
}
*/
function insertUser(){
	var user = {
			username:1881122281,
			password:1,
	}
	$.ajax({
		cache:false,
		type:'post',
		url:"http://localhost:8008/graduation/user/insertUser",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		dataType:"JSON",
		data:JSON.stringify(user),
		success:function(data){
		},	
		error:function(data, XMLHttpRequest, textStatus, errorThrown){  
			}  
	}) 
}