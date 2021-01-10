import React  from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

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


const SuccessPage = () => {
  
    return (
      <>
        <Container>
            <Typography variant="h5">
                Form successfully completed!!
            </Typography>

        </Container>
      </>
    )
}

export default SuccessPage;
