$(document).ready(function(){

    let btn = $('.menu');
    let menu = $('.slide-menu');
    let BtnCall = $('.call');
    let BtnCallMob = $('.call__mob');
    let BtnInfo = $('.information');
    let BtnPrice = $('.price');
    let BtnOrder = $('.order');
    let form1 = $('.form-1');
    let form2 = $('.form-2');
    let call = $('.call-me');
    let WorkList = $('.links')

    // Отмена скрола вверх по клику на ссылки "Примеры моих работ"
    WorkList.click(function(e){
        e.preventDefault();
    });

    //Отправка данных с помощью Ajax
    call.click(
		function(){
            form1.removeClass('form_open');
            form2.removeClass('form_open');
			return false; 
		}
    );
    // function call() {
    //     let msg = $('#form1').serialize();
    //     $.ajax({
    //         type: 'POST',
    //         url: 'mail.php',
    //         data: msg,
    //         success: function(response) { //Данные отправлены успешно
    //             alert('Данные отправлены');
    //         },
    //         error: function(response) { // Данные не отправлены
    //             alert('Ошибка');
    //         } 
    //     })
    // }
    // $('#form1').submit(function() {
    //     $.ajax({
    //         url: "mail.php",
    //         type: "POST",
    //         data: $(this).serialize(),  // Сеарилизуем объект
    //         success: function(response) { //Данные отправлены успешно
    //             alert('Данные отправлены');
    //         },
    //         error: function(response) { // Данные не отправлены
    //             alert('Ошибка');
    //         }
    //     });
    // });
    $("#form1").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form1").trigger("reset");
		});
		return false;
	});
    
    // Скролл nav
    $('nav ul li a').click(function(e){
		e.preventDefault();

		let href = $(this).attr('href');
		let offset = $(href).offset().top;

		$('body, html').animate({
			scrollTop: offset,
		}, 500);
	});

    // Левое бургер меню
    btn.click(function(event){
        event.preventDefault();
        menu.slideToggle();
    });

    // Появление формы для кнопок "Заказать звонок"
    BtnCall.click(function(e){
        event.preventDefault();
        form1.addClass('form_open');
    });
    BtnCallMob.click(function(e){
        event.preventDefault();
        form1.addClass('form_open');
    });
        // Закрывает форму если клинуть не по блоку с формой
    $(document).mouseup(function(e){
        let div = $('#popup');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            div.removeClass('form_open');
        }
    });

    // Появление формы для остальных кнопок
    BtnInfo.click(function(e){
        event.preventDefault();
        form2.addClass('form_open');
    });
    BtnPrice.click(function(e){
        event.preventDefault();
        form2.addClass('form_open');
    });
    BtnOrder.click(function(e){
        event.preventDefault();
        form2.addClass('form_open');
    });
        // Закрывает форму если клинуть не по блоку с формой
    $(document).mouseup(function(e){
        let div = $('#popup-2');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            div.removeClass('form_open');
        }
    });
    

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 25,
        responsive: {
            0: {
                items:1
            },
            500: {
                items: 2
            },
            1025: {
                items: 3,
                nav: true,
            },
        }
    });

    $(function(){
        $('.phone__input').mask("+7(999)-999-99-99")
    });
});

