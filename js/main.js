// Wow JS

if(document.querySelector('.wow'))
	new WOW().init();

// Wow JS



$(document).ready(function () {

	if( $(window).width() > 992 ){
		$("._scroll-link, .page-up").on("click", function (event) {
			//отменяем стандартную обработку нажатия по ссылке
			event.preventDefault();

			//забираем идентификатор бока с атрибута href
			var id  = $(this).attr('href'),

			//узнаем высоту от начала страницы до блока на который ссылается якорь
				top = ($(id)[0]) ? $(id).offset().top : false;
			
			//анимируем переход на расстояние - top за 1500 мс
			if(top != false) $('body,html').animate({scrollTop: top}, 1500);
		});
	}
	if( $(window).width() < 992 ){
		$('.header__menu a').click(function () {
			$('body').removeClass('open__menu-mob')
		})

		$("._scroll-link").on("click", function (event) {
			//отменяем стандартную обработку нажатия по ссылке
			event.preventDefault();

			//забираем идентификатор бока с атрибута href
			var id  = $(this).attr('href'),

			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = ($(id)[0]) ? $(id).offset().top : false;
			
			//анимируем переход на расстояние - top за 1500 мс
			if( $(this).attr('href') == '#integration-id' ){
				if(top != false) $('body,html').animate({scrollTop: top}, 1500);
			}else{
				if(top != false) $('body,html').animate({scrollTop: top - 70}, 1500);
				
			}
		});
	}
	if( $(window).width() < 576 ){
		$(".integration__form button").attr('data-popup', 'register')
		$('button, span, a').click(function (e) {
			
			/* $(`.popup`).removeClass('popup_open') */
			if( $(this).data('popup') ) {
				e.preventDefault();
				$(`.popup-${$(this).data('popup')}`).addClass('popup_open')
			}
				
		})
	}

	$('.header__burger').click(function () {
		$('body').addClass('open__menu-mob')
	})

	$('.close__burger, header .bgd').click(function () {
		$('body').removeClass('open__menu-mob')
	})

	$('.poster__form button').click(function (e) {
		let inpEmail = $(this).parent().find('input[type="email"]').val()
		let inpText = $(this).parent().find('input[type="text"]').val()

		$('.popup-register').find('input[type="email"]').val(inpEmail)
		$('.popup-register').find('input[type="text"]').val(inpText)

		if( $('.popup-register').find('input[type="email"]').val() ){
			$('.popup-register').find('input[type="email"]').addClass('full')
			$('.popup-register').find('input[type="email"]').removeClass('empty')
		}
		else{
			$('.popup-register').find('input[type="email"]').removeClass('full')
			$('.popup-register').find('input[type="email"]').addClass('empty')
			$('.popup-register').find('input[type="email"]').attr('placeholder', 'Fill in this field, please! 🙏')
		}

		if( $('.popup-register').find('input[type="text"]').val() ){
			$('.popup-register').find('input[type="text"]').addClass('full')
			$('.popup-register').find('input[type="text"]').removeClass('empty')
		}
		else{
			$('.popup-register').find('input[type="text"]').removeClass('full')
			$('.popup-register').find('input[type="text"]').addClass('empty')
			$('.popup-register').find('input[type="text"]').attr('placeholder', 'Fill in this field, please! 🙏')
		}
	})

	$('button, span, a').click(function (e) {
		/* $(`.popup`).removeClass('popup_open') */
		if( $(this).data('popup') )
			$(`.popup-${$(this).data('popup')}`).addClass('popup_open')
	})

	$('.popup__bgd, .popup__close, .popup-close').click(function () {
		$(`.popup`).removeClass('popup_open')
	})

	$('.faq__item .item__head').click(function () {
		$(this).parent().find('.item__body').slideToggle(200)
		$(this).parent().toggleClass('faq__item_open')
	})

	$('input, textarea').change(function () {
		if( $(this).val() ){
			$(this).addClass('full')
			$(this).removeClass('empty')
		}
		else{
			$(this).removeClass('full')
			$(this).addClass('empty')
			$(this).attr('placeholder', 'Fill in this field, please! 🙏')
		}
	})

	$(".page-up").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

	$('.inp-pass .eye').click(function () {
		if( $(this).parent().find('input').attr('type') == 'text' ){
			$(this).parent().find('input').attr('type', 'password')
		}else{
			$(this).parent().find('input').attr('type', 'text')
		}
		$(this).toggleClass('eye_active')
	})

	$('.slider__block .slider__item').each(function () {
		$(this).find('.dots .current').text($(this).index() + 1+'/')

		if( $(this).index() > $('.slider__block .slider__item').length ){
		  	$(this).find('.dots .current').text('1')
		}
	})

	$('.slider__block').on(`init reInit`, function(event, slick) {
	  $('.dots .all').text(slick.slideCount);
	})

	$('.slider__block').slick({
		slidesToShow: 2
	})

	$('.arr-next').on('click', function() {
	  $('.slider__block').slick('slickNext');
	});

	$($('._scan-order-item._active').attr('href')).addClass('_visible');

	$('._scan-order-item').hover(
		function() {
			if($(window).width() >= 992) {
			
				$('._scan-order-screen').removeClass('_visible');
				$('._scan-order-item').removeClass('_active');
				$(this).addClass('_active');
				$($(this).attr('href')).addClass('_visible');
	
				let index = $(this).data('index');

				if(index % 2) {
					$('.scan-order__image').removeClass('_even')
				}
				else {
					$('.scan-order__image').addClass('_even')
				}

			}
		},
		function() {

		}
	)
	
	$('._scan-order-item').on('click', function(event) {
		event.preventDefault()
		
		if($(window).width() >= 992) {
			
			$('._scan-order-screen').removeClass('_visible');
			$('._scan-order-item').removeClass('_active');
			$(this).addClass('_active');
			$($(this).attr('href')).addClass('_visible');

			let index = $(this).data('index');
			
			if(index % 2) {
				$('.scan-order__image').removeClass('_even')
			}
			else {
				$('.scan-order__image').addClass('_even')
			}

		} else if($(this).hasClass('_active') && $(window).width() < 992) {
	
			$('._scan-order-screen').removeClass('_visible');
			$(this).removeClass('_active');

			let index = $(this).data('index');
			
			if(index % 2) {
				$('.scan-order__image').removeClass('_even')
			}
			else {
				$('.scan-order__image').addClass('_even')
			}

		} else if(!$(this).hasClass('_active') && $(window).width() < 992) {

			$('._scan-order-screen').removeClass('_visible');
			$('._scan-order-item').removeClass('_active');
			$(this).addClass('_active');
			$($(this).attr('href')).addClass('_visible');

			let index = $(this).data('index');
			
			if(index % 2) {
				$('.scan-order__image').removeClass('_even')
			}
			else {
				$('.scan-order__image').addClass('_even')
			}

		}

	})

	function addGuest() {
		let name = $('.menu-page__add-guest--input')[0].value,
			guest = `
			<li class="menu-page__add-guest--item">
				<span class="menu-page__add-guest--guest-name">${name}</span>
				<a href="menu-page-order.html" class="menu-page__add-guest--guest-btn menu-page__form--btn">Order</a>
				<a href="menu-page-checkout.html" class="menu-page__add-guest--guest-btn menu-page__form--btn-2">Pay</a>
			</li>`,
			guestsList = $('.menu-page__add-guest--list');
		
		if(name != '') {
			$('.menu-page__add-guest--input')[0].value = '';
			guestsList.append(guest);
		} else {
			$('.menu-page__add-guest--input').addClass('empty').attr('placeholder', 'Fill in this field, please! 🙏');
		}
	}

	$('._add-guest').on('click', function() {
		
		addGuest();

	});

	$('._add-guest-input').on('keydown', function(event) {
		
		if(event.originalEvent.keyCode == 13) {
			addGuest();
		}
		

	});
	
	function userAddBtns(eventTarget) {
		if(eventTarget.value) {
			let parent 		= eventTarget.parentNode.parentNode,
				userBtns 	= `
				<div class="menu-page__user">
					<a href="menu-page-order.html" class="menu-page__add-guest--guest-btn menu-page__form--btn">Order</a>
					<a href="menu-page-checkout.html" class="menu-page__add-guest--guest-btn menu-page__form--btn-2">Pay</a>
				</div>`;
			
			if(!parent.querySelector('.menu-page__user')) {
				parent.insertAdjacentHTML('beforeend', userBtns);
			}
			
		}
	}

	$('._user-input').on('keydown', function(event) {
		
		if(event.originalEvent.keyCode == 13 || event.originalEvent.keyCode == 9) {
			userAddBtns(event.target)
		}
		
	})

	$('._user-input').on('blur', function(event) {

		userAddBtns(event.target)
		
	})
	
	$('.menu-page__drop-down--btn').on('click', function() {
		let dropDownBtn 	= $(this),
			dropDownBlock 	= $(this).parent().find('.menu-page__drop-down--block');

		dropDownBtn.toggleClass('_active');
		dropDownBlock.slideToggle().toggleClass('_active');
		
	});

	function countPrice(elem, value, init) {
		let parentItem 		 = elem.parents('.menu-page__order-item'),
			parent 			 = elem.parents('.menu-page__order'),
			allParents		 = $('.menu-page__order'),
			startPrice 		 = parentItem.find('.menu-page__order-item--price').data('start-price'),
			price 			 = parentItem.find('.menu-page__order-item--price'),
			priceInput 		 = parentItem.find('.menu-page__order-item--price'),
			allPrices,
			allPricesInput,
			amountPrice 	 = parent.find('.menu-page__order-total-amount--value'),
			amountPriceInput = parent.find('.menu-page__order-total-amount--value-input');
		
		

		price[0].innerHTML = startPrice;
		priceInput[0].value = startPrice;

		if(value != 1) {
			for(let index = 0; index < value - 1; index++) {
				price[0].innerHTML = Number(price[0].textContent) + startPrice;
				priceInput[0].value = Number(price[0].textContent) + startPrice;
			}
		}
		
		allPrices 		 = parent.find('.menu-page__order-item--price'),
		allPricesInput 	 = parent.find('.menu-page__order-item--price-value');


		amountPrice[0].innerHTML = '';
		amountPriceInput[0].value = '';
		
		$.each(allPrices, function() {
			
			amountPrice[0].innerHTML = (Number(amountPrice[0].textContent) + Number($(this)[0].textContent));
			amountPriceInput[0].value = (Number(amountPriceInput[0].value) + Number($(this)[0].textContent));

		})

	}

	$('.count-order__btn').on('click', function() {
		let input = $(this).parent().find('.count-order__input');
		
		if($(this).hasClass('_minus') && input[0].value >= 2) {
			input[0].value = Number(input[0].value) - 1;
			countPrice($(this), Number(input[0].value));
		}

		if($(this).hasClass('_plus')) {
			input[0].value = Number(input[0].value) + 1;
			countPrice($(this), Number(input[0].value));
		}
	});

	$('.count-order__input').on('change', function() {
		
		if($(this)[0].value <= 1) {
			$(this)[0].value = 1;
		}

		countPrice($(this), Number($(this)[0].value));

	})

	$('._add-request').on('click', function(event) {
		event.preventDefault();

		let requestBlock = $(this).parents('._add-request-parent').find('._add-request-block');

		if(!requestBlock.hasClass('_visible')) requestBlock.addClass('_visible');
	});

	$('._select-label').on('click', function(event) {
		event.preventDefault();
	})

	document.querySelectorAll('._select').forEach(thisElement => {
		new lc_select(thisElement, {
			enable_search  : false,
		});
	})

	let formTabCheck = true;
	$('.restaurant-registration__radio-btn--label').on('click', function(event) {
		event.preventDefault()

		if(formTabCheck) {		
			formTabCheck = false;
			let input = $(this).parent().find('.restaurant-registration__radio-btn--input');
			input.prop( "checked", true);

			if($(this).hasClass('_form-tab-btn')) {
				let section = $('#' + $(this).data('form-section-id'));
				
				$('._form-tab-section-parent').css('min-height', $('._form-tab-section-parent').height() + 'px');
				$('._form-tab-section').fadeOut(300);
				setTimeout(() => {
					$('._form-tab-section').find('._add-required').prop('required', false).prop('hidden', true);
					section.find('._add-required').prop('required', true).prop('hidden', false);
					setTimeout(() => {
						section.fadeIn(300);
					}, 100)
					
					setTimeout(() => {
						
						$('._form-tab-section-parent').css('min-height', 0 + 'px');
						formTabCheck = true;
					},600)

				},300)
			} else {
				formTabCheck = true;
			}

		}
	})

	$('.restaurant-registration__radio-btn--info').on('click', function(event) {
		event.preventDefault()

		$('.restaurant-registration__radio-btn--label').removeClass('_info-active');
		$(this).parent().toggleClass('_info-active');
		
	})

	$('.restaurant-registration__radio-btn--info').hover(function() {
		$('.restaurant-registration__radio-btn--label').removeClass('_info-active');
		$(this).parent().addClass('_info-active');
	},
	function() {
		$(this).parent().removeClass('_info-active');
	})
	

	$('body').on('click', function(event) {
		
		let restaurantInfoBtn = event.target.closest('.restaurant-registration__radio-btn--label');
		if(!restaurantInfoBtn) {
			$('.restaurant-registration__radio-btn--label').removeClass('_info-active');
		}
		
	})

	let faqSlideCheck = true;
	$('._faq-item-header').on('click', function() {
		if(faqSlideCheck) {
			faqSlideCheck = false;
			let parent 	= $(this).parent(),
				content = parent.find('._faq-item-content');
		
			parent.toggleClass('_active');

			if(parent.hasClass('_active')) {
				content.slideDown()
			} else {
				content.slideUp()
			}
			setTimeout(() => {
				faqSlideCheck = true;
			},600)
		}
		
	})

	

	/* $('._add-table').on('click', function() {
		let tableNumber = $('._add-table-input').val(),
		hasAllLinks = $('._add-table-list').find('._all-links').length,
		tableAllLinks = `
		<div class="restaurant-registration__tables--min-block _all-links">
			<a href="#" class="restaurant-registration__tables--link">
				<svg viewBox="0 0 16 16" width="16" height="16">
				<path fill="#3A97F4" d="M10.8,2.8c0-0.5,0.2-1.1,0.5-1.5c0.4-0.4,0.8-0.7,1.4-0.8c0.5-0.1,1.1,0,1.6,0.3c0.5,0.3,0.8,0.7,1,1.2
					s0.2,1.1,0,1.6c-0.2,0.5-0.5,1-1,1.2c-0.5,0.3-1,0.4-1.6,0.3c-0.5-0.1-1-0.4-1.4-0.8L5.1,7.3c0.1,0.5,0.1,1,0,1.4l6.3,2.9
					c0.4-0.4,0.9-0.7,1.5-0.8c0.6-0.1,1.2,0.1,1.6,0.4c0.5,0.3,0.8,0.8,0.9,1.4c0.1,0.6,0,1.2-0.2,1.7c-0.3,0.5-0.7,0.9-1.3,1.1
					c-0.5,0.2-1.1,0.2-1.7-0.1c-0.5-0.2-1-0.6-1.2-1.2c-0.2-0.5-0.3-1.1-0.1-1.7L4.6,9.5c-0.3,0.4-0.7,0.6-1.2,0.7
					c-0.5,0.1-1,0.1-1.4-0.1C1.6,10,1.2,9.7,0.9,9.3C0.6,8.9,0.5,8.5,0.5,8s0.1-0.9,0.4-1.3C1.2,6.3,1.6,6,2,5.8C2.5,5.6,3,5.6,3.4,5.7
					c0.5,0.1,0.9,0.4,1.2,0.7l6.3-2.9C10.8,3.3,10.8,3.1,10.8,2.8L10.8,2.8z"/>
				</svg>
				Share with link all QR-codes
			</a>
			<a href="#" class="restaurant-registration__tables--link">
				<svg width="16" height="16" viewBox="0 0 16 16">
					<path d="M13.7669 8V13.8333H2.10026V8H0.433594V13.8333C0.433594 14.75 1.18359 15.5 2.10026 15.5H13.7669C14.6836 15.5 15.4336 14.75 15.4336 13.8333V8H13.7669ZM8.76693 8.55833L10.9253 6.40833L12.1003 7.58333L7.93359 11.75L3.76693 7.58333L4.94193 6.40833L7.10026 8.55833V0.5H8.76693V8.55833Z" fill="#3A97F4"/>
				</svg>
				Download all QR-codes
			</a>
		</div>
		`,
		tableItem = `
		<li class="restaurant-registration__tables--item">
			<span class="restaurant-registration__tables--number">
				Table ${tableNumber}:
			</span>
			<img src="img/restaurant-registration/qr-code.png" width="150" height="150" loading="lazy" alt="" class="restaurant-registration__tables--qr-img">
			<div class="restaurant-registration__tables--min-block">
				<a href="#" class="restaurant-registration__tables--link">
					<svg viewBox="0 0 16 16" width="16" height="16">
					<path fill="#3A97F4" d="M10.8,2.8c0-0.5,0.2-1.1,0.5-1.5c0.4-0.4,0.8-0.7,1.4-0.8c0.5-0.1,1.1,0,1.6,0.3c0.5,0.3,0.8,0.7,1,1.2
						s0.2,1.1,0,1.6c-0.2,0.5-0.5,1-1,1.2c-0.5,0.3-1,0.4-1.6,0.3c-0.5-0.1-1-0.4-1.4-0.8L5.1,7.3c0.1,0.5,0.1,1,0,1.4l6.3,2.9
						c0.4-0.4,0.9-0.7,1.5-0.8c0.6-0.1,1.2,0.1,1.6,0.4c0.5,0.3,0.8,0.8,0.9,1.4c0.1,0.6,0,1.2-0.2,1.7c-0.3,0.5-0.7,0.9-1.3,1.1
						c-0.5,0.2-1.1,0.2-1.7-0.1c-0.5-0.2-1-0.6-1.2-1.2c-0.2-0.5-0.3-1.1-0.1-1.7L4.6,9.5c-0.3,0.4-0.7,0.6-1.2,0.7
						c-0.5,0.1-1,0.1-1.4-0.1C1.6,10,1.2,9.7,0.9,9.3C0.6,8.9,0.5,8.5,0.5,8s0.1-0.9,0.4-1.3C1.2,6.3,1.6,6,2,5.8C2.5,5.6,3,5.6,3.4,5.7
						c0.5,0.1,0.9,0.4,1.2,0.7l6.3-2.9C10.8,3.3,10.8,3.1,10.8,2.8L10.8,2.8z"/>
					</svg>
					Share with link
				</a>
				<a href="#" class="restaurant-registration__tables--link">
					<svg width="16" height="16" viewBox="0 0 16 16">
						<path d="M13.7669 8V13.8333H2.10026V8H0.433594V13.8333C0.433594 14.75 1.18359 15.5 2.10026 15.5H13.7669C14.6836 15.5 15.4336 14.75 15.4336 13.8333V8H13.7669ZM8.76693 8.55833L10.9253 6.40833L12.1003 7.58333L7.93359 11.75L3.76693 7.58333L4.94193 6.40833L7.10026 8.55833V0.5H8.76693V8.55833Z" fill="#3A97F4"/>
					</svg>
					Download
				</a>
			</div>
			${(!hasAllLinks) ? tableAllLinks : ''}
		</li>
		`,
		tableList = $('._add-table-list');

	if(tableNumber) {
		tableList.append(tableItem)
		$('._add-table-input').val('');
	}
	

	}) */

})































