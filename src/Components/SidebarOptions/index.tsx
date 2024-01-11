import { createUseStyles } from "react-jss";
import { ISidebarProps } from "../../helper/types";

const useStyles = createUseStyles({
    title: {
        color: "#898989",
        fontSize: 20
    }
});

function SidebarOptions(props: ISidebarProps) {
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
