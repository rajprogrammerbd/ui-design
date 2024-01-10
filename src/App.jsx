import React from 'react';
import { createUseStyles } from "react-jss";
import './App.css';

// Import lazy loading component
const Facebook = React.lazy(() => import('./Components/Facebook'));

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
  const [state, setState] = React.useState(() => {
    return {
      selectedId: 0,
      selectedComponent: null,
      lists: [
        {
          id: 1,
          name: 'Facebook',
          component: <Facebook />
        }
      ]
    };
  });

  const classes = useStyles();

  const setValues = (id, component) => {
    setState(prev => ({
      ...prev,
      selectedId: id,
      selectedComponent: component
    }));
  }

  if (!state.selectedId) {
    return (
      <>
        <ul className={classes.ulElement}>
          {state.lists.map((list) => <li key={list.id} className={classes.liElement} onClick={() => setValues(list.id, list.component)}>{list.name}</li>)}
        </ul>
      </>
    );
  }

  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      <state.component />
    </React.Suspense>
  );
}

export default App
