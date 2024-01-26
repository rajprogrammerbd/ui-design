import React from "react";
import ChatAdvertisement from "../ChatAdvertisement";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    container: {
        width: '80%',
        height: 'auto',
        marginTop: 20
    }
});

function Chats() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.container}>
                <ChatAdvertisement />
            </div>
        </>
    );
}

export default Chats;
