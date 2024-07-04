import Form from "react-bootstrap/Form";

function SubscirbeForm() {
  return (
    <div>
      {" "}
      <section>
        <div className="form-popup">
          <div className="popup">
            <h2>SUBSCRIBE &amp; GET 10% OFF</h2>
            <p>Promotions, New Products And Sales. Directly To Your Inbox.</p>
            <Form>
              <Form.Group
                className="d-flex align-items-center"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="email"
                  placeholder="Your Email"
                  className="me-2"
                />{" "}
                <button type="submit">Subscribe</button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SubscirbeForm;
