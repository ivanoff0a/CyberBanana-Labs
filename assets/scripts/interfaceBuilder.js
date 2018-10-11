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
			</div>	'	
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