import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

export class practice extends Component {
    state = {
        show : false
    }
    handleShow = () => {
        this.setState({ show : true})
    }
    handleClose = () => {
        this.setState({ show : false})
    }

    render() {
        console.log('default' , this.state.show , this.handleShow)
        return (
            <div className="body-container-wrapper">
                <Button variant="primary" onClick={this.handleShow}>
                    Launch demo modal
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose} >
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default practice
