import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledForm,
  StyledLabelName,
  StyledField,
  StyledLabel,
  ErrMsg,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContacts } from 'redux/selectors';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phone: Yup.string()
    .min(9, 'Too Short!')
    .max(9, 'Too Long!')
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, action) => {
    if (
      contacts.find(
        option => option.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      alert(`${values.name} is already in contacts`);
    } else {
      dispatch(addContact(values));
      action.resetForm();
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <StyledLabel>
          <StyledLabelName>Name</StyledLabelName>
          <StyledField id="name" name="name" placeholder="Jane Derossa" />
          <ErrMsg component="div" name="name" />
        </StyledLabel>
        <StyledLabel>
          <StyledLabelName>Number</StyledLabelName>
          <StyledField id="phone" name="phone" placeholder="***-**-**" />
          <ErrMsg component="div" name="phone" />
        </StyledLabel>
        <button type="submit">Add contact</button>
      </StyledForm>
    </Formik>
  );
};
