function initSafety(){
	var user = {
		username: $("#username").text(),
	}
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/user/findUser",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(user),
		success:function(data){
			$("#question").html(
				data.data.data[0].question
			);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
           
        }
	})
}
function check(){
	var user = {
		answer: $("#answer").val(),
		username: $("#username").text(),
		question:$("#question").text(),
	}
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/user/findUserByanswer",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(user),
		success:function(data){
			if(data.message=="success"){
			alert(data.data.data.password);
			}
			else
			alert("回答错误");
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
           
        }
	})
}
