import React from 'react';
import {Button, Col, Row} from 'react-bootstrap';

const Btn = ({clearAll, showAll})=>{
 
 return(
  <Row className="justify-content-center mb-3">
    <Col sm={8} className="">
      <div className="d-flex justify-content-between">
        <Button className="btn btn-primary button" onClick={showAll}>عرض المواعيد</Button>
        <Button className="btn btn-primary button" onClick={clearAll}>مسح الكل</Button>
      </div>
    </Col>
  </Row>
 )
}

export default Btn