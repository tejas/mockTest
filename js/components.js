$.extend({
	btn : function(opts){
		opts = $.extend({}, $.btn.defaults, opts || {});
		/*var btn=$.create('a',{'class':'btn', 'id' : opts.id});
		$(btn).html("<span><span>"+opts.label+"</span></span>");*/
		var btn = jQuery("<a/>", {
		id: opts.id,
		title: opts.title,
		css: opts.css,
		click: opts.click,
		"class": "btn active",
		html: "<span class='inner-btn'><span class='label'>"+opts.label+"</span></span>"
		});
		return btn;
		},
	leftNav : function(opts){
		var lnstr = "";
		//alert(opts.data[0]);
		for(i=0; i < opts.data.length; i++){
			lnstr += "<li><a href='"+opts.data[i].href+"' class='"+opts.data[i].cssclass+"' rel='"+opts.data[i].rel+"'>"+opts.data[i].label+"</a></li>";
		}
		var leftNav = jQuery("<ul />", {
			"class" : "parent_nav",
			html: lnstr
		});
		return leftNav;
		
	},
	modal: function(opts){
		var myModal = '<div class="msgmodal" id="'+opts.id+'"><div class="closeme"></div><div class="msg_bg"><h3 class="modal_title">'+opts.modalTitle+'</h3><div class="modalContent"></div></div></div>'
		$.blockUI({message: myModal});
		$(document).bind("keyup", function(e){
			if(e.which === 27 || e.keycode === 27){
			 $.unblockUI();
			 $(document).unbind("keyup");
			 }
		});
		$(".closeme").bind("click", function(){
			$.unblockUI();
		});
		return myModal;
	}
	});
$.btn.defaults = {
	label: "button",
	id: "myBtn",
	click: function(){
		$(this).after("<span id='u'> clicked!</span>");
		$(this).next().fadeOut("slow", function(){$(this).remove()});
	},
	dblclick: function(){
		alert("double clicked");
	}
}



