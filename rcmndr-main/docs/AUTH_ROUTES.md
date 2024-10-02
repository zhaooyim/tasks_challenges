## Testing Auth Protected Routes

### Getting an access token

Suppose, you've created a new user called hello@example.com and the password is abc_123 and you want to generate an access token for this user so that you can test your server-side routes.

- In Auth0, under **Settings**, scroll down to **API Authorization Settings**, and set **Default Directory** to `Username-Password-Authentication`. If you don't have access to Auth0, ask one of the facilitators to confirm that the value is set.
- Open Thunderclient and fill in the following information:

- URL: **POST** `https://rcmndr-dev-academy.au.auth0.com/oauth/token`
- **_For THUNDERCLIENT:_** Change the body to `Form-encode` and fill the following key/value pairs:

| key           | value                                           |
| ------------- | ----------------------------------------------- |
| audience      | https://rcmndr/api                              |
| grant_type    | password                                        |
| client_id     | <copy and paste it from the .env file>          |
| client_secret | <copy and paste it from the .env file>          |
| username      | the email of the user (e.g `hello@example.com`) |
| password      | and the password for that user (e.g `abc_123`)  |

**NOTE**: access tokens expire after 24 hours, and you will need to generate a new token by using the same endpoint with the values from above.
It's a good idea to keep the HTTP request in Thunderclient because you'll need it for later.
