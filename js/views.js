// Views - Header
$.extend({
	header: function(data){

		var headerMarkup = '<div id="header" class="header">\
							   <a href="#" class="header_home"><div id="logo" class="fl"><img src="styles/images/spacer.gif" width="16" height="16" /></div></a>\
								   <ul class="nav fl">\
									   <li>\
										  <a href="users.html"><img class="forms" height="16" width="16" src="styles/images/spacer.gif"/>Users</a>\
									   </li>\
									   <li>\
										  <a href="reason_codes.html"><img class="reason_codes" height="16" width="16" src="styles/images/spacer.gif"/>Reason Codes</a>\
									   </li>\
									   <li>\
										  <a href="arg.html"><img class="arg" height="16" width="16" src="styles/images/spacer.gif"/>ARG</a>\
									   </li>\
									   <li>\
										  <a href="#"><img class="tickets" height="16" width="16" src="styles/images/spacer.gif"/>Tickets</a>\
									   </li>\
									   <li>\
										  <a href="#"><img class="reports" height="16" width="16" src="styles/images/spacer.gif"/>Reports</a>\
									   </li>\
									   <li>\
										  <a href="pools.html"><img class="system_tools" height="16" width="16" src="styles/images/spacer.gif"/>System Tools</a>\
									   </li>\
									</ul>\
									<ul class="nav fr" style="margin-right:10px;border-right:0 none;">\
									   <li class="fl login_align" id="bor_colp" >\
										  <span class="user">Tonya Davis</span>\
										  <span class="designation">SSG Manager</span>\
									   </li>\
									   <li class="logout_inf" id="bor_colp" style="border-left:1px solid #7b9d8f;  ">\
										  <a href="#" class="log_out"><img src="styles/images/spacer.gif" width="16" height="16"  class="logout_icon" />Logout</a>\
									   </li>\
									</ul>\
							</div>'
			if($("#header").length==0){
				$(".app.header_true").prepend(headerMarkup);
				$(".nav li:eq("+data.index+")").addClass("current_page");
			}
			//return headerMarkup;
	}
	
		 
		 
		 })