export function LabelForm(props) {
    // console.log(props);

    return (
        <label htmlFor={props.name.toLowerCase()} className="form-label">
        {props.name}
    </label>
    )
}
