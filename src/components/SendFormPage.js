import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Button, TextField, Typography, AppBar, Toolbar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { auth, functions } from '../firebase';


const Container = styled.div`
  position: absolute;
  top: 0;
  left : 0;
  height: 100%;
  width: 100%;
`;

const SendEmailContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 63%;
    width: 50%;
    margin: auto;
`;

const StyledTypography = styled(Typography)`
  flex-grow:1;
`;


const SendFormPage = () => {
  const history = useHistory();
  const [success, setSuccess] = useState(false)

  const textRef = useRef();

  const logout = async () => {
    auth.signOut();
    history.push('/login');
  }

  const onBtnClickEmail = async () => {
   const sendEmail = functions.httpsCallable('sendEmail');
   const email = textRef.current.value
   console.log(email);
   const res = await sendEmail({email});
   textRef.current.value = '';
   setSuccess(true);
   console.log(res);
  };

    return (
      <>
        <Container>
          <AppBar position="static">
            <Toolbar>
              <StyledTypography variant="h6" >
                Beneficial Owner Form 
              </StyledTypography>
              <Button color="inherit" onClick={logout}>Logout</Button>
            </Toolbar>
          </AppBar>
            <SendEmailContainer>
                <Typography>
                   Send Beneficial Owner Form to
                </Typography>
                <TextField  inputRef={textRef} id="standard-basic" label="Email" />
                <Button onClick={onBtnClickEmail}>Send</Button>

                {
                  success && (
                  <Typography>
                    Email successfully sent    
                  </Typography>)
                }
            </SendEmailContainer>

        </Container>
      </>
    )
}

export default SendFormPage;
