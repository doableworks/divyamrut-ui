import jwt from "jsonwebtoken";
import axios from "axios";

const apiUrl = process.env.API_URL;


export const isJwtExpired = (token) => {
    // offset by 120 seconds, so we will check if the token is "almost expired".
    const currentTime = Math.round(Date.now() / 1000 + 120);
    const decoded = jwt.decode(token);
    // console.log(`Current time + 120 seconds: ${new Date(currentTime * 1000)}`);
    // console.log(`Token lifetime: ${new Date(decoded["exp"] * 1000)}`);
    // console.log(`Time left: ${new Date(currentTime * 1000) - new Date(decoded["exp"] * 1000)}`);

    if (decoded["exp"]) {
        const adjustedExpiry = decoded["exp"];
        if (adjustedExpiry < currentTime) {
            // console.log("Token expired");
            return true;
        }
        // console.log("Token has not expired yet");
        return false;
    }
    // console.log('Token["exp"] does not exist');
    return true;
};


export const refreshToken = async function (token) {
    try {
        const response = await axios.post(
            // "http://localhost:8000/api/auth/token/refresh/",
            apiUrl + `/api/auth/token/refresh/`,

            {
                refresh: token.refreshToken,
            },
            {
                headers: {
                    credentials: 'include',
                    'Authorization': `Bearer ${token.accessToken}`,
                    "content-type": "application/json"
                },
            });
        const {access, refresh} = response.data;
        // still within this block, return true
        return [access, refresh];
    } catch (e) {
        console.log(e);
        return [null, null];
    }
};


// const withAuth = (Component) => {
//     const AuthenticatedComponent = () => {
//         const router = useRouter();
//         const [data, setData] = useState()
//         const { data: session, status } = useSession()


//         useEffect(() => {
//             const getUser = async () => {
//                 const response = await fetch('http://localhost:4000/user/me');
//                 const userData = await response.json();
//                 if (!userData) {
//                     router.push('/admin/login');
//                 } else {
//                     setData(userData);
//                 }  
//             };
//             getUser();
//         }, [session]);

//         return !!data ? <Component data={data} /> : null; // Render whatever you want while the authentication occurs
//     };

//     return AuthenticatedComponent;
// };