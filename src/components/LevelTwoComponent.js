import { Fragment, useState } from "react";
let initial = false;
const LevelTwo = (props) => {
    const [arr, setArr] = useState(["asdasd","asdasdasd","asdas"]);
    const deleteItem = (index) => {
        console.log(index);
        setArr((prev) => {
            console.log(prev);
            prev.splice(index, 1);
            return new Array(...prev);
        });
    }
    const res = arr.map((item, index) => {
        return <p key={index} onClick={() => {deleteItem(index)}}>{item}</p>
    })
    return (
        <Fragment>
        <input type="text" onChange={props.emitToParent} />
        {
            res
        }
        </Fragment>
    );
};

export default LevelTwo;