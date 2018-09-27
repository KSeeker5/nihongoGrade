var key = "NihongoGaHanaSemasu";
function encryptText(username, id)
{
	var result = "";
	result = result + "User: " + CryptoJS.AES.encrypt(username, key);
	result = result + "\nPass: " + CryptoJS.AES.encrypt(id, key);
	return result;
}

function encryptInput(source)
{
	var result = CryptoJS.AES.encrypt(source, key);
	return result;
}

function decryptText(source)
{
	var result = CryptoJS.AES.decrypt(source, key);
	result = result.toString(CryptoJS.enc.Utf8);
	return result;
}