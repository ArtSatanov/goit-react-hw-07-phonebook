import { StyledTh, StyledTb, StyledTd } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <StyledTb>
      <thead>
        <tr>
          <StyledTh>Name</StyledTh>
          <StyledTh>Number</StyledTh>
          <StyledTh>Action</StyledTh>
        </tr>
      </thead>

      <tbody>
        {contacts.map(contact => (
          <tr key={contact.id}>
            <StyledTd>{contact.name}</StyledTd>
            <StyledTd>{contact.phone}</StyledTd>
            <StyledTd>
              <button onClick={() => dispatch(deleteContact(contact.id))}>
                Delete
              </button>
            </StyledTd>
          </tr>
        ))}
      </tbody>
    </StyledTb>
  );
};
