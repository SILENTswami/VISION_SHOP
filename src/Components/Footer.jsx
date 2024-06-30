import * as React from 'react';

const BottomFooter = () => (
  <div style={{ height: '30px',
                 backgroundColor: '#222323',
                 color: 'white', textAlign: 'center', justifyContent:  'center',
                 paddingX:'10px',
                position:'relative',
                bottom:0,
                 width:'100%'}}>
      Made with ❤️ by Quantum-Coders
  </div>
);

const Footer = () => {
  return (
    <>
      <BottomFooter />
    </>
  );
};

export default Footer;
