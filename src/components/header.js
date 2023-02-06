import React from 'react';
import {Col, Row} from 'react-bootstrap';

const Header = (props)=>{

 return(
     <Row className="justify-content-center mb-3">
       <Col sm={8} className="">لديك اليوم {props.data} مواعيد</Col>
     </Row>
 )
}

export default Header;