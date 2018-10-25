let interfaceBuilder = {};

interfaceBuilder.parent = $('.js-mainParent');
interfaceBuilder.interfaces = {
	login: '<div class="auth-panel">\
				<h1>CyberBanana Labs</h1>\
				<div class="card">\
					<form class="auth-form">\
						<fieldset class="input js-authPanel">\
							<label for="userPass">Insert User Pass</label>\
							<div class="input__container">\
								<input autocomplete="off"\
									   id="userPass" \
									   class="input__field js-authInput"></input>\
								<div class="input__btn js-authBtn"><img src="assets/img/search-icon.png"></div>\
							</div>\
							<div class="input__error">\
								<span>No such user</span>\
							</div>\
						</fieldset>\
					</form>\
				</div>\
			</div>',
	base: '	<div class="panel">\
				<div class="card">\
					<div class="card__header js-cardHeader">\
					<h2></h2>\
					</div>\
					<div class="card__body js-cardBody">\
					</div>\
				</div>\
			</div>'			
}

interfaceBuilder.buildAdminInterface = function(userList) {
	interfaceBuilder.build('base');
	interfaceBuilder.parent.find('.js-cardHeader h2').text('Admin Interface');	
	interfaceBuilder.parent.find('.js-cardBody').html(interfaceBuilder.prepareUserList(userList));
}

interfaceBuilder.build = function(interface) {
	interfaceBuilder.parent.html(interfaceBuilder.interfaces[interface]);
};

interfaceBuilder.showMessage = function(message) {
	interfaceBuilder.hideCurrent();
	setTimeout(function() {
		interfaceBuilder.parent.html('<h1>' + message + '</h1>');
	}, 600)
}


interfaceBuilder.hideCurrent = function () {
	interfaceBuilder.parent.find('div').fadeOut(1200);
};

interfaceBuilder.prepareUserList = function(userList) {
	let result = '<div class="user-list">';

	userList.forEach(function(user) {
		result += '<div class="user-list__item card">\
						<div class="user-list__avatar"\
								style="background-image: url(' + user.img + ');">\
						</div>\
						<div class="user-list__info">\
							<p class="user-list__type">' + user.type + '</p>\
							<p class="user-list__name">' + user.name + '</p>\
							<p class="user-list__id">ID:<span>' + user.id + '</span></p>\
						</div>\
					</div>';				
	});

	result += '<div class="user-list__item user-list__add card">\
					<div class="user-list__add">\
						<img href="assets/img/add.svg">\
					</div>\
				</div>';		

	return result + '</div>';
}