function ExportCourseExcel(){
	var course = {
			
	}
	$.ajax({
		cache:false,
		type:'post',
		url:"http://localhost:8008/graduation/course/ExportCourseExcel",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		dataType:"JSON",
		data:JSON.stringify(course),
		success:function(data){
		},	
		error:function(data, XMLHttpRequest, textStatus, errorThrown){  
			}  
	}) 
}

function importCourseExcel(){
	var formData = new FormData();
	formData.append("fileimg",previewImg.files[0]);
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/course/ImportCourseExcel",
		contentType:'application/json;charset=utf-8',
		traditional:true,
		contentType: false,  
        processData: false,  
		data:formData,
		success:function(data){
		},	
		error:function(data, XMLHttpRequest, textStatus, errorThrown){  
			}  
	}) 
}

function excel_open(){
	layer.open({
		type: 1,
		area: ['400px', '160px'],
		shadeClose: true, //点击遮罩关闭
		content: '<div class="num"><input type="file" id="previewImg"></div><span class="registerBtn" onclick=importCourseExcel()>提交</span>'
		});
}