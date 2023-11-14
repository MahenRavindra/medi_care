import React from "react";

const Pagenotfound = () => {
  return (
    <div style={{textAlign: "center", marginTop: "10%"}}>
      <h2 style={{fontWeight: 200}}>404 page not found</h2>
      <i
        class="fa-solid fa-triangle-exclamation fa-2xl"
        style={{color: "#d0395f"}}></i>
      <p style={{fontSize: "12px"}}>
        Redirect to Home <a href="/">Click here</a>
      </p>
    </div>
  );
};

export default Pagenotfound;
