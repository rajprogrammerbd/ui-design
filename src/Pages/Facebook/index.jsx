import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    mainContainer: {
        width: '100%',
        height: '100vh',
        display: 'grid',
        gridTemplateRows: '60px auto',
        gridTemplateColumns: 'repeat(8, 1fr)'
    },
    header: {
        border: '1px solid #ddd',
        gridRowEnd: 2,
        gridRowStart: 1,
        gridColumnEnd: 9,
        gridColumnStart: 1,
    },
    sidebar: {
        border: '1px solid #ddd'
    },
    body: {
        border: '1px solid #ddd'
    },
    chats: {
        border: '1px solid #ddd'
    },
    wholeBody: {
        gridColumnStart: 1, // need to change in specific width
        gridColumnEnd: 9, // need to change in specific width
        gridRowStart: 2,
        display: 'grid',
        gridTemplateColumns: '1fr 2fr 1fr',

        '@media (min-width: 1900px)': {
            gridColumnStart: 2,
            gridColumnEnd: 8
        }
    }
});

export default function Facebook() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.mainContainer}>
                <div className={classes.header}>
                    <p>Header</p>
                </div>

                <div className={classes.wholeBody}>
                    <div className={classes.sidebar}>
                        <p>SideBar</p>
                    </div>
                    <div className={classes.body}>
                        <p>Body</p>
                    </div>
                    <div className={classes.chats}>
                        <p>Chats</p>
                    </div>
                </div>
            </div>
        </>
    );
}
/*
                <div className={classes.sidebar}></div>
                <div className={classes.body}></div>
                <div className={classes.chats}></div>
*/

