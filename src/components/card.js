import React from 'react';
import {Col, Row} from 'react-bootstrap';

const Card = (props)=>{

 return(
  <Row className="justify-content-center mb-3 h">
    <Col sm={8} className="">
      <div className="cardi">
        {props.data.length ? (props.data.map((item)=>{
          return(
            <div key={item.id} className="d-flex gap-3 border-bottom my-1">
            <img alt="person" className='photo' src={item.img}/>
            <div>
              <p className="d-inline fs-5">{item.name}</p>
              <p className="fs-6 text-muted">{item.time}</p>
            </div>
          </div>
          )
        })) : <h4 className="text-center">لايوجد بيانات للعرض</h4>}  
      </div> 
    </Col>
  </Row>
 )
}

export default Card;