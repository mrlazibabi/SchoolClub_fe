import React from 'react';
import { Layout} from 'antd';
const { Header } = Layout;


const HeaderCustom = () => {
    const handleClick = () => {
        window.location.href = '/'; // Navigate to the home page
      };
    return (
        <Header
            style={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <div onClick={handleClick} style={{ cursor: 'pointer' }}>
            <h1 style={{ color: 'white' }}>Club Management</h1>
            </div>

        </Header>
    );
};

export default HeaderCustom;