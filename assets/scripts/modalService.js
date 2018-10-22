const modalService = {};

modalService.modals = {
	base: '	<div class="modal">\
				<div class="modal__bg"></div>\
				<div class="modal__body js-modalBody card"></div\
			</div>',
	newUser: '<h4 class="modal__title">Create new user</h4>\
			<form class="auth-form">\
				<div class="row">\
					<fieldset class="input js-authPanel">\
						<label for="userName">Name</label>\
						<div class="input__container">\
							<input autocomplete="off"\
								id="userName"\ 
								class="input__field js-newUserInput"></input>\
						</div>\
						<div class="input__error">\
							<span>No such user</span>\
						</div>\
					</fieldset>\
					<fieldset class="input js-authPanel">\
						<label for="userAge">Age</label>\
						<div class="input__container">\
							<input autocomplete="off"\
								id="userAge" \
								class="input__field js-newUserInput"></input>\
						</div>\
						<div class="input__error">\
							<span>No such user</span>\
						</div>\
					</fieldset>\		
				</div>\
				<fieldset class="input js-authPanel">\
					<label for="userType">Type</label>\
					<div class="input__container">\
						<input autocomplete="off"\
							id="userType"\ 
							class="input__field js-newUserInput"></input>\
						<div class="input__btn js-authBtn"><img src="assets/img/right-arrow.svg"></div>\
					</div>\
					<div class="input__error">\
						<span>No such user</span>\
					</div>\
				</fieldset>\
			</form>';			
}

modalService.openModal = function() {
	modalService.build('base');
	modalService.build('newUser');
}

modalService.build = function(modal) {
	$('body').append(modalService.modals[modal]);
};