// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import FacebookProvider from "next-auth/providers/facebook";
// import {isJwtExpired, refreshToken} from "@/contants/utils";


// export const authOptions = {
//     providers: [
//         CredentialsProvider({
//             name: 'Us',
//             credentials: {
//                 email: {
//                     label: 'Email',
//                     type: 'email',
//                     placeholder: 'Email Address',
//                 },
//                 password: {label: 'Password', type: 'password'},
//             },
//             async authorize(credentials, req) {
//                 const payload = {
//                     email: credentials.email,
//                     password: credentials.password,
//                 };

//                 const res = await fetch(process.env.API_URL + 'api/account/auth/login/', {
//                     method: 'POST',
//                     body: JSON.stringify(payload),
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Accept-Language': 'en-US',
//                     },
//                 });

//                 const status = res.status;
//                 const statusText = res.statusText;
//                 // console.log(statusText);


//                 // If no error and we have user data, return it
//                 if (res.ok) {
//                     const user = await res.json();
//                     return user;
//                 }
//                 const responseData = await res.json();
//                 throw new Error(JSON.stringify(responseData));

//                 // Return null if user data could not be retrieved
//                 return null;
//             },
//         }),
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//             authorization: {
//                 params: {
//                     prompt: "consent",
//                     access_type: "offline",
//                     response_type: "code"
//                 }
//             }
//         }),
//         FacebookProvider({
//             clientId: process.env.FACEBOOK_CLIENT_ID,
//             clientSecret: process.env.FACEBOOK_CLIENT_SECRET
//         }),
//     ],
//     secret: "secret",
//     session: {
//         // jwt: true,
//         strategy: "jwt",
//         maxAge: 2 * 24 * 60 * 60, // 2 minutes
//     },
//     jwt: {
//         secret: "secret",
//         encryption: true,
//     },
//     callbacks: {
//         async signIn({user, account, profile, email, credentials}) {
//             if (account.provider === "google" && user) {
//                 try {
//                     const data = {'access_token': account.access_token, 'id_token': account.id_token, 'code': 'test'}
//                     const response = await fetch(process.env.API_URL + 'api/account/social-login/google/', {
//                         method: 'POST',
//                         body: JSON.stringify(data),
//                         headers: {
//                             'Content-Type': 'application/json',
//                             'Accept-Language': 'en-US',
//                         },
//                     });
//                     const responseData = await response.json();
//                     user.accessToken = responseData.access_token;
//                     user.refreshToken = responseData.refresh_token;
//                     return true;
//                 } catch (error) {
//                     console.log("GOOGLE ERORR",error)
//                     return false;
//                 }
//             } else if (account.provider === "credentials" && user) {
//                 return true
//             } else if (account.provider === "facebook" && user) {
//                 try {
//                     const data = {
//                         'access_token': account.access_token,
//                         'id_token': account.providerAccountId,
//                         'code': 'fbtest'
//                     }
//                     const response = await fetch(process.env.API_URL + 'api/account/social-login/facebook/', {
//                         method: 'POST',
//                         body: JSON.stringify(data),
//                         headers: {
//                             'Content-Type': 'application/json',
//                             'Accept-Language': 'en-US',
//                         },
//                     });
//                     const user = await response.json();
//                     return user
//                     // user.accessToken = responseData.access_token;
//                     // user.refreshToken = responseData.refresh_token;
//                     // return true;
//                 } catch (error) {
//                     return false;
//                 }
//             }
//             return false
//         },
//         jwt: async ({token, user, account, trigger, session}) => {
//             if (trigger === 'update') {
//                 token.user.user = session.user.user
//                 token.accessToken = session.accessToken;
//                 token.refreshToken = session.refreshToken;
//                 token.userEmailAddress = session.email;
//                 return token;
//             }
//             if (user) {
//                 if (account.provider === "google") {
//                     token.accessToken = user.accessToken;
//                     token.refreshToken = user.refreshToken;
//                     token.userEmailAddress = user.email;
//                     token.user = user;
//                     return token;
//                 } else if (account.provider === "credentials") {
//                     // const { access_token, refresh_token, ...rest } = user;
//                     token.accessToken = user.access_token;
//                     token.refreshToken = user.refresh_token;
//                     // token.username = user.username;
//                     token.user = user;
//                     return token;
//                 } else if (account.provider === "facebook") {
//                     token.accessToken = user.accessToken;
//                     token.refreshToken = user.refreshToken;
//                     token.userEmailAddress = user.email;
//                     token.user = user;
//                     return token;
//                 }
//             }

//             // console.log('JWT callback');

//             if (isJwtExpired(token.accessToken)) {
//                 const [newAccessToken, newRefreshToken,] = await refreshToken(token);

//                 if (newAccessToken && newRefreshToken) {
//                     token = {
//                         ...token,
//                         accessToken: newAccessToken,
//                         refreshToken: newRefreshToken,
//                         // iat: Math.floor(Date.now() / 1000),
//                         // exp: Math.floor(Date.now() / 1000 + 2 * 60 * 60),
//                     };
//                     // console.log('Token refreshed successfully.')
//                     return token;
//                 }
//                 // unable to refresh tokens from DRF backend, invalidate the token
//                 return {
//                     ...token,
//                     error: 'RefreshAccessTokenError'
//                 };
//             }

//             return token;

//         },
//         session: async ({session, user, token}) => {
//             session.user = {
//                 ...session.user,
//                 ...token.user,
//             };
//             session.accessToken = token.accessToken;
//             session.refreshToken = token.refreshToken;
//             session.error = token.error;
//             // session.username = token.username;
//             // console.log(session.expires)
//             return session;
//         }
//     },
//     pages: {
//         signIn: "/?loginpopup=true",
//     },
//     theme: {
//         colorScheme: 'light',
//         brandColor: '#4A4DC7',
//         logo: '/logo.png',
//     },
// }

// export default NextAuth(authOptions);