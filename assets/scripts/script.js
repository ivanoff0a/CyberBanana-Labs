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
			img: 'data:image/jpeg;base64,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'
		},
		{
			id: 3800, 
			type: 'User',
			name: 'Aaron',
			age: 28,
			img: 'https://images.megapixl.com/317/3175881.jpg'
		},
		{
			id: '0475', 
			type: 'Hacker',
			name: 'Andrew',
			age: 16,
			img: 'https://sadanduseless.b-cdn.net/wp-content/uploads/2011/12/hacker1.jpg'
		}				
	];

	
	interfaceBuilder.build('login');

	$('body').on('click', '.js-addBtn', function() {
		modalService.openModal('newUser');	
	});

	$('body').on('click', '.js-deleteBtn', function() {
		userList.splice(($(this).index), 1);
		interfaceBuilder.buildAdminInterface(userList);	
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
			img: getImage($('body').find('.js-newUserType').val())
		})
		$('.modal').remove();
		interfaceBuilder.buildAdminInterface(userList);
	});

	$('body').on('click', '.js-logOutBtn', function() {
		interfaceBuilder.build('login');
		userLoggedIn = false;
		currentUser = null;
	});
	$('body').on('click', '.js-authBtn', function() {
		checkPass($('.js-authInput').val());
	});

	$('body').on('keydown', '.js-authInput', function(){
	    if(event.keyCode == 13){
	        event.preventDefault();
    		checkPass($('.js-authInput').val());	        
	    }
	});	
	$('body').on('focus', '.js-authInput', function(){
		$('.js-authPanel').removeClass('-error');
		$('.input__field').addClass('-redError');	
	})

	function getImage(type) {
		switch(type) {
			case 'Admin':
				return userList.img = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUWFRcVFRcVFRUXFRcWFRYXFxUVFxUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGi0fHSUtLS0tLS0rLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8tLS0tLS0tLS0tLf/AABEIAOcA2gMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIEBQYDBwj/xABAEAABBAADBAgDBQUIAwEAAAABAAIDEQQSIQUxQVEGEyJhcYGRobHB8CMyQtHhBxRScoIVM1NikrLC8Rai0hf/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIEAwX/xAAnEQEBAAICAQQBBAMBAAAAAAAAAQIRAxIhBBMxYTIiUVJxQYGhFP/aAAwDAQACEQMRAD8A9xSEJUIESoSIFQhCASEJUIESoSIFQhI5wGpQKkXA42Pi8Lsx4IsG02aKAlQhAIQkc6kCpEJUCAJUIQCEIQCRCVAmVCVCAQhCAQhCBrzyShKhAIQhAKLjpy0aaaXZ4KUsx0w6xwDWaWQ0eepce4Uq53U2vx49stKvbPSl0VBjwRdEgcO8lUjulr+0SSW3oe5WkPRsAfeu9Tdmz6rrD0bYLvW1n72tntSM5/5NnpwrW9HHVWWzdvPBtrwPM6eLSjafRCEi2tojkaWcOHfAR2i4Dfm107zxUeC42f09W2Rt9spDXCidxG4/krteNbL2i5jwQ0ht2CL4dw+S9Y2XjmzRh44jUcjxXbjyt8Vm5cJPMSXyJGtvVKyPmnrq4gBKhCAQhCBCmsJ4p6EAhIlQCEIQCEJj22gclQhAIQhAIQmvF6IFVVtl2rfrx+XorVqouk2IEeVxa92hvI0uI79FTk/F14fzjnG5dS8Uq7BbQZILZfgQWn0KTHbXiiHbvwa0uPoAuErXcd1Ie9Uu2NnteCdxUjD7UbJqI5QObmEe29GJdmGirXSMRA3LLlGlnyvn6L07obNbHDwO/vI+S8rx5c2U1o4kAnTTnv4H5r1XoVAG4dp4kCxyq+/vXXCeWTlvitChCF3ZgkSpCgVCawUnIBCEIBIlQgEia1tFPQIlQhAIQhAISE0hAJUIQCzHTbBmVrGh5aLt2UkFzbFtsbr5rTqp20QC0nkVTk/F14fzjGbB2S+KZ5BAiN5WAk0O8nijG7NMjjZIbYut9ca4X4++434kGUuG7gomHxDQ6naEi+az3zdt+Msmoy0exJ24hzoH5I82jS9xBZxzCtHLTMBqnalT5ntA0UMc1GXmmM1ixu1NlPlnJa7LR1PcVvehtx1DvGTNZ3jUDVUWJw+a21eY67t3f3UPdarorhcrC8jUgNF8m/qfZMLbnJEcuGM47lV6hc5pQ0Wd35pIZw+6vTmtjzHVCEIBIlQgEISB1oFQhCASUlQgEJEqAQktcMbFmYRx3jySpk3XZzbSqFsrFZwWneN3eOBU5RLubTljcbqhCRKpVCp+k8JdFbd4Psd6uEyWMOBB3EUq5Tc0vhl1ylefvPWMcGiRuTsklprdmFVvsHeFWtlEILnRTnSsxY46a3p/SfRaTGh0LjlJNaUCRY56d3MKombJM7NJmA5ZnHnz04ngslmnrY2WbnwNnbQEzA9tlp3FzXNJ8nAct6t8IwE9rcG5ie4b1Vtuwxo0U50l/ZR6k/fdwoa5R3brTFz5L/iIhxYEzWBoMsrrDf4W7tfhXcSt7hIsrGtO8AX48Vndi9Hy3EOxEnABsY4kAVmPutMtHFhryw83J21DJo8wo2N27uNpIIAy6JN77rw4BdULq4BCEIBCCUiASBtJyEAhCEAhCS0ASmPfySyDkkZHzQI1h3rqkSoKNzjHNoNAdf5XfXsrb95bRIN0LVZtCR3WGi2gANfX5qJPMdwA15ag+fBcO/XbX7feSrzB4nrATVUa9guzjWqptiZmvcHVRGmvEbvYn0VwXhdcLbHDlxmOWoVp4pHOSApCryONrG/vBaXh+pD3+gca9qUDHbaY3QX5CyrLpJF1c1/hkGYfzDRw+B9VncXADqvPztxysexxayxmUd8Hii86aD38ytF0aYBIXGtBlb3uOvyKymEdRTto7aOH6l100SjP4OBbfkSPdTx5as2rzY243T1RhvVOUXZ2KEjA4cQpS3PLCEIQCa54TiuIYSdUBqV1buQBSVAIQhAIQkQNa6zSekpCBUIQgEhNapUjm2CDx0QYXpRI5xJaSBvJBINcBoqDZe1JonAFzi07xv48L3aLU7XwWbskE5XVx5GjXoq/A7NF0RxNXvq7HsT6LHcbvb1MM8euidGpXxytdIbLjlJv+LQfFborITMDXA8iK8itYD9ea0cPiWMfq72ymTswoK5wnT2TiV2ZFb0jwHXQOaB229tn8zdw89R5rCtt7A4A6931x07l6BjscGNO66J1NADmTwCwrsUJXvygAF2YVoLGoNcOO5ZfUYzxW/0eWWrihYZ92eQtVHSOMvirna1LMOBG4VRKgY2FlUVl+G7W17+y7aZlwrQ49ph6t3i3cfMFp81tw/WjoV510Hkbh4p5A0lvWVQq7DQSfQha3Zm2I8Q22ggjRzTV9x0XoYXcjyObHrndLtCjxy8F2j71ZzlOQhCJCEIQIlQq/CMeHNvNxuya7uKCelQhAIQhAIQktAqRCVBR7bGV4dwcK8x+leirJngaq46QOGQA781jyu/isZj533XDmsvLdZabvTztjtKfMZZWRt4uF+F6nyAK2Bdr5LJdE2298ngwf1Wf+I9Vp5HV9d678M/Ttn9Rf1a/ZJa7f4qNtDGBjdNXH7o+fguUk5GjRZO7lys9ybhcLRLnHM528nluocgurOgSbNOJhLHktJsk/wCYHsk1VjuWdZhDESwinN0K3RYRq3zHAqo6RYXOzrmjtNHaHHLz8vha4c3HubjX6Xm65db8VRdcdxULExF5DWgknQAakldmvWl2TgepGYtDpSN3CMcj3nj6c1l48LndNvLyzjx2h7M6P/u2HlzOJdJRcL7II0AaOdE2ePkmbLwzoXh43HRw7uf1zV+6I0OscCeNChfcElDkt8wk1p5OXJcrbUslTITYVeArGIUB4K1VhyVCRVWKhJaVAIQhAiVCRAqEloQKmubaVKgEITXFBn+kj+00caJ9T+ix+1n60tHtqa8Q9p4BvoR+YKyW38SGhzz+EE/kFh5bvOvT4Zrjn9NlsjB9Thml281IfPWv9IAVhLqFmsZFiWsw9vObKBODuIMTy4AcCHBgtX8D7aL5D4LfjNTTzMru2u8f18V2A+f5rjEu7Py/JSoTNSC4Ed+vpy+KUx37Jgwvf9XaCs2bsJsczn32d8Y4tvffhuHirSWRrLa0WTv/AFSlho6nxRDABrv71GOMx8RfPPLO7riyI7z9b13jh1XXL9eqV1hrqFmtApUcswzUOA91Pj3DwCqsK3U+BvxVsNAoqYVIUJVCxrW0nIWBwe0nztdI5xoySZdTWTMcmn8tDyUybRbpuZMSxu97R4kKNJteEfivwBKyRCcFbqr2aKTbrfwsJ8aCjSbcedzWj1KqQnKdRHar3Y2Ke9zsxsVyG8n/ALVtaq+j8fZc7ma9B+qtVS/K8+AhCFCQmEpHuXN0rRxHqp0raxfSWTLjRyfCPVr3f/QXbZexQS3ETjQEOiYf4hq17vDgPPkrGaCCTEh8ll7GkMH4NTevM6bjous8hJ1XKcU73KtF9RfbmEV21pDbeWpPjuHzUuJ25QdrfhP1vC6tf9eS7My2hcPgu4ePrxVYyX5pzpvn8FKE3EYoMF79a+J+SbhcWX3pVOrfe7X5qvcQ7f4+jVLwxa3Qaa/IIlY3p9d6rcFO4NF/VBSeuGtLhG9ob9cyglicV9cv+kMls6fXFVM0+v14fIrtg5D2j3e53IJuHlt48yVOslVuy25nE8grcClWrQN3JUIUJQNv4vqcNNLxZE8jxDTl96WK2RD1cEbeTR7q+/aFNWEEY3yyxx+WbO72YVUnQVy09FfFTIpKULnacCrKOgT1zaV1YL0QajZMeWJveL9TfwUxNjZQA5AD0TlydiFJl705MeTwQNcABZ91j9ryl0pd315BajaclNrn9fkszNFfqpVqJjIzma69HMIPiCHN/wCXqp+C2jfZkH9XHhv5703FMqhyHxUKM0bUyK7WePiBZmBBHcorSu5eWtFGtL+KjOeSbPyCFSQ7RI4/Ncw7gn381KDr+fwUuJm8nv8AkuELL9/iE+eWzlHC79aQdXPyg+f18FVMnJ48T8bXXEuOVx8a8eHwUOJlih5KFkhr7U1rqZfM16D9UyGOhZ0AFk9wCj4PFB72tu+OUa8OXoiWh2M2hrx1Vmq2OURjO80K8/ABdMPtSN4Juq57/ZVtm18cbZvSchNjeHAEGwdxSlEMZ04lzYnCQ/w9ZM7yAY3/AHPURxXPa0vWbRmd/hRRxDuJuR3+8IcV0nw45Xyfac1cgU4OVkbdgVO2UzNKwd9+mvyVaHK76NMt5dyb7k/kCovwtPlpElprTqnrk6kSoQgqtr7x4KokCu9rs0B8vr1VJJ9eatHPJDxB1PebPt+SjkE6DedB5rrM7UlT+j+GJlBrQAu+Q9z7KUT5O2nB1eVvJjfXj8FVl6v+krNWnmK9D+qzE79a8SqxexMgeuwf9eagxP8Ar0XaF1/X+ZWU0sBJQ9finjstJO8/mucY5/WqbLOCavh8XUpDnMBjJP1vSt6uIAuOtbvr61XHESfZmjd/r+SjYbAPk7TjQ3671VZNE/WA2KHL8+aZBJHDXZGZ3LTQcz5pMZi4oGUSCdwHM8vb2VM7HNlwrcRbc7G6ZnAAncRZ0PNVz3rw6cXW5SZfCr6XdIjDqX5n58tH1du3acuYUDYu258Saa+gBbuzqLOla6rC9IMaJwZXySdcbpmQFvdrm00A1pXP7MNpubP1cga3Mw5ddSWkGq8L9FluF1t6E5se0xx+HsHRrbLIgYXyufRvM7V1uAcRQ3DXctc03r6LwbC7UMe2pI5LaHgAE0WHsNc1wrcKDgttienUeFbiY5JGFzWOfAA4EvtlgCrrtWK03cja64WzxWflwmW8p/tXbNxHWOnm/wAXESuH8ocWs/8AVrVLzqt2NHkgiZxDBfjWql5lqeXb5SQ9OtR2ldQVJt0zLVdFY/s3O5uryA/UrKxxucaAJPctzsnDGOJjDvAs+JNn4qud8OvH5qYkSoXN2JaLTbRalGzMUwOaQfXkeBWcmhI5f6hyWhmdoqPGtUxzyyQIcKSbNeGYe60WzzHG2gbJ+8a3/os459LpFiSFNUnJpbbezSNYIwD2u3mJBDaOrdDZutFnZtnuBJNe/wCSsxjCuUk9qNJvIqurrj9afknxurj9Xa7ytBUcwq0U9yuhc47nD352mRYdwvtNs+KGspZfb2M2lE5xZh2TRWcpZIQ/LwDmVd+FppMztaec0MpkYPUn0Hior8W86B9jwIHpa88/84ew1LhXNPLPr6OAXGbp012hMrB3Rj4h6jTpK2uKihztkndmcwkszH7pIo5WN7jW4lV+0cVE5uVkZNX3aD/KAT6gLJxdJ8OTfWOu+LHDX+l1+6m4fb+FGnWgHvZIB/py/NNJ2dLssu4VRBLW8r11F0ueG2Ax0+cNc2nDVp7gCdLyu7yeJVlBt3C6N6+OgK1PwaaAU/B7SwzndmWJxOgBkZr41oPQpomSywHQ7Dub2w551t7nEu5g5rAFd1o6Y4GHD4GPDxtFyzRRjUvNZ+skIe7Uimu3DjvV1s/GwloudjtNGseBfDRxPu3Ksx0hx4xGKw8TIw0RdZNJT43kuoRtLiwng52rjaSGWV1fKxa6gAnNeqebbUQdkjzTv3ZYhYv+bd6Wp2D2RjZ9ZHNwzD+Fnalrvdw9ldmScRjY4v7x4byG9x8GjUqXs5mJxJH7vBkZ/iz6CubWDV31orLYvRjDQHM2PO/eXydp189dAtJG/vUWph+wtl9QynPMjzq95oDwa0aNb3KyUWKVdw5UsaMco6ITbRahbZpcmPkpfKmHwrHPa0tHac1u4cSB8163L+zDZbZ2wZ8TbnZQRJhzTurdJTmiO2jKw6nu4aq9xkRp6O96iYkWvnvCdG3TSzRwhp6p7mjMyQ3ReBbmMLWXk3vLRr41Ml6HOc94hALWujaM7ZB/edUL6wR9Xo6YaZs1A6c56z90XHb2OeNRSKXkEfRR7qDJMO8kAgAyAkOe+JtZ4wLMsZYBvsjgbUaHYL3OezsB0cTZnCnudTmsdlDGMLi4B4zaU2nWRSnqp7X29oDkudeQzdFXBwZHJFI5zc0baka6Qtgjnka3MzKMrZRq5wvhrYDZejgEEsokjcYZckjm5xGNCMgzsBc8vAAqwbu6BIjqez9vYLS2vIdldF+tLS58YaYjK4AuzsYWyBj3WzLl6yOiASdRpraZD0Ve4sHWQjrBnjP2nbjEccr5GjJoGslBp2VxyuABpTqHs/b15z1DxLHHivKNqdHXQ5znifk7RAzh/VmUwtlpzQKLwBWYkZgao2qnIOQ9FMiLw/b1rEbOc7R2o79fiq6Xo1Ed8MZ/ob+S82yDkPRGQch6JpX/AM8/d6C/ohhzvgb5WPgVyPQnC/4NeDnfC1g8g5D0RkHIJ1T7N/lW2m6A4Vwr7Vve1w+YXIfs8gH3ZpL1+8GkUQRwynjz4LHZByCMg5BOqfay/k1rf2bR7uvIABoBl79fxONDfu5lTNkfs9jYQXyaNsARgtJa6rDnuJOtfhA0scSsNkHIIyDkPROqfby/l/x7zszZccLajY1g7gL8zvJ7lZMDQvnPqxyHojqxyHonU9r7fSIlXRj181dWOQ9Ajq28h6BOp7X2+oIXqS16+WcPhmOcGnK0E0XECh3lTv7HisfbwUSAd1iwTdHfVAac+4qOq0wfTjZU7MvlB0DbqgfIJOpb/CPQJ0T1doZMrmuG9pDh5G/kvQv/ANT+1679wZnzZ7/eZcufJ1efJly5snZurrRKhWslXYqHbUzHPdG4NzyGUjJG+n9qnNztJaQHuFijRXRvSLFCvtdRVHq4i4AOa4AOLLDc0bDlBq23SEJpDlg9rSMc0uJe1uXs2G2I5TMwZgLAEri6xrwsaUxu1JRK+cOHWPc55eWMcQ5xLi5he05HWTq2iOaEIOn9uYigOsApuUERxB4GRsRyyBudpLGMaSCCQ0Ak0iTbmIcHgvAD82cNihYH5rzF4YwBxN3Z1sA7wCBCDo7b8wYxkZEYZEIjlbHmeAZPvPLcxFSu7JJA3jVcmbbxAaGiTQNDG9iPM1oYxmVj8uZgLY2AgEXl1vVCE0DGbanlaWyPBDvvVHE0kB5eGlzGg5c7i7LdWbpV6EKQIQhAIQhAIQhAIQhAIQhAKRhMV1d/Zxvuv7xuaq5aikIQdxtLf9hBqb/u9BpWguu/xKb/AGhqSIYdecdgGgCQL01180qFAhvdZJoCyTQ0AvgByTUIUj//2Q==';
				break;
			case 'User':
				return userList.img = 'https://images.megapixl.com/317/3175881.jpg';
				break;
			case 'Hacker':
				return userList.img = 'https://sadanduseless.b-cdn.net/wp-content/uploads/2011/12/hacker1.jpg';
				break;
			default:
				return userList.img = 'https://comps.canstockphoto.com/question-mark-stock-illustrations_csp5687495.jpg';			
		}
	}

	function getId(type) {
		var min, max, id;
		switch(type) {
			case 'Admin':
				min = 7000; max = 7999;
				break;
			case 'User':
				min = 3000; max = 3999;
				break;
			case 'Hacker':
				min = 1000; max = 1999;
				break;			
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
			openAdminInterface();
		}	
	}

	function openAdminInterface() {
		interfaceBuilder.showMessage('Welcome on board, ' + currentUser.name);
		setTimeout(function() {
			interfaceBuilder.buildAdminInterface(userList);	
		}, 1700);
		
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