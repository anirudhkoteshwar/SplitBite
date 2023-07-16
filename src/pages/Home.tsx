import * as React from "react"
import './Home.css'

export default function Home() {
  return (
    <div className="pageWrapper">
      <div className="logoWrapper">SplitBite</div>
      <div className="buttonWrapper">
        <button type="button" name="createParty">Create a Party</button>
      </div>
      <div className="buttonWrapper">
        <button type="button" name="joinParty">Join a Party</button>
      </div>
    </div>
  );
}
