import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './Components/Demo/DemoList';
import Button from './Components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  const handleDescending=()=>{
    listItems.sort((a,b)=>b-a);
  }
  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={handleDescending}>Change To Descending</Button>
    </div>
  );
}

export default App;