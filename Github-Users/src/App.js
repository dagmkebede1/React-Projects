import styles from "./App.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./conponents/Loading";
import Footer from "./conponents/Footer";
const url = "https://api.github.com/users";

function App() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const response = await axios({
      method: "GET",
      url: url,
    });
    setUsers(response.data);
    // console.log(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Github Users</h1>
      {loading ? (
        <Loading load={loading} />
      ) : (
        <div>
          <div className={styles.grid}>
            {users.map((user) => {
              const { login, avatar_url, id, html_url } = user;
              return (
                <div key={id} className={styles.user}>
                  <img className={styles.img} src={avatar_url} alt="" />
                  <div>
                    <h2>{login}</h2>
                    <a href={html_url}>Profile</a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default App;
