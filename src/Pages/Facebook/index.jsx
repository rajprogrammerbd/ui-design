import { createUseStyles } from "react-jss";
import { FaFacebook } from "react-icons/fa";
import SearchInputBox from "../../Components/SearchInputBox";
import { CiSearch } from "react-icons/ci";

const useStyles = createUseStyles({
    mainContainer: {
        width: '100%',
        height: '100vh',
        display: 'grid',
        gridTemplateRows: '60px auto',
        gridTemplateColumns: 'repeat(8, 1fr)'
    },
    header: {
        gridRowEnd: 2,
        gridRowStart: 1,
        gridColumnEnd: 9,
        gridColumnStart: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 2fr 1fr',
        boxShadow: '1px 1px 15px 0px #ddd'
    },
    sidebar: {

    },
    body: {

    },
    chats: {

    },
    wholeBody: {
        gridColumnStart: 1, // need to change in specific width
        gridColumnEnd: 9, // need to change in specific width
        gridRowStart: 2,
        display: 'grid',
        gridTemplateColumns: '1fr 2fr 1fr',

        '@media (min-width: 2000px)': {
            gridColumnStart: 2,
            gridColumnEnd: 8
        }
    },
    wrapperLogoSearch: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 16
    },
    logo: {
        cursor: 'pointer',
        color: '#0866ff'
    },
    searchBar: {
        marginLeft: 6,
        position: 'relative'
    },
    icon: {
        color: '#797979',
        position: 'absolute',
        top: 9,
        left: 10
    },

});

export default function Facebook() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.mainContainer}>
                <div className={classes.header}>
                    <div className={classes.wrapperLogoSearch}>
                        <div>
                            <FaFacebook className={classes.logo} size={41} />
                        </div>
                        <div className={classes.searchBar}>
                            <CiSearch className={classes.icon} size={23} />
                            <SearchInputBox />
                        </div>
                    </div>
                    <div>options</div>
                    <div>chats</div>
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

