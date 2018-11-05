const modalService = {};

modalService.modals = {
	base: '	<div class="modal">\
				<div class="modal__bg"></div>\
				<div class="modal__body js-modalBody card"></div\
			</div>',
	newUser: '<h4 class="modal__title">Create user</h4>\
			<form class="new-user-form">\
				<div class="row">\
					<fieldset class="input js-authParent">\
						<label for="userName">Name</label>\
						<div class="input__container">\
							<input id="userName" \
							       type="text" \
							       class="input__field js-newUserName">\
						</div>\
						<div class="input__error">\
							<span>No such user</span>\
						</div>\
					</fieldset>\
					<fieldset class="input js-authParent">\
						<label for="userAge">Age</label>\
						<div class="input__container">\
							<input id="userAge" \
							       type="text" \
							       class="input__field js-newUserAge">\
						</div>\
						<div class="input__error">\
							<span>No such user</span>\
						</div>\
					</fieldset>\
				</div>\
				<fieldset class="input js-authParent">\
					<label for="userType">Type</label>\
					<div class="input__container">\
						<input id="userType" \
						       type="text" \
						       class="input__field js-newUserType -with-btn">\
						<div class="input__btn js-sendBtn"><img src="assets/img/right-arrow.svg"></div>\
					</div>\
					<div class="input__error">\
						<span>No such user</span>\
					</div>\
				</fieldset>\
			</form>'		
};


modalService.openModal = function(modal) {
	$('body').append(modalService.modals.base);
	$('.modal__body').append(modalService.modals[modal]);
}

