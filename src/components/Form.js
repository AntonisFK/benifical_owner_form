import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import { useForm } from "react-hook-form";
import styled from 'styled-components';


const FormContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: start;
`;

const StyledTextField = styled(TextField)`
	flex 1 1 ${({inputsize}) => {
		switch(inputsize) {
			case 'sm':
				return '10';
			case 'md':
				return '20';
			case 'lg':
				return '35'
			default:
				return '100';
		}
	}}%;
	margin-right: 20px !important;
`;

const Form = ({inputs, register, fieldName, errors}) => {

	return (
		<FormContainer>
			{
				inputs.map((input, index) => (
					<StyledTextField
						key={input.name}
						inputsize={input.size}
						label={input.title} 
						variant="outlined" 
						margin="normal"
						type={input.type || 'text'}
						name={`${fieldName}.${input.name}`}
						inputRef={register(input.validation)}
						error={!!errors[input.name]}
					/>
				))
			}
		</FormContainer>
	)
}

export default Form;
