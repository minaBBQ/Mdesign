
//menu appears when at the top of the page//

var $window = $(window);
var $header = $('.m_head_wrap');
$header.toggleClass('at_top', $window.scrollTop() === 0);
$window.scroll(function() {
  $header.toggleClass('at_top', $window.scrollTop() === 0);
});


//1 === '1' // false
//		1 == '1' // true

(function() {
	//header form
	var $nextButton = $('.q1_next');
	var $input = $('#q1_input1');
	var $question1Box = $('question1_box');
	var $steps = $('.q1_r_steps');
	var $que = $('.q1_r_que');
	var $done = $('.q1_done');
	var $doneMsg = $('.q1_done_message');

	var step = 1;
	var name = '';

	$nextButton.on('click', function() {
		step = step + 1;
		if (step === 4) {
			step = 1;
			$que.text('성함이 어떻게 되시나요?')
			$steps.text('1/3');
			$done.width('33%');

			$doneMsg.css({ opacity: 1 });
			setTimeout(function() {
					$doneMsg.css({ opacity: 0 });
			}, 4000);

		} else if (step === 2) {
			name = $input.val();	
			$que.text('안녕하세요. ' + name + '씨! 이메일은 어떻게 되세요?')
			$steps.text('2/3');
			$done.width('66%');

		} else if (step === 3) {
			$que.text('고마워요. ' + name + '씨, 어떻게 도와드릴까요?')
			$steps.text('3/3');
			$done.width('90%');
		}
		$input.val('');	
	});
})();




//workshop slected btn

var $topicWrap = $('.topic_wrap');

$topicWrap.on('click', function() {
	$(this).toggleClass('selected');
});

//workshop step

(function() {
 var $next = $('.s4_btn');
	var $step1 = $('.s4_b1_inside.step1');
	var $step2 = $('.s4_b1_inside.step2');
	var $step3 = $('.s4_b1_inside.step3');
	var $step4 = $('.s4_b1_inside.step4');
    var $s4_p  = $('s4_p');
	var $done = $('.s4_pro_bar');
	var $title_m=$('.s4_left_box1>.title_medium');
	var $s4_p=$('.s4_p');
	var $s4_btn=$('.s4_btn');
	
	var step = 1;
	
	$next.on('click', function() {
		step = step + 1;
		
		if (step === 5) {
			step = 1;
			$step4.hide();
			$step1.show();
			$s4_p.show();
			$done.width('33%');
			$title_m.text('진행을 계획하는 특강/워크샵 주제를 선택해 주세요.');
		} else if (step === 2) {
			$step1.hide();
			$step2.show();
			$done.width('66%');
			$title_m.text('특강/워크샵 기간은 몇 일정도 예상하시나요?');
		} else if (step === 3) {
			$step2.hide();
			$s4_p.hide();
			$step3.show();
			$done.width('95%');
			$title_m.text('성함과 연락처를 남겨주세요.');
		} else if (step === 4) {
			$step3.hide();
			$s4_btn.hide();
			$step4.show();
			$done.width('100%');
			$title_m.text('성공적으로 전달되었습니다!');
		}
		
		
	});
	
})();

//
//
//	var $recent_projects = $('.s2_left>div');
//	var $recent_projects = $('.s2_right>div');
//	
//	$recent_projects.hover(function(){
//		$('.gointo').addClass('gointo_base');
//	});
//
//	$recent_projects.mouseleave(function(){
//		$(this).removeClass('gointo_base');
//	});
//	
	
	
	
