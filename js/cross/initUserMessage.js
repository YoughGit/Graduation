function updateUser(){
	var formData = new FormData();
	formData.append("fileimg",previewImg.files[0]);
	formData.append("name",$("#update_name").val());
	formData.append("sex",$("input[name='update_sex']:checked").val());
	formData.append("presentation",$("#update_presentation").val());
	formData.append("username",$("#username").text());
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/user/updateUser",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		contentType: false,  
        processData: false,  
		data:formData,
        success: function (data) {
        	if(data.message=="success"){
        		alert("提交成功");
        		location.reload();
        	}
        	else
        		alert("发生未知错误");
         },
        error: function(data) {
         }
    });
}
function updateUser_open(){
			layer.open({
			      type: 1,
			      area: ['600px', '600px'],
			      shadeClose: true, //点击遮罩关闭
			      content:'<div class="num">'
					      +'<h4>你的信息</h4>'
					      +'<div id="preview">'
					      +'<img  id="imghead" border="0" src="img/photo_icon.png" width="90" height="90" onclick=$("#previewImg").click();>'
						  +'</div>'
						  +'<input type="file" name="fileimg" onchange="previewImage(this)" style="display: none;" id="previewImg">'					      
					      +'<span>昵称：</span>'
					      +'<input type="text" id="update_name" />'
					      +'<div class=sex>'
					      +'<span>性别：</span>'
					      +'<input type="radio" checked="checked" name="update_sex" value="男" id="man">男'
					      +'<input type="radio" name="update_sex" value="女" id="gir">女'
					      +'</div>'
					      +'<span>个性签名：</span>'
					      +'<textarea id="update_presentation" class="span6" rows="5"></textarea>'
					      +'</div>'
					      +'<span class="updateBtn" onclick=updateUser()>更新</span>'
			    });
			  
		}

function initUser(){
	var user = {
		username: $("#username").text(),
	};
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/user/findUser",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(user),
		success:function(data){
			for(var i=0;i<data.data.data.length;i++){
					$("#userImg").attr("src","img/user/"+data.data.data[0].address+".png");				
					$("#user").val(data.data.data[0].username);
					$("#name").val(data.data.data[0].name);	
					$("#sex").val(data.data.data[0].sex);	
					$("#presentation").val(data.data.data[0].presentation);	
			
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
        }
	})
	
}
