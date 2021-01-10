import React from 'react';
import styled from 'styled-components';
import { Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


import firebase from '../firebase';


const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left : 0;
  height: 100%;
  width: 100%;
`;

const SendEmailContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 50%;
`;

const provider = new firebase.auth.GoogleAuthProvider();



const LoginPage = () => {
  const history = useHistory();
  const onBtnPress = async () => {
      let results;
      try {
        results = await firebase.auth().signInWithPopup(provider)
      } catch (error) {
          console.log(error);
      }

      const { user } = results;

    history.push(`/${user.uid}/user`)     
  }


    return (
      <>
        <Container>
            <Typography variant="h5">
              Welcome to Beneficial Form Dashboard
            </Typography>
            <SendEmailContainer>
                <Button onClick={onBtnPress}>Login With Google</Button>
            </SendEmailContainer>

        </Container>
      </>
    )
}

export default LoginPage;
