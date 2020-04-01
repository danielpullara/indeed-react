import React from "react";
import CandidateForm from '../components/CandidatesForm'
import {useParams} from "react-router-dom"
import {
    Row,
    Col,
    Container
} from "react-bootstrap";


export default function SingleForm() {
const {id} = useParams()
  return (
    <div>
      <h1> This is the Single Form</h1>
      <Container>
    <Row>
      <Col>
        <CandidateForm id={id} />
      </Col>
    </Row>
  </Container>
    </div>
  );
}


