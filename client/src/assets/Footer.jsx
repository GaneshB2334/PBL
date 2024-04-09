import React from 'react';
import { styled } from '@mui/system';

const FooterContainer = styled('footer')({
  backgroundColor: '#1976d2',
  color: '#fff',
  padding: '16px',
  textAlign: 'center',
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
});

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2024 Chat App. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
