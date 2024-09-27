import React from "react";
import { Layout } from "antd";
import bg from "../assets/NewAssets/bg.svg"
import Spline from "@splinetool/react-spline";
import useBreakpoint from "@/hooks/useBreakpoint";
const { Content } = Layout;

interface Props {
  children: React.ReactNode;
}


const AppLayout = ({ children }: Props) => {
  const screens = useBreakpoint();
  return (
    <Layout style={{ 
      backgroundImage: `url(${bg})`, 
      display: 'flex',
      minHeight: '100vh',
      width: '100%',
      padding: screens.sm ? '10px 0px' : '30px 0px',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
     
    }}> 
      <Content style={{}}>{children}</Content>
    </Layout>
  );
};

export default AppLayout;
