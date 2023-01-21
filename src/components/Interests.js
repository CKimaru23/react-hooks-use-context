
import React, {useContext} from "react";
import { themeContext} from "../context/theme"
import {UserContext} from "../context/user"

function Interests() {
  const {theme} = useContext(themeContext)
  const {user}= useContext(UserContext)
  return (
    <div>
      <h4>Interests</h4>
      <ul className={theme}>
        {user.interests.map((interest) => (
          <li key={interest}>{interest}</li>
        ))}
      </ul>
    </div>
  );
}

export default Interests;