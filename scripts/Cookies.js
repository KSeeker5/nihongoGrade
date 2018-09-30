function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(isIndex) {
    var user = getCookie("username");
	if (user != "") {
		return 0;
	} else {
		if (isIndex == 1) {
			location.href="pages/login.html";
		} else {
			location.href="../pages/login.html";
		}
	}
	return 1;
    /*if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }*/
}


function checkLoginCookie() {
    var user = getCookie("username");
	if (user != "") {
		location.href="../index.html";
	} else {
		return 0;
	}
	return 1;
    /*if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }*/
}


function checkAssignmentCookie() {
    var user = getCookie("assignment");
	if (user != "") {
		return 0;
	} else {
		location.href="../index.html";
	}
	return 1;
    /*if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }*/
}