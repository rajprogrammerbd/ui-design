import React from 'react';
import { createUseStyles } from "react-jss";
import { motion } from "framer-motion"
import { AppStateProps, LIST_OBJECT_TYPE } from './helper/types';
import './App.css';

// Import lazy loading component
const Facebook = React.lazy(() => import('./Pages/Facebook'));

const useStyles = createUseStyles({
  ulElement: {
    listStyleType: 'none',
    display: 'flex',
    flexFlow: 'column wrap'
  },
  liElement: {
    textDecoration: 'underline',
    fontSize: 18,
    cursor: 'pointer',
    '&:hover': {
      color: '#5d5dd4'
    },
    '&:active': {
      color: '#0000ff'
    }
  }
});

function App() {
  const [state, setState] = React.useState<AppStateProps>(() => {
    return {
      selectedId: 0,
      lists: [
        {
          id: 1,
          name: 'Facebook',
          component: Facebook
        }
      ]
    };
  });

  const classes = useStyles();

  const setValues = React.useCallback((id: number): void => {
    setState(prev => ({
      ...prev,
      selectedId: id
    }));
  }, []);

  if (!state.selectedId) {
    return (
      <>
        <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className={classes.ulElement}>
          {state.lists.map((list: LIST_OBJECT_TYPE) => <li key={list.id} className={classes.liElement} onClick={() => setValues(list.id)}>{list.name}</li>)}
        </motion.ul>
      </>
    );
  }

  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      {state.lists.map((list: LIST_OBJECT_TYPE) => (
        list.id === state.selectedId && <list.component key={list.id} />
      ))}
    </React.Suspense>
  );
}

export default App
