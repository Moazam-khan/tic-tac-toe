// src/pages/SignupPage.tsx
import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import tag from "../assets/NewAssets/Login/tag.png";
import just from "../assets/NewAssets/Login/just.png";
import useBreakpoint from "../hooks/useBreakpoint";

const SignupPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values: { username: string; password: string; confirmPassword: string; email: string }) => {
    setLoading(true);
    // Fake sign-up logic (replace with actual API call)
    setTimeout(() => {
      setLoading(false);
      message.success('Sign-up successful! Please log in.');
      navigate('/login'); // Redirect to login page
    }, 1000);
  };

  // Validate that password and confirm password match
  const validatePassword = (_: any, value: string, form: any) => {
    if (value && value !== form.getFieldValue('password')) {
      return Promise.reject(new Error('Passwords do not match!'));
    }
    return Promise.resolve();
  };
  const screens = useBreakpoint();
  return (
    <div style={{   
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap:screens.xs ? "6px" : "24px",
      borderRadius: "17px",
      padding: screens.xs ? "6px" : "24px",
      position: "absolute",
      top: screens.xs ? "45%" : "40%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }}>

     
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: screens.xs ? "8px" : "16px",
        }}
      >
        <img
          src={tag}
          alt="Login Tag"
          style={{  width: screens.xs ? "140px" : "328px",  }}
        />
        <img
          src={just}
          alt="Login Tag"
          style={{  width: screens.xs ? "80px" : "164px", }}
        />
      </div >

      
      <div style={{ 
          display: "flex",
          width:screens.xs ? "260px" : "364px",
          padding: screens.xs ? "10px" : "32px",
          flexDirection: "column",
          alignItems: "center",
          gap:screens.xs ? "6px" : "12px",
          borderRadius: "17px",
          background: "#009051",
        }}>

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
         Sign Up
        </div>
        <div></div>
        <Form
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
          
          >
            <Input placeholder="Username" style={{border: "1px solid rgba(255, 255, 255, 0.50)",  padding: "8px 16px",
                width: "100%",
                borderRadius: "7px",}} />
          </Form.Item>

          <Form.Item
            name="email"
          
          >
            <Input placeholder="Email"  style={{border: "1px solid rgba(255, 255, 255, 0.50)",  padding: "8px 16px",
                width: "100%",
                borderRadius: "7px",}}  />
          </Form.Item>

          <Form.Item
            name="password"
          
          >
            <Input.Password placeholder="Password"  style={{border: "1px solid rgba(255, 255, 255, 0.50)",  padding: "8px 16px",
                width: "100%",
                borderRadius: "7px",}} />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            dependencies={['password']}
          
          
          >
            <Input.Password placeholder="Confirm Password"  style={{border: "1px solid rgba(255, 255, 255, 0.50)",  padding: "8px 16px",
                width: "100%",
                borderRadius: "7px",}}  />
          </Form.Item>


          <div style={{
           marginTop:screens.xs ? "10px" : '40px'
          }}>
            <Form.Item>
              <Button  htmlType="submit" loading={loading} block>
              <span style={{
                color: "#009051",
                textAlign: "center",
                fontFamily: "Poppins",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal"
              }}>Sign Up</span>  
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>


      <div style={{ marginTop: '16px', color: "white" }}>
        Already have an account? <span style={{ marginRight: '8px' }}></span><Link to="/login"><text style={{color: "white"}}>Login</text></Link>
      </div>

    </div>
  );
};

export default SignupPage;
