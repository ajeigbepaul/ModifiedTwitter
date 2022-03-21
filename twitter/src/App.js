import "./App.css";

import { useEffect } from "react";
import { auth } from "./firebase";
import { actionType } from "./reducer";
import { useStateValue } from "./StateProvider";
import Login from "./component/Login";
import Twitter from "./component/Twitter";
function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: actionType.SET_USER_LOGIN,
          user: {
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          },
        });
      } else {
        dispatch({
          type: actionType.SET_USER_LOGOUT,
          user: null,
        });
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      {/* sidebar */}
      {user ? <Twitter /> : <Login />}
    </div>
  );
}

export default App;
