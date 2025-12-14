function FilterCheckbox({ id, label, checked, onChange }) {
    return (
        <li>
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={id}>{label}</label>
        </li>
    )
}

export default FilterCheckbox;