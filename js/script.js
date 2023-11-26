/* script.js 
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block

	//jquery code here

	$(".project-item").click(function(){

		$("body").css({"overflow":"hidden"})

		$(".popup-outer").fadeIn()

		$(".popup-stories").empty()

		var topic = $(this).attr("topic")
		console.log(topic)

		var stories_filter = stories.filter( element => element.topic == topic)
			console.log(stories_filter)

		for (var i = stories_filter.length - 1; i >= 0; i--) {
			$(".popup-title").html('<h3>'+stories_filter[0].name+'</h3>')

			// $(".popup-stories").append('<div class="words"><div class="story-slug"><h4>'+stories_filter[i].slug+'</h4></div><div class="story-desc"><p>'+stories_filter[i].desc+'</p></div></div><div class="storylink"><img src="img/'+stories_filter[i].photo+'"><a href="'+stories_filter[i].first_link+'"><h5>'+stories_filter[i].first_link_text+'</h5></a></div>')

			if (stories_filter[i].second_link_text == "none") {

				console.log("no second link")

				$(".popup-stories").append('<div class="words"><div class="story-slug"><h4>'+stories_filter[i].slug+'</h4></div><div class="story-desc"><p>'+stories_filter[i].desc+'</p></div></div><div class="storylink"><img src="img/'+stories_filter[i].photo+'"><div class="link-box"><a href="'+stories_filter[i].first_link+'" target="_blank"><h5>'+stories_filter[i].first_link_text+'</h5></a></div></div>').addClass(stories_filter[i].side)

			} else {

				console.log("second link")

				$(".popup-stories").append('<div class="words"><div class="story-slug"><h4>'+stories_filter[i].slug+'</h4></div><div class="story-desc"><p>'+stories_filter[i].desc+'</p></div></div><div class="storylink"><img src="img/'+stories_filter[i].photo+'"><div class="link-box"><a href="'+stories_filter[i].first_link+'"target="_blank"><h5>'+stories_filter[i].first_link_text+'</h5></a><a href="'+stories_filter[i].second_link+'" target="_blank"><h5>'+stories_filter[i].second_link_text+'</h5></a></div></div>').addClass(stories_filter[i].side)
			}
			

		}

	});

	$(".x").click(function(){
		$(".popup-outer").fadeOut()

		$("body").css({"overflow":"scroll"})
	});

	$(".photo-container").hover(function(){
		$(".caption", this).fadeToggle().css({"display":"flex"})
	});



	


}); //end document.ready block
