import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    title: {
        color: "#898989",
        fontSize: 20
    }
});

function SidebarOptions(props) {
    const { hasTitle } = props;
    const classes = useStyles();

    if (hasTitle) {
        const { title } = hasTitle;

        return (
            <>
                <hr />
                <p className={classes.title}>{title}</p>
            </>
        );
    }

    return (
        <>

        </>
    );
}

export default SidebarOptions;
