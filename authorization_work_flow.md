authorization
=============

use modified JWT authorization, like this:

1.	login request, the server side provide a anti-robot verify code in login form

```
      terminal_hw_uuid: terminal hardware or APK ( client software like browser ) UUID string
      login_account: login_account name
      verify_code: the code that provide by server to anti-robot
```

1.	login response ( round 1 ), server response a public key and JWT encode method for client to security / secrect the password and UUID

	```
	    token_method: RS256 ( RSA 256bit) or HS256


	```

2.	javascript JWT use [jwt-simple](http://www.github.com/hokaccha/node-jwt-simple)

3.	client use RS256 and public key ( default encode method ) to encode the login info like login account / login password / login secret extra information as a security string send to server

4.	server verify the login info and return access token and permission list for UI
