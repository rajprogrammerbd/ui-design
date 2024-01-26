import React from 'react';
import { createUseStyles } from "react-jss";

import { ILists, IState } from '../../Types';
import Items from '../Item';

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
    sponsoredText: {
        fontSize: 21,
        color: "#9f9f9f",
        marginBottom: 20
    },
    containerElement: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'auto',
        gap: 15
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


function ChatAdvertisement() {
    const [state] = React.useState<IState>(() => {
        return {
            lists: [
                {
                    id: 0,
                    text: 'Demo text 1',
                    subtitle: 'chrome.google.com'
                },
                {
                    id: 1,
                    text: 'Demo text 2',
                    subtitle: 'chrome.google.com'
                }
            ]
        }
    });

    const classes = useStyles();

    return (
        <>
            <p className={classes.sponsoredText}>Sponsored</p>

            <div className={classes.containerElement}>
                {state.lists.map((list: ILists) => (
                    <Items id={list.id} subtitle={list.subtitle} text={list.text} key={list.id} />
                ))}
            </div>
        </>
    );
}

export default ChatAdvertisement;
