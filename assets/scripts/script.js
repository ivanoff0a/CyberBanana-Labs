$(document).ready(function() {
	let currentUser = null;
	let userLoggedIn = false;
	let newUserId;
	let newUserName;
	let newUserAge;
	let newUserType;

	let userList = [
		{
			id: 7856, 
			type: 'Admin',
			name: 'Anton',
			age: 29,
			img: 'https://66.media.tumblr.com/1980269315c4de36d03e616d073e8b85/tumblr_pgehj3xMFu1qz9v0to10_1280.jpg'
		},
		{
			id: 3800, 
			type: 'User',
			name: 'Aaron',
			age: 28,
			img: 'https://66.media.tumblr.com/53bb4c5d3ab31cd4ab9947d41b64f331/tumblr_pgehj3xMFu1qz9v0to2_1280.jpg'
		},
		{
			id: '0475', 
			type: 'Hacker',
			name: 'Andrew',
			age: 16,
			img: 'https://66.media.tumblr.com/0bf03881e86561aebd6aad8d6a44ce8a/tumblr_pgehj3xMFu1qz9v0to7_1280.jpg'
		}				
	];

	interfaceBuilder.buildAdminInterface(userList);

	$('.user-list__add').click(function() {
		modalService.openModal('newUser');	
	});

	$('body').on('click', '.modal__bg', function() {
		$('.modal').remove();	
	});

	$('body').on('click', '.js-sendBtn', function() {
		userList.push({
			id: 3333, 
			type: newUserType,
			name: newUserName,
			age: newUserAge,
			img: 'https://66.media.tumblr.com/1980269315c4de36d03e616d073e8b85/tumblr_pgehj3xMFu1qz9v0to10_1280.jpg'
		})
		newUserName = $('.js-newUserName').val();
		newUserAge = $('.js-newUserAge').val();
		newUserType = $('.js-newUserType').val();
	});

	$('.js-authBtn').click(function(){
		checkPass($('.js-authInput').val());
	});

	$(".js-authInput").keydown(function(event){
	    if(event.keyCode == 13){
	        event.preventDefault();
    		checkPass($('.js-authInput').val());	        
	    }
	});	

	$('.js-authInput').focus(function() {
		$('.js-authPanel').removeClass('-error');
		$('.input__field').addClass('-redError');	
	})

	function checkPass(userPass) {
		userList.forEach(function(user) {
			if (userPass == user.id) {
				userLoggedIn = true;
				currentUser = user;
			}			
		});

		// for(let i = 0; i< userList.length; i++){
		// 	if (userPass == userList[i].id) {
		// 		userLoggedIn = true;
		// 		currentUser = userList[i];
		// 	}
		// }		

		if (!userLoggedIn) {
			$('.js-authPanel').addClass('-error');
		} else {
			interfaceBuilder.showMessage('Welcome on board, ' + currentUser.name)
		}	
	}


	function setActions() {
		if (userType == 'Admin') {
			setAdminActions();		
		} else if (userType == 'Hacker') {
			setHackerActions();
		} else if (userType == 'User') {
			setUserActions();
		}	
	}

	function downloadInternet() {

	}

	function makePost() {

	}

	function uploadPost() {

	}	
	
	

	function setAdminActions() {
		
	}

	function setHackerActions() {
		downloadInternet();	
	}

	function setUserActions() {
		makePost();
		uploadPost();	
	}	
});