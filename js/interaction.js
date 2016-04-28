// JavaScript Document

//start@@@code for search and blur
function sear_blur(){

$("#search_ac input.search").live("click",function(){
		 	$(this).val("");		  
		});
		
$('#search_ac input.search').blur(function() {
             $(this).val("Search..");
         });
}
//end@@@code for search and blur

//start@@@code for argument respanse slide 
function arg_slide(){
	
	 $(".dwn_bar").hide();
		    $(".arr").click(function(){
		   	$(this).removeClass("dwn_bar");
			$(this).toggleClass("down_arr").closest(".long_bars").find(".dwn_bar").toggle();
	    });
	
}
//end@@@code for argument respanse slide 

//start@@@code for leftnav slide
function leftnav_slide(){
	
	$("#left_nav .parent_nav li.sub_head.has_children a img").live("click",function(){
		    $(this).toggleClass("collapse").closest(".sub_head").children("ul").slideToggle();
		});
}
//end@@@code for leftnav slide	

//start@@@code for delete modal window
function del_modal(){
	 $('.delete_a').live('click', function(){
				
					  $.blockUI({message:$('.fourth_box')});  
						
						  });
			  $(".cross").live("click", function(){
							$(".mod_box").fadeOut();
							$.unblockUI();
							return false;
				});	
}
//end@@@code for delete modal window

//start@@@code for active and inactive buttons
function act_inact_but(){
	
	$("ul.comp_ai li a").live("click", function(){
			if($(this).closest("ul").hasClass("active") && !$(this).parent("li").hasClass("selected")){
				var comp_id = $(this).closest("ul");
				$($(comp_id)).children("li").removeClass("selected");			
				$(this).parent("li").addClass("selected");
			}
		});	
}
//end@@@code for active and inactive buttons

//start@@@code for right content drop down for contacts and pools html document
function right_contarr(){
	
	$("ul.form_bars li .bar_label").live("click", function(){
 			$(this).closest("li").toggleClass("tog_desc");
	    });

 }	
//end@@@code for right content drop down for contacts and pools html document
	
//start@@modal window for the edit categories page

function edit_cat(){

       $('#edit_pen_cat').live('click', function(){

             $.blockUI({message:$('.first_box')});  
			 $('.pad_left').text('Edit Categories');
			 $('.edit_cng').text('Update');
					
		  });
	
}

function add_category(){
	
	$('.add_mod_cat').live('click',function(){
												 
					$.blockUI({message:$('.first_box')});
					$('.pad_left').text('Add Categories');
					$('.edit_cng').text('Add');
			
			});
	
	}
//end@@modal window for the edit categories page

//start@@modal window for the edit sub categories page
function edit_subcat(){
	
        $('#edit_pen_subcat').live('click', function(){
			
			      $.blockUI({message:$('.second_box')}); 
				  $('.pad_left').text('Edit Sub-Categories');
				  $('.edit_cng').text('Update');
					
			 });	
 	
}

function add_subcategory(){
	
	$('.add_mod_subcat').live('click',function(){
												 
					$.blockUI({message:$('.second_box')});
					$('.pad_left').text('Add Sub-Categories');
					$('.edit_cng').text('Add');
			
			});
	}
//end@@modal window for the edit sub categories page

//start@@modal window for the edit reason codes page
function reason_code(){

		$('#rsn_mod').live('click', function(){
											
			//alert($("#cnt_width").width());
			//alert($("#cnt_width").height());
			 
			//var x = $("#third_boxwidth").offset().left;
											 
			      $.blockUI({message:$('.third_box')});  
				  $('.pad_left').text('Edit Reason Codes');
				  $('.edit_cng').text('Update');
			});

}

function add_reasoncode(){
	
	$('.add_mod_rescode').live('click',function(){
												 
					$.blockUI({message:$('.third_box')});
					$('.pad_left').text('Add Reason Codes');
				    $('.edit_cng').text('Add');
			
			});
	}
//end@@modal window for the edit reason codes page

//start@@code for unblock ui including button and close image
function unblock_ui(){
 	
	$(".cross").live("click", function(){
						$(".mod_box").fadeOut();
						$.unblockUI();
						return false;
					})	
}
//end@@code for unblock ui including button and close image

//start@@code for active inactive tabs
function act_inact_hftab(){
	
	$(".act_btns a").live("click",function(){ 
				$(this).closest(".act_btns").children(".actv").removeClass("actv");
				$(this).addClass("actv");
			});
}
//end@@code for active inactive tabs

//start@@users right content tabs for permissions and alerts
function user_rttab(){
	
	$("ul.horizontal_tab li a").live("click",function(){ 
      	$(".same_cl").hide();
		$("#" + $(this).attr("rel")).show();
		$(".active_tab").removeClass("active_tab");
		$(this).addClass("active_tab");
        });
	 
	 if(!$("ul.horizontal_tab li:first a").hasClass("active_tab"))
		$("ul.horizontal_tab li:first a").trigger("click");	
		
}
//end@@users right content tabs for permissions and alerts

//start@@users right content on/off buttons
function on_off_but(){
	
	$("ul.tog_btn li a").live("click", function(){
		     if($(this).closest("ul").hasClass("active_tog") && !$(this).parent("li").hasClass("selected")){
			    var comp_id = $(this).closest("ul");
			       $($(comp_id)).children("li").removeClass("selected");			
			         $(this).parent("li").addClass("selected");
		  }
	    });	
}
//end@@users right content on/off buttons

//start@@applying background for the search parent div 
function sear_bg(){
	
			$("#search_ac input").focus(function () { 
          		$(this).closest(".app .content_rc .header").addClass("search_bg");
     });

		$("#search_ac input").blur(function () {
								
		 $(this).closest(".app .content_rc .header").removeClass("search_bg");
		});
}
//end@@applying background for the search parent div 

//start@@code for tabs shifting in the right content

function subj_rgtab(){
	
	 $("ul.horizontal_tab li a").live("click",function(){ 
      	$(".aa").hide();
		$("#" + $(this).attr("rel")).show();
		$(".active_tab").removeClass("active_tab");
		$(this).addClass("active_tab");

     });
	 
	 if(!$("ul.horizontal_tab li:first a").hasClass("active_tab"))
	  $("ul.horizontal_tab li:first a").trigger("click");	
}
//end@@code for tabs shifting in the right content

//start@@code for adding and editing the pools 
function pool_add(){
	
			$('.add_pool').live('click',function(){
											 
				 $.blockUI({message:$('.mod_pool')}); 
				 $('.pad_left').text('Add Pool');
				 $('.edit_cng').text('Add');
											 
		  });
	
	}
	
function edit_pool(){	
	$('.edit_mod_pool').live('click',function(){
												 
				 $.blockUI({message:$('.mod_pool')});
				 $('.pad_left').text('Edit Pool');
				 $('.edit_cng').text('Update');
			
			});
}
//end@@code for adding and editing the pools 

//start@@code for adding and editing the contact 
function add_contact(){
	
	
	$('.mod_cntmtd').live('click',function(){
				
				$('.pad_left').text('Add Contact');	
				$('.edit_cng').text('Add');
				$.blockUI({message:$('.mod_contact')});  							 
											 
		  });
	
	}
	
function edit_contact(){	
		
$('.edit_mod_cnt').live('click',function(){
		
		    $.blockUI({message:$('.mod_contact')});  
			$('.pad_left').text('Edit Contact');
			$('.edit_cng').text('Update');
		
		});		
		
}
//end@@code for adding and editing the contact 
		
//start@@code for adding and editing the subjects
function add_subject(){	
	$('.mod_sub').live('click',function(){ 
											 
					$.blockUI({message:$('.mod_subj')}); 
					$('.pad_left').text('Add Subject');
					$('.edit_cng').text('Add');
											 
			 });
	
}

function edit_subject(){
 $('.edit_mod_sub').live('click',function(){
												 
				 $.blockUI({message:$('.mod_subj')});
				 $('.pad_left').text('Edit Subject');
				 $('.edit_cng').text('Update');
			
			});
}
//end@@code for adding and editing the subjects 

//start@@code for adding and editing the response
function add_response(){

	$('.mod_res').live('click', function(){

				tiny();
		        $.blockUI({message:$('.mod_add')}); 
				$('.pad_left').text('Add Response');
				$('.edit_cng').text('Add');
				
		  });

}


function edit_response(){
	
	  $('.edit_mod_arg').live('click',function(){
				
				 tiny();
				 $.blockUI({message:$('.mod_add')});  
				 $('.pad_left').text('Edit Response');
				 $('.edit_cng').text('Update');
			
			});
}

//end@@code for adding and editing the response


//start@@code for password editing
function mod_pass(){
$('.pass_mod').live('click',function(){
												 
		$.blockUI({message:$('.second_box')}); 		 
	
	});
}
//end@@code for password editing

//start@@code for assign rights tabs checkbox select all and deselect all
function assign_check(){
	$('.assign_minus').live('click',function(){
				var obj_sc = $(this).closest(".sally_content").attr("id");
				
				if($(this).hasClass("selected"))
				{
					$(this).removeClass('selected');
					$("#" + obj_sc + " .check_rite").removeAttr('checked');	
				}
				else
				{
					$(this).addClass('selected');
					$("#" + obj_sc + " .check_rite").attr('checked','checked');
				}
				
			});	
				$(".check_rite").live('click',function(){
					//alert($(this).attr('class'));
					var a = $(this).closest('.expand_dept').find(".check_rite").length;
					var b = $(this).closest('.expand_dept').find(".check_rite:checked").length;
					//alert(a);
					//alert(b);
					if(a != b)
					{
						$(this).closest('.sally_content').find('.big_minus').removeClass('selected');
					}
					if(a == b)
					{
						$(this).closest('.sally_content').find('.big_minus').addClass('selected');
					}
			     });
				
				
		      
	
	}
//end@@code for assign rights tabs checkbox select all and deselect all	

//start@@code for access and alerts tabs left side checkbox select all and deselect all
	
function access_leftcheck(){
	
	$('.minus').live('click',function(){
			if($(this).hasClass("selected"))
			{
				$(this).removeClass('selected');
				$(this).parent().next("ul:first").find(".chec").each(function(){
							$(this).removeAttr('checked');												   
				});
			}
			else
			{
				$(this).addClass('selected');
				$(this).parent().next("ul:first").find(".chec").each(function(){
					     $(this).attr('checked','checked');												   
				});
			}
	
		});
			$('.chec').live('click',function(){
										 
				var a = $(this).closest('.sally_con').find(".chec").length;
				var b = $(this).closest('.sally_con').find(".chec:checked").length;
				//alert(a);
				//alert(b);
				if(a != b)
				{
					$(this).closest('.sally_con').prev('.acc_header').children(".minus").removeClass('selected');
				}
				if(a == b)
				{
					$(this).closest('.sally_con').prev('.acc_header').children(".minus").addClass('selected');
				}
										 
			 });
		
		
	
	}
	
//end@@code for access and alerts tabs left side checkbox select all and deselect all	

//start@@code for access and alerts tabs right side checkbox select all and deselect all

function access_rightcheck(){
	
	$('.small_minus').live('click',function(){
												
				var obj_ap = $(this).closest("#access_r").attr("id");
				
				if($(this).hasClass("selright"))
				{
					$(this).removeClass('selright');
					$("#" + obj_ap + " .check_right").removeAttr('checked');	
				}
				else
				{
					$(this).addClass('selright');
					$("#" + obj_ap + " .check_right").attr('checked','checked');
				}
				
			});
			  
			   $(".check_right").live('click',function(){
													   
											 
					var a = $(this).closest('.sally_con').find(".check_right").length;
					var b = $(this).closest('.sally_con').find(".check_right:checked").length;
					//alert(a);
					//alert(b);
					if(a != b)
					{
						$(this).closest('.sally_con').find('.small_minus').removeClass('selright');
					}
					if(a == b)
					{
						$(this).closest('.sally_con').find('.small_minus').addClass('selright');
					}
					
			  });
			
			
			
	
	}


//end@@code for access and alerts tabs right side checkbox select all and deselect all
	