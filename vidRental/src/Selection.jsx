
const Selection = (props) => {

    const handleClick = () => {
        props.setSelection(props.selec.name)
        console.log(props.selection)
    }

    return (
        <a onClick={handleClick} className="aSelection">{props.selec.name}</a>
    )
}
export default Selection;