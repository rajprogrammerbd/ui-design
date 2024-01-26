import { ILists } from "../../Types";
import { motion, useAnimate } from 'framer-motion';
import { createUseStyles } from "react-jss";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const useStyles = createUseStyles({
    title: {
        fontWeight: 'bold'
    },
    box: {
        width: 50,
        height: 50,
        backgroundColor: "#fff",
        position: 'absolute',
        borderRadius: "50%",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        right: 12,
        top: 15
    },
    itemsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 15,
        cursor: 'pointer',
        position: 'relative'

    },
    itemsLeft: {
        width: '45%',
        minHeight: 100,
        borderRadius: '20%',
        backgroundColor: '#bdbdbd'
    },
    itemsRight: {}
});

function Items(prop: ILists) {
    const { subtitle, text } = prop;
    const [scope, animate] = useAnimate();

    const classes = useStyles();

    const hoveredStart = () => {
        animate(scope.current, { opacity: 1 });
    }

    const hoveredEnd = () => {
        animate(scope.current, { opacity: 0 });
    }

    return (
        <motion.div
            initial={{ backgroundColor: 'rgb(252, 252, 252, 1)' }}
            onHoverStart={hoveredStart}
            onHoverEnd={hoveredEnd}
            whileHover={{ backgroundColor: "#ddd" }}
            className={classes.itemsContainer}
        >
            <motion.div initial={{ opacity: 0 }} ref={scope} className={classes.box}>
                <HiOutlineDotsHorizontal size={25} />
            </motion.div>

            <div className={classes.itemsLeft}></div>
            <div className={classes.itemsRight}>
                <p className={classes.title}>{text}</p>
                <small>{subtitle}</small>
            </div>

        </motion.div>
    );
}

export default Items;
