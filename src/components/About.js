import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const About = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/github-arpan")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="my-28 ml-10  flex justify-center">
      {userData ? (
        <div>
          <h1 className="text-center font-bold mb-4">Developed By </h1>
          <div>
            <a href="https://github.com/github-arpan">
              <img
                className="h-80"
                src={userData.avatar_url}
                alt="User Avatar"
              />
            </a>
          </div>
          <div className="mt-6">
            <p className="font-bold text-xl mb-2">Name : {userData.name}</p>
            <p>Bio : {userData.bio}</p>
          </div>
        </div>
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default About;
