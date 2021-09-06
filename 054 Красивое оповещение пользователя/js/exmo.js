'use strict';

// import CryptoJS from './node_modules/crypto-js/crypto-js';

var	CryptoJS = require("crypto-js"),
	http = require('http'),
	querystring = require('querystring'),
	request = require('request'),
	config = {
	url: 'https://api.exmo.com/v1.1/'
};

function sign(message){
    return CryptoJS.HmacSHA512(message, config.secret).toString(CryptoJS.enc.hex);
}



exports.init_exmo = function (cfg) {
	config.key = cfg.key;
	config.secret = cfg.secret;
	//config.nonce = Math.floor(new Date().getTime()*1000);
	config.nonce = Math.floor(new Date().getTime());
};

console.log(Math.floor(new Date().getTime()));

exports.api_query = function(method_name, data, callback){
	data.nonce = config.nonce++;
	var post_data = querystring.stringify(data);

	var options = {
	  url: config.url + method_name,
	  method: 'POST',
	  headers: {
	    'Key': config.key,
	    'Sign': sign(post_data)
	  },
	  form:data
	};
	
 	request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            callback(body);
        }else{
        	callback(error);
        }
    });
};

exports.api_query2 = function(method_name, data, callback){
	data.nonce = config.nonce++;
	var post_data = querystring.stringify(data);

	var post_options = {
	  	host: 'api.exmo.com',
	  	port: '80',
	  	path: '/v1.1/' + method_name,
	  	method: 'GET',
		headers: {
			'Key': config.key,
			'Sign': sign(post_data),
			'Content-Type': 'application/x-www-form-urlencoded',
			'Content-Length': Buffer.byteLength(post_data)
		}
	};
 	var post_req = http.request(post_options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
          callback(chunk);
      });
  	});

  	post_req.write(post_data);
  	post_req.end();
};

exports.api_queryGet = function(method_name, data, callback){
	data.nonce = config.nonce++;
	var get_data = querystring.stringify(data);

	var get_options = {
	  	host: 'api.exmo.com',
	  	port: '80',
	  	path: '/v1.1/' + method_name,
	  	method: 'GET'
	};
 	var get_req = http.request(get_options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
          callback(chunk);
      });
  	});

  	get_req.write(get_data);
  	get_req.end();
};



exports.test = function(){
    return config.key;
};