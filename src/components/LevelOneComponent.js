import LevelTwo from "./LevelTwoComponent";

const LevelOne = (props) => {
    return (
        <LevelTwo emitToParent={props.showUserInput} />
    );
};

export default LevelOne;