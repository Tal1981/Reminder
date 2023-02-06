import React, {useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import {data} from './components/data';
import Header from './components/header';
import Card from './components/card';
import Btn from './components/btn';

function App() {
  const [state, setState] = useState(data);
    useEffect(()=>{
      setState([])
    },[])
    const clearAll= ()=>{
      setState([])
    }
    const showAll= ()=>{
      setState(data)
    }
  return (
    <div className="font mx-auto">
      <Container className="mx-auto py-5">
        <Header data={data.length}/>
        <Card  data={state}/>
        <Btn clearAll={clearAll}  showAll={showAll}/>
      </Container>
    </div>
  )
}

export default App;
