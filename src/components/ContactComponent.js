
import React from "react";
import { Button, Form } from "react-bootstrap";

function Contact() {
  return (
    <div>
      <Form style={{
          padding: "40px"
      }}>
          <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="email" placeholder="Obi Wan Kenobi" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="ObiWanKenobi@TheJediCouncel.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button type="submit" className="mb-2">
        Submit
      </Button>
      </Form>
    </div>
  );
}
export default Contact;
