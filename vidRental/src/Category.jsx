import Selection from "./Selection.jsx"

const Category = (props) => {


    

    return (
        <div className="category">
            <label>{props.item.label}</label>
            {/* Iterates through list property of one object in the category array*/}
            {props.item.items.map((element,index)=> (
                <Selection {...props} key={index} selec={element} row={index}/>
            ))}
        </div>
    )
}
export default Category;