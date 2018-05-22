import React, { Component } from 'react';

import { Modal, Button } from 'react-bootstrap';

export default class DeleteMenu extends Component {

  constructor(props)
  {
    super(props);

    // save the users in the state
    this.state = {

    };
  }

  render() {
    return(
      <div className="static-modal">
      <Modal.Dialog>
      <Modal.Header>
      <Modal.Title>Delete Search</Modal.Title>
      </Modal.Header>
      <Modal.Body>Do you want to delete?</Modal.Body>
      <Modal.Footer>
      <Button onClick =
      {this.props.handeleDeleteButtonClicks.bind(this, 1)}>Yes</Button>
      <Button onClick =
      {this.props.handeleDeleteButtonClicks.bind(this, 0)}>No</Button>
      </Modal.Footer>
      </Modal.Dialog>
      </div>
    );
  }
}
