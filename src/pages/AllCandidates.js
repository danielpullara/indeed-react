import React, { useEffect, useState } from "react";
import {
    Row,
    Col,
    Card,
    ListGroup,
    ListGroupItem
} from "react-bootstrap";

import {
    faMap,
    faEdit,
    faTrash,
    faUserMd,
    faMapPin,
    faEnvelope,
    faVenusMars,
    faBriefcase
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function AllCandidates(props) {
    // now fetching all candidates
    const [candidates, setCandidates] = useState([]);

    const getCandidate = async () => { // a list of candidates then
        const response = await fetch("http://localhost:3001/candidates");
        const data = await response.json();
        console.log(data);
        setCandidates(data);
    };
    // let's forget about other files
    useEffect(() => {
        getCandidate()
    }, []);

    // define Delete function
    const onDeleteCandidate = async (id) => {
        const response = await fetch(`http://localhost:3001/candidates/${id}`);
        const data = await response.json();
        const newCandidates = candidates.filter(candidate => candidate.id !== id);
        setCandidates(newCandidates);
    };
    useEffect(() => {
        onDeleteCandidate()
    }, []);



    // now we need to render the list of candiddates
    // should we start with an If statement in case it can find api? like if == null the return loading... those are not important okok
    const renderCandidates = () => {
        return <Row>
            {candidates.map(candidate => {
                return (
                    <Col lg="3" key={candidate.id}>
                        <Card>
                            <Card.Img variant="top" src={candidate.photo_url} />
                            <Card.Body>
                                <Card.Title>
                                    {candidate.first_name + " " + candidate.last_name}
                                </Card.Title>
                                <Card.Text>{candidate.id}</Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>
                                    <FontAwesomeIcon icon={faBriefcase} /> {candidate.company}
                                </ListGroupItem>
                                <ListGroupItem>
                                    <FontAwesomeIcon icon={faUserMd} /> {candidate.job_title}
                                </ListGroupItem>
                                <ListGroupItem>
                                    <FontAwesomeIcon icon={faVenusMars} /> {candidate.gender}
                                </ListGroupItem>
                                <ListGroupItem>
                                    <FontAwesomeIcon icon={faMapPin} /> {candidate.city}
                                </ListGroupItem>
                                <ListGroupItem>
                                    <FontAwesomeIcon icon={faMap} /> {candidate.country}
                                </ListGroupItem>
                                <ListGroupItem>
                                    <FontAwesomeIcon icon={faEnvelope} /> {candidate.email}
                                </ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link onClick={() => onDeleteCandidate(candidate.id)}>
                                    <FontAwesomeIcon icon={faTrash} /> Remove
              </Card.Link>
                                <Card.Link href={`/candidates/${candidate.id}`}>
                                    <FontAwesomeIcon icon={faEdit} /> Edit
              </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}
        </Row>
    }

    // do you have single card?

    return (
        <div>
            <h1>List of candidates here</h1>
            {renderCandidates()}


        </div>
    )

}