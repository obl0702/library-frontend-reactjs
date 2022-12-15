export const oktaConfig = {
    clientId: '0oa7n5y4kzgo4dGze5d7',
    issuer: 'https://dev-11456127.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}