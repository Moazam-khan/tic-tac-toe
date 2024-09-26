// Importing necessary modules and components from React, Ant Design, and React Router
import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import tag from "../assets/NewAssets/Login/tag.png";
import just from "../assets/NewAssets/Login/just.png";

// Defining the Login component as a functional component
const Login: React.FC = () => {
  // Defining state variable 'loading' with initial value 'false' and its setter 'setLoading'
  const [loading, setLoading] = useState(false);
  // Getting the navigate function from useNavigate hook to programmatically navigate
  const navigate = useNavigate();

  // Function to handle form submission
  const onFinish = (values: { username: string; password: string }) => {
    // Setting loading state to true
    setLoading(true);
    // Fake authentication (you can replace this with your actual auth logic)
    setTimeout(() => {
      // Setting loading state to false after 1 second
      setLoading(false);
      // Displaying success message
      message.success("Login successful!");
      // Redirect to game page on success
      navigate("/game");
    }, 1000);
  };

  // Returning the JSX to render the login form
  return (
    // Container div for the login form with styling
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px",

        padding: "24px",
        borderRadius: "4px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <img
          src={tag}
          alt="Login Tag"
          style={{ width: "328px", height: "42px" }}
        />
        <img
          src={just}
          alt="Login Tag"
          style={{ width: "174px", height: "18px" }}
        />
      </div>

      <Form
        onFinish={onFinish}
        style={{
          display: "flex",
          width: "364px",
          padding: "32px",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          borderRadius: "17px",
          background: "#009051",
        }}
      >
        <div
          style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal",
          }}
        >
          Login
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
           
            alignSelf: "stretch",
          }}
        >
          <Form.Item name="username" style={{ alignSelf: "stretch" }}>
            <Input color="green"
              style={{
                padding: "8px 16px",
                width: "100%",
                borderRadius: "7px",
                border: "1px solid rgba(255, 255, 255, 0.50)",
        
              }}
              placeholder="Username"
            />
          </Form.Item>

          <Form.Item name="password" style={{ alignSelf: "stretch" }}>
            <Input.Password
              style={{
                padding: "8px 16px",
                width: "100%",
                borderRadius: "7px",
                border: "1px solid rgba(255, 255, 255, 0.50)",
                
              }}
              placeholder="Password"
            />
          </Form.Item >
          <text
            style={{
              color: "#FFF",
              textAlign: "right",
              fontFamily: "Poppins",
              fontSize: "10px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
              alignSelf: "stretch",
            }}
          >
            Forgot password?
          </text>
        </div>

        <div>
          <Form.Item style={{ alignSelf: "stretch" }}>
            <Button
              style={{
                display: "flex",
                padding: "8px 20px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                flex: "1 0 0",
                borderRadius: "7px",
                background: "#FFF",
                width: "300px",
             
              }}
              type="primary"
              htmlType="submit"
              loading={loading}
              block
            >
             <text style={{
               color: "#009051",
               textAlign: "center",
               fontFamily: "Poppins",
               fontSize: "14px",
               fontStyle: "normal",
               fontWeight: 500,
               lineHeight: "normal"
             }}>Login
             </text>             </Button>
          </Form.Item>
        </div>
      </Form>

      <div style={{ marginTop: "-34px", color: "white" }}>
        Don’t have an account? <span style={{ marginRight: '8px' }}></span><Link to="/signup"><text style={{color:'white'}}>Sign Up</text></Link>
      </div>
    </div>
  );
};

// Exporting the Login component as the default export
export default Login;
