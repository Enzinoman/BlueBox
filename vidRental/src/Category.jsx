
const Category = (props) => {

    return (
        <div className="category">
            <label>{props.item.label}</label>
            {/* Iterates through list property of one object in the category array*/}
            {props.item.items.map((element,index)=> (
                <a href={element.url} key={index}>{element.name}</a>
            ))}
        </div>
    )
}
export default Category;