import React from "react";
import Navbar from "../components/ui/Navbar";

const Signup = () => {
  return (
    <div style={{ backgroundColor: "#f9f4f0", height: "100vh" }}>
      <Navbar />

      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 100px)"
      }}>


        <div style={{
          backgroundColor: "#f9c693",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          width: "450px",
          height:"490px" // Increased width
        }}>
          <h2 style={{ color: "#EF6C00", marginBottom: "30px",fontWeight: "bold"  }}>Student Sign up </h2>

          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "block", color: "black", marginBottom: "5px" }}>Name</label>
            <input
              type="password"
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                borderRadius: "10px",
                backgroundColor: "white",
                height: "33px"
              }}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "block", color: "black", marginBottom: "5px" }}>SRN</label>
            <input
              type="password"
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                borderRadius: "10px",
                backgroundColor: "white",
                height: "33px"
              }}
            />
          </div>

          {/* Email Input with @reva.edu.in on right */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", color: "black", marginBottom: "5px" }}>Email ID</label>
            <div style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: "10px",
              paddingLeft: "10px",
              paddingRight: "10px",
              height: "33px"
            }}>
              <input
                type="text"
                placeholder="YourID"
                style={{
                  flex: 1,
                  padding: "10px",
                  border: "none",
                  backgroundColor: "transparent",
                  outline: "none"
                }}
              />
              <span style={{ color: "gray", fontSize: "14px", marginLeft: "5px" }}>@reva.edu.in</span>
            </div>
          </div>

          {/* Password Input */}
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "block", color: "black", marginBottom: "5px" }}>Password</label>
            <input
              type="password"
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                borderRadius: "10px",
                backgroundColor: "white",
                height: "33px"
              }}
            />
          </div>

          <div style={{ textAlign: "right", fontSize: "12px", color: "#EF6C00", marginBottom: "20px" }}>
            Forget Password?
          </div>


          <button style={{
            backgroundColor: "#FF7300",
            color: "white",
            border: "none",
            borderRadius: "20px",
            padding: "10px 20px",
            width: "100%",
            fontSize: "16px",
            cursor: "pointer"
          }}>
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
