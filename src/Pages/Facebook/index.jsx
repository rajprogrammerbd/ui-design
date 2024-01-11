import React from "react";
import { createUseStyles } from "react-jss";
import { FaFacebook } from "react-icons/fa";
import SearchInputBox from "../../Components/SearchInputBox";
import { CiSearch } from "react-icons/ci";
import { RiHome6Fill } from "react-icons/ri";
import { MdOndemandVideo } from "react-icons/md";
import { BiStoreAlt } from "react-icons/bi";
import { RiGroup2Line } from "react-icons/ri";
import { CgMenuGridO } from "react-icons/cg";
import { BiSolidMessageRounded } from "react-icons/bi";
import { RiGamepadLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoNotifications } from "react-icons/io5";

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
        backgroundColor: '#00000003',
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
    optionUl: {
        display: 'grid',
        listStyleType: 'none',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridTemplateRows: 60,
        alignContent: 'center'
    },
    optionList: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
    },
    settingOptions: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    settingOptionsUL: {
        display: 'grid',
        width: '40%',
        gap: 20,
        listStyleType: 'none',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        marginRight: 50
    },
    settingsListLi: {
        backgroundColor: '#f3f3f3',
        borderRadius: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 7
    }
});

export default function Facebook() {
    const [state, setState] = React.useState(() => {
        return {
            selectionId: 1,
            options: [
                {
                    id: 1,
                    icon: RiHome6Fill,
                    name: 'Home'
                },
                {
                    id: 2,
                    icon: MdOndemandVideo,
                    name: 'Video'
                },
                {
                    id: 3,
                    icon: BiStoreAlt,
                    name: 'Marketplace'
                },
                {
                    id: 4,
                    icon: RiGroup2Line,
                    name: 'Groups'
                },
                {
                    id: 5,
                    icon: RiGamepadLine,
                    name: 'Gaming'
                }
            ],
            settingsList: [
                {
                    id: 1,
                    icon: CgMenuGridO
                },
                {
                    id: 2,
                    icon: BiSolidMessageRounded
                },
                {
                    id: 3,
                    icon: IoNotifications
                },
                {
                    id: 4,
                    icon: CgProfile
                }
            ]
        }
    });
    const classes = useStyles();

    const setHeaderSelection = (id) => {
        setState(prev => ({
            ...prev,
            selectionId: id
        }));
    }

    const isSelected = (id) => {
        return (id === state.selectionId) ? true : false; 
    }

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
                    <div>
                        <ul className={classes.optionUl}>
                            {state.options.map((option) => (
                                <>
                                    <li
                                        style={{
                                            borderBottom: isSelected(option.id) ? "3px solid #0866ff" : 'none',
                                            color: isSelected(option.id) && "#0866ff"
                                        }}
                                        onClick={() => setHeaderSelection(option.id)}
                                        title={option.name}
                                        className={classes.optionList}
                                        key={option.id}
                                    >
                                        <option.icon size={25} />
                                    </li>
                                </>
                            ))}
                        </ul>
                    </div>
                    <div className={classes.settingOptions}>
                        <ul className={classes.settingOptionsUL}>
                            {state.settingsList.map(list => (
                                <>
                                    <li className={classes.settingsListLi} key={list.id}><list.icon size={25} /></li>
                                </>
                            ))}
                        </ul>
                    </div>
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
