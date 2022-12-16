
const Selection = (props) => {

    const handleClick = () => {
        props.setSelection(props.selec.name)
        console.log(props.selection)
    }

    return (
        <a onClick={handleClick}>{props.selec.name}</a>
    )
}
export default Selection;