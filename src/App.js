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
    console.log('#############################')
    console.log(state)
    console.log('#############################')
    const clearAll= ()=>{
      setState([])
      console.log(state)
    }
    const showAll= ()=>{
      setState(data)
      console.log(state)
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
