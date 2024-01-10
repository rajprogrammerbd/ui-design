import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    searchTextBox: {
        border: 'none',
        outline: 0,
        padding: '11px 42px',
        borderRadius: '50px',
        backgroundColor: '#f3f3f3',
        fontSize: '17px'
    }
});

function SearchInputBox() {
    const classes = useStyles();

    return (
        <input type="text" className={classes.searchTextBox} placeholder="Search Facebook" />
    );
}

export default SearchInputBox;
