import React, { useState, useEffect } from 'react';
import { 
  Stepper, 
  Step, 
  StepLabel, 
  Button, 
  Typography, 
  StepContent, 
  Select, 
  MenuItem,
  FormControl,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  LinearProgress,
} from '@material-ui/core';
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { useParams } from "react-router"
import { useHistory } from 'react-router-dom';

import Form from './Form';
import { individualFormInputs, entityInputs} from '../constants';
import { functions } from '../firebase';




const selectOptions = [
  {
    label: 'None',
    value: '',
  },
  {
    label: '1',
    value: 1,
  },
  {
    label: '2',
    value: 2,
  },
  {
    label: '3',
    value: 3,
  },
  {
    label: '4',
    value: 4,
  }
]

const PageContainer = styled.div``;

const StyledLinearProgress= styled(LinearProgress)`
  position: absolute !important;
  top: 0px;
  width: 100%;
`;

const StepActions = styled.div`
  padding: 30px;
`;

const HeaderBar = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 0;
`;

const StyledStepContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledRadioGroup = styled(RadioGroup)`
  display: flex;
  flex-direction: row !important;
`;

const StyledFormControl = styled(FormControl)`
  width: 45%;
`;

const SelectContainer = styled.div`
  margin: 30px 0px;
`

const FormContainer = styled.div`
  margin: 15px 0px;
`;

const SectionIForm = styled.div``;

const FormStepper = () => {
  const { register, errors, handleSubmit } = useForm({ mode: "onBlur" });
  const { fId } = useParams();
  const history = useHistory();


  const [forms, setForms] = useState([]);
  const [selectValue, setSelectValue] = useState('')
  const [isStepsActive, setIsStepActive] = useState({step0: true, step1: false, step2: false})
  const [section2Individuals, setSection2Individuals] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit =  async values => {
    setIsLoading(true);
    console.log(values);
    const saveForm = functions.httpsCallable('saveForm');
    await saveForm({values, fId});
    setIsLoading(false);
  
    history.push(`/form/successful`)
  };

  useEffect(() => {
  console.log(errors);
  }, [errors])

      
  const selectChange = ({target}) => {
    const {value} = target;
    setSelectValue(value);
    if (value !== '') {
      let arr = [];
      for(let i=0; i < value; i++) {
        arr.push(i);
      }

    setForms(arr);
    } else {
      setForms([])
    }
  }

  const onRadioGroupChange = ({target}) => {
  console.log(target.value);
  setSection2Individuals(target.value);
  }

  return (
    <>
    {isLoading && <StyledLinearProgress/> }
    <PageContainer>
      <HeaderBar>
        <Typography variant="h2" gutterBottom>
          CERTIFICATION OF BENEFICIAL OWNER(S)
        </Typography>
      </HeaderBar>
      <Stepper  orientation="vertical">
        <Step active={isStepsActive.step0}>
          <StepLabel>Add Entity Information</StepLabel>
          <StepContent>
            <Typography variant="body1" gutterBottom>
              All persons opening an account on behalf of a legal entity must provide the following information:
            </Typography>
            <Form
            inputs={entityInputs} 
            register={register}
            fieldName={`legalEntity`}
            errors={errors.legalEntity || {}}
            /> 

            <StepActions>
              {!isStepsActive.step1 && <Button variant="contained" onClick={() => setIsStepActive({...isStepsActive, step1: true})}>Next</Button>}
            </StepActions>
          </StepContent>

        </Step>

        <Step active={isStepsActive.step1}>
          <StepLabel>Section I</StepLabel>
          <StepContent>
            <StyledStepContainer>
              <Typography variant="body1" gutterBottom>
                Do any individual(s),who, directly or indirectly, through any contract
                arrangement, understanding, relationship, or otherwise owns 25% or more of the equity interests of the legal entity listed
                above.
              </Typography>


              <FormControl component="fieldset">
                <StyledRadioGroup aria-label="gender" name="section2" value={section2Individuals} onChange={onRadioGroupChange}>
                  <FormControlLabel value="true" control={<Radio />} label="Yes" />
                  <FormControlLabel value="false" control={<Radio />} label="No" />
                </StyledRadioGroup>
              </FormControl>
              {section2Individuals === 'true' && (
              <SelectContainer>
                <Typography variant="body1">
                  How many Individuals?
                </Typography>
                <StyledFormControl>
                  <InputLabel >Individuals</InputLabel>
                  <Select
                    value={selectValue}
                    onChange={selectChange}
                  >
                  {selectOptions.map(({label, value}, index) => (
                    <MenuItem key={index} value={value}>{label}</MenuItem>
                  ))}
                  </Select>
                </StyledFormControl>
              </SelectContainer>)}
              {forms.length > 0 && 
              <SectionIForm>
                <Typography variant="body1">
                  Please provide the following information for those Individual(s)
                </Typography>
                {forms.map((formIndex) => (
                <FormContainer>

                  <Form
                  key={`beneficialOwners[${formIndex}]`}
                  inputs={individualFormInputs} 
                  register={register}
                  fieldName={`beneficialOwners[${formIndex}]`}
                  errors={errors.beneficialOwners && errors.beneficialOwners[formIndex] ? errors.beneficialOwners[formIndex] : {}}
                  /> 

                </FormContainer>
                ))}
              </SectionIForm>}

              <StepActions>
              {!isStepsActive.step2 && <Button variant="contained" onClick={() => setIsStepActive({...isStepsActive, step2: true})}>Next</Button>}
              </StepActions>

            </StyledStepContainer>
          </StepContent>
        </Step>
        <Step active={isStepsActive.step2}>
          <StepLabel>Section II</StepLabel>
          <StepContent>
            <Typography variant="body1" gutterBottom>
            Please provide the following information for an individual with significant responsibility for managing or directing the
            entity, including, an executive officer or senior manager (e.g., Chief Executive Officer, Chief Financial Officer, Chief
            Operating Officer, Managing Member, General Partner, President, Vice President, Treasurer); or Any other individual
            who regularly performs similar functions.
            </Typography>

            <Form
            inputs={individualFormInputs} 
            register={register}
            fieldName={`sectionTwo`}
            errors={errors.sectionTwo || {}}
            /> 

            <StepActions>
            <Button variant="contained" onClick={() => handleSubmit(onSubmit)()}>Submit</Button>
            </StepActions>

          </StepContent>
        </Step>

      </Stepper>
    </PageContainer>
    </>
  )}

export default FormStepper;
