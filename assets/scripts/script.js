$(document).ready(function() {
	let currentUser = null;
	let userLoggedIn = false;
	let userList = [
		{
			id: 7856, 
			type: 'admin',
			name: 'Антон',
			age: 29
		},
		{
			id: 3800, 
			type: 'user',
			name: 'Антон',
			age: 29
		},
		{
			id: '0475', 
			type: 'hacker',
			name: 'Антон',
			age: 29
		}				
	];

	// interfaceBuilder.build('login');

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
		for(let i = 0; i< userList.length; i++){
			if (userPass == userList[i].id) {
				userLoggedIn = true;
				currentUser = userList[i];
			}
		}

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