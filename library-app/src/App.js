import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { auth, database, ref, onValue } from "./firebaseConfig";
import Navbar from "./components/nav";
import Footer from "./components/footer";
import About from "./components/aboutus";
import Contact from "./components/contactus";
import BookCatalog from "./components/bookCatalog";
import SignUp from "./components/Signup";
import Home from "./components/home";
import './styles.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        // Fetch username from Realtime Database
        const userRef = ref(database, `users/${user.uid}`);
        onValue(userRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            setUsername(data.username);
          }
        });
      } else {
        setUsername("");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <Router>
      <Navbar />
      {user && (
        <div className="user-welcome">
          <p>Welcome, {username || user.email}</p>
          <button onClick={handleLogout} className="logoutBtn">Logout</button>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/catalog" element={<BookCatalog />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;