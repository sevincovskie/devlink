// import React, { createContext, useContext, useEffect, useState } from "react";
// import { auth } from "./config";
// import { onAuthStateChanged } from "firebase/auth";

// const AuthContext = createContext();

// export default function useAuth() {
//   return useContext(AuthContext);
// }

// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) =>
//       setCurrentUser(user)
//     );

//     return unsubscribe;
//   }, []);

//   const value = { currentUser };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./config";
import { onAuthStateChanged } from "firebase/auth";

// AuthContext yaradılır
const AuthContext = createContext();

// useAuth Hooku yaradılır
export default function useAuth() {
  return useContext(AuthContext);
}

// AuthProvider komponenti
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);  // Null olaraq təyin etdik
  const [loading, setLoading] = useState(true);  // Yüklenmə vəziyyətini idarə etmək üçün

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);  // İstifadəçi məlumatını təyin et
      setLoading(false);  // Yükləmə bitdi
    });

    return () => unsubscribe();  // Komponent unmount olduğunda unsubscribe edirik
  }, []);

  const value = { currentUser };

  // Əgər yüklənmə davam edirsə, heç bir şey göstərmə (və ya yüklənmə animasiyasını göstər)
  if (loading) {
    return <div>Loading...</div>;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
