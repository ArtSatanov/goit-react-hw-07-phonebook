import { StyledTh, StyledTb, StyledTd } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactList = () => {
  const filter = useSelector(state => state.filter);
  const { contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const visibleContact = contacts.filter(contact =>
    filter === ''
      ? contact
      : contact.name.toLowerCase().includes(filter.toLowerCase())
  );

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
        {visibleContact.map(contact => (
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
