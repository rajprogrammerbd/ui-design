import { createUseStyles } from "react-jss";
import { motion } from "framer-motion";
import { IDetailsList, ISidebarProps, ISortCutList } from "../../helper/types";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const useStyles = createUseStyles({
    title: {
        color: "#898989",
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10
    },
    ulLists: {
        listStyleType: 'none',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'auto'
    },
    liElements: {
        color: "#3b3b3b",
        cursor: "pointer",
        display: "flex",
        fontSize: 20,
        alignItems: "center",
        flexDirection: "row",
        padding: "13px 12px",
        borderRadius: 10
    },
    spanText: {
        marginLeft: 18,
        fontWeight: 'bold'
    }
});

function SidebarOptions<T extends IDetailsList[] | ISortCutList[]>(props: ISidebarProps<T>) {
    const { hasTitle, lists } = props;
    const classes = useStyles();
    type ListType = typeof lists;
    let filter: ListType;

    if (lists.length > 9) {
        filter = lists.slice(0, 9) as ListType;

        filter.push({
            name: 'See more',
            id: 10,
            icon: IoIosArrowDropdownCircle
        });
    } else {
        filter = lists;
    }

    return (
        <>
            {hasTitle && (
                <>
                    <hr />
                    <p className={classes.title}>{hasTitle.title}</p>
                </>
            )}

            <div>
                <ul className={classes.ulLists}>
                    {filter.map((list) => <motion.li initial={{ backgroundColor: '#00000000' }} whileHover={{ backgroundColor: '#ddd' }} transition={{ duration: 0.2 }} className={classes.liElements} key={list.id}><list.icon size={30} /> <span className={classes.spanText}>{list.name}</span></motion.li>)}
                </ul>
            </div>
        </>
    );
}

export default SidebarOptions;
