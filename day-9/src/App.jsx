import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import { URL } from "./constants";

function App() {

  const [userData, setUserData] = useState(null); // data array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubUser = async () => {
      try {
        const response = await fetch("https://api.github.com/users/octocat");
        console.log(response)
        const data = await response.json();
        console.log(data)
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchGitHubUser();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className='p-4'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Card
          avatar={userData?.avatar_url}
          name={userData?.name}
          bio={userData?.bio}
          followers={userData?.followers}
          following={userData?.following}
        />
      )}
    </div>
  );
}

export default App;
