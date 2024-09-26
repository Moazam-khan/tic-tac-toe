import React from "react";
import { Layout } from "antd";
import bg from "../assets/NewAssets/bg.svg"
const { Content } = Layout;

interface Props {
  children: React.ReactNode;
}


const AppLayout = ({ children }: Props) => {
  return (
    <Layout style={{ 
      backgroundImage: `url(${bg})`, 
      display: 'flex',
      minHeight: '100vh',
      width: '100%',
      padding: '30px 0px',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '50px',
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
