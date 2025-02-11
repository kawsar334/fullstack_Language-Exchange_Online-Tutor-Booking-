// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "./context/AuthProviders";
// import { Navigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const ProtectedRoute = ({ children }) => {
//     const { user, loading } = useContext(AuthContext);

//     const [userInfo, setUserInfo] = useState({})


//     useEffect(()=>{
//         const fetchData = async()=>{
//             try{
//                 const response = await fetch(`https://server-wheat-xi.vercel.app/jwt`, {
//                     method: "GET", 
//                     credentials: "include", 
//                 });
//                 const result = await response.json();
//                 setUserInfo(result?.user)
//                 console.log(result?.user)
                
//             }catch(err){
//                 console.log(err);
//             }
//         }
//         fetchData()
//     },[])

//     if (loading) {
//         return <div>Loading...</div>;
//     }
//     if (!userInfo?.email ) {
//         return <Navigate to="/login" replace state={{ from: window.location.pathname }} />;
//     }

//     return children;
// };


// export default ProtectedRoute;

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthProviders";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState(null);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://server-wheat-xi.vercel.app/jwt`, {
                    method: "GET",
                    credentials: "include",
                });
                const result = await response.json();
                setUserInfo(result?.success);
               
                if(!result?.success){
                    toast.error(result?.message);
                }
                console.log(result?.message);
            } catch (err) {
                console.log(err);
                toast.error(err.message);
            }
        };
        fetchData();
    }, []);

    if (loading || userInfo === null) {
        return <div>Loading...</div>;  
    }

    if (userInfo ===false  ) {
        return <Navigate to="/login" replace state={{ from: window.location.pathname }} />;
    }

    return children;
};

export default ProtectedRoute;
