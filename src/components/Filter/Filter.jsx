import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FilterForm, LabelFilter, InputFilter } from "./Filter.styled";

export default function Filter({ value, onChange }) {
    const contactIdFilter = nanoid();
    return (
        <FilterForm>
            <LabelFilter htmlFor={contactIdFilter}>Find contacts by name</LabelFilter>
            <InputFilter type="text" value={value} id={contactIdFilter} onChange={onChange} />
        </FilterForm>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}