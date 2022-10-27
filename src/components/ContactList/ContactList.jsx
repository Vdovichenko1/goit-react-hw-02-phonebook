import PropTypes from 'prop-types';
import { Item, BtnDelete, ListFilter } from "./ContactsList.styled";

export default function ContactList({ contacts, deleteContacts }) {
    return (
        <Item>
            {contacts.map(({ id, name, number }) => (
                <ListFilter key={id}><span>{name}: </span>{number}
                <BtnDelete type="button" onClick={() => deleteContacts(id)}>Delete</BtnDelete></ListFilter>
            ))}
        </Item>
    )
}


ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
    PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
    deleteContacts: PropTypes.func.isRequired, 
}
