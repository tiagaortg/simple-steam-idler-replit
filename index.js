const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')

var username = process.env.username;
var password = process.env.password;
var shared_secret = process.env.shared;

var games = [730, 221100, 1222680, 976310, 271590, 1274570, 431960];  // Enter here AppIDs of the needed games
var status = 7;  // 1 - online, 7 - invisible


user = new steamUser();
user.logOn({"accountName": username, "password": password, "twoFactorCode": steamTotp.generateAuthCode(shared_secret)});
user.on('loggedOn', () => {
	if (user.steamID != null) console.log(user.steamID + ' - Successfully logged on');
	user.setPersona(status);               
	user.gamesPlayed(games);
});


var username2 = process.env.username2;
var password2 = process.env.password2;
var shared_secret2 = process.env.shared2;

var games2 = [730, 1938090, 570, 578080, 2073850, 238960, 230410, 236390, 1085660, 1222670, 1172470, 430, 291550, 1665460, 1677740, 1449850, 386360, 444200];  // Enter here AppIDs of the needed games
var status2 = 7;  // 1 - online, 7 - invisible


user2 = new steamUser();
user2.logOn({"accountName": username2, "password": password2, "twoFactorCode": steamTotp.generateAuthCode(shared_secret2)});
user2.on('loggedOn', () => {
         if (user2.steamID != null) console.log(user2.steamID + ' - Successfully logged on');
         user2.setPersona(status2);               
         user2.gamesPlayed(games2);
});
