$(window).resize(function(){
	$('html').css({'font-size':$(window).width()/3.9 + "px"});
})

$(function(){
	$('html').css({'font-size':$(window).width()/3.9 + "px"});
	
	//	选项框
	$('#order').click(function(){ $('.lay').css('display','block'); })
	$('.select').click(function(){ $('.lay').css('display','block'); })
	$('.lay').click(function(){ $(this).css('display','none'); })
	$('input[name="one"]').click(function (){$('input[name="product"]').val($(this).val());});


	function Timer(){
		var num = 60;
		var code = $('#codeBtn');
		code.attr('disabled','disabled');
		code.addClass('cur');
		var timer = setInterval(function(){
			num--;
			code.val(num+'秒');
			if(num==0){
			clearInterval(timer);
			code.removeAttr('disabled')
			code.val('获取验证码');
			code.removeClass('cur');
			}
		},1000)
	}

	$('#codeBtn').click(function(){
		var name = $('#name').val();
		var phone = $('#tel').val();
		var industry = $('#industry').val();
		var company = $('#company').val();
		var email = $('#email').val();
		var product=$("#order").val();
		
		if(name=="" || name==null){
			alert("请输入姓名");
			return false;
		}
		if(!(/^1[3|4|5|7|8][0-9]{9}$/.test(phone))){
			alert('请输入正确的手机号码');
			return false;
		}
		
		$.ajax({
			type : "post",
			url : "huoqu",
			dataType : "json",
			data : {
				"name" : name, 
				"phone" :phone,
				"industry":industry,
				"company" :company, 
				"email" :email,
				"product":product
			},
			success : function(data) {
				if(data.code == "true"){
					alert(data.messege);
				}
				else if(data.code == "false"){
					alert(data.messege);
				}
			},
			error : function() {
				alert("请填写完整信息!");
			}
		});
		Timer();
	});



	$('#loginBtn').click(function(){
		var name = $('#name').val();
		var phone = $('#tel').val();
		var industry = $('#industry').val();
		var company = $('#company').val();
		var email = $('#email').val();
		var product=$("#order").val();
		var yzm=$("#code").val();
		
		if(name=="" || name==null){
			alert("请输入姓名");
			return false;
		}
		if(name=='' || phone=='' || company=='' || email==''){
			alert('*号必须填写');
			return false;
		}
		if(!(/^1[3|4|5|7|8][0-9]{9}$/.test(phone))){
			alert('请输入正确的手机号码');
			return false;
		}
		if(!(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(email))){
			alert('邮箱格式不正确');
			return false;
		}
		
		$.ajax({
			type : "post",
			url : "yuyue",
			dataType : "json",
			data : {
				"name" : name, 
				"phone" :phone,
				"industry":industry,
				"company" :company, 
				"email" :email,
				"product":product,
				"yzm" :yzm
			},
			success : function(data) {
				//alert(data.code+"=="+data.messege)
				if(data.code=="true"){
					alert(data.messege);
					window.location.href = "details.html";
				}else if(data.code=="false"){
					alert(data.messege);
				}
			},
			error : function() {
				alert("页面出错！");
			}
		});
	})
})