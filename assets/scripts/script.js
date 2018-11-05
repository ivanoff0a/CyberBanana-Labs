$(document).ready(function() {
	let currentUser = null;
	let userLoggedIn = false;
	let newUserId,
	 	newUserName,
	 	newUserAge,
	 	newUserType,
	 	userSameId;

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

	$('body').on('click', '.user-list__add', function() {
		modalService.openModal('newUser');	
	});

	$('body').on('click', '.modal__bg', function() {
		$('.modal').remove();	
	});

	$('body').on('click', '.js-sendBtn', function() {
		userList.push({
			id: getId($('body').find('.js-newUserType').val()), 
			type: $('body').find('.js-newUserType').val(),
			name: $('body').find('.js-newUserName').val(),
			age: $('body').find('.js-newUserAge').val(),
			img: getImage()
		})
		console.log(userList);
		$('.modal').remove();
		interfaceBuilder.buildAdminInterface(userList);
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

	function getImage() {

	}

	function getId(type) {
		var min, max, id;
		if (type == 'Admin' ) {
			min = 7000; max = 7999;
		}
		if (type == 'User' ) {
			min = 3000; max = 3999;
		}
		if (type == 'Hacker' ) {
			min = 1000; max = 1999;
		}

		id = getRandomInteger(min, max); 

		if (isIdDuplicated(id)) {
			getId(type);
		} else {
			return id;
		}
  	}

	function getRandomInteger(min, max) {
		var rand = min - 0.5 + Math.random() * (max - min + 1);
    	rand = Math.round(rand);
    	return rand;
    }  	

	function isIdDuplicated(userId) {
		userList.forEach(function(user) {
			if (userId == user.id) {
				userSameId = true;
				getRandomInteger(min, max);
			} else {
				return false;
			}			
		});		
	}

	function checkPass(userPass) {
		userList.forEach(function(user) {
			if (userPass == user.id) {
				userLoggedIn = true;
				currentUser = user;
			}			
		});	

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