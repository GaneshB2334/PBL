import React from 'react';
import { styled } from '@mui/system';

const FooterContainer = styled('footer')({
  backgroundColor: '#1976d2',
  color: '#fff',
  padding: '16px',
  textAlign: 'center',
  position: 'static',
  bottom: 0,
  left: 0,
  width: '100%',
  // margin: "12px 0 0 0", 
});

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2024 Chat App. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
