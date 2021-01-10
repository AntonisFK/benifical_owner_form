import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import { LinearProgress, Button } from '@material-ui/core';

import FormStepper from './FormStepper';
import { auth }  from '../firebase';
import { AuthContext } from '../contexts/AuthContextProvider';

const Container = styled.div`
    height: 100%;
    margin: 50px;
`;

const StyledLinearProgress= styled(LinearProgress)`
  position: absolute !important;
  top: 0px;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  algin-items: center;
  position: absolute;
  top: 0;
  left : 0;
  height: 100%;
  width: 100%;

`;

const AnonSignIn = () => {

  const onBtnClick = async () => {
    try {
      await auth.signInAnonymously();
      
    } catch (error) {
      console.log(error);
    }

  }

  return (
      <ButtonContainer>
        <Button onClick={onBtnClick}>
          Go to Form
        </Button>
      </ButtonContainer>
  )
}

const FormPage = () => {
  const { user, isLoading } = useContext(AuthContext);



    return (
      <>
      {isLoading && <StyledLinearProgress/> }
      <Container>
          {(!isLoading && user) &&<FormStepper/>}
          {(!isLoading && !user) &&<AnonSignIn/>}
        </Container>
      </>
    )
}

export default FormPage;
