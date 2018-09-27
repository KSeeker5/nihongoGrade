function encryptText(username, id)
{
	var result = "";
	result = result + "User: " + CryptoJS.AES.encrypt(username, 'NihongoGaHanaSemasu');
	result = result + "\nPass: " + CryptoJS.AES.encrypt(id, 'NihongoGaHanaSemasu');
	return result;
}

function encryptInput(source)
{
	var result = CryptoJS.AES.encrypt(source, 'NihongoGaHanaSemasu');
	return result;
}

function decryptText(source)
{
	var result = CryptoJS.AES.decrypt(source, 'NihongoGaHanaSemasu');
	return result;
}