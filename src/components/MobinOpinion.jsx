import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
const MobinOpinion = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <h1 className="text-center">Opinion For growing up</h1>
        </Row>
        <Row className="justify-content-center">
          <Col>
            <ListGroup as="ol" numbered>
              <ListGroup.Item>
                Uploading new videos on youtube channel
              </ListGroup.Item>
              <ListGroup.Item>Share new videos on social media</ListGroup.Item>
              <ListGroup.Item>Modify the website</ListGroup.Item>
              <ListGroup.Item>
                Bring a complete course on front-end development (HTML, CSS,
                Javascript, React)
              </ListGroup.Item>
              <ListGroup.Item>
                Writing articles and share in tech related public group on
                facebook
              </ListGroup.Item>
              <ListGroup.Item>
                Increasing marketing (Page promotion and etc).
              </ListGroup.Item>
              <ListGroup.Item>Scholarship for students</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MobinOpinion;
