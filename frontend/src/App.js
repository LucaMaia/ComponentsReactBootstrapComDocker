import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Carousel,
    Badge,
    CloseButton,
    Modal,
    DropdownButton,
    Dropdown,
    Navbar,
    Container, NavDropdown, Nav
} from "react-bootstrap";

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <img src='./logo512.png' className="App-logo" alt="logo" />
          <div className="d-grid gap-2" display="inline-block" style={{paddingLeft:"900px"}}>
              <Button variant="primary" size="lg">
                Sign in
              </Button>
          </div>

        <div display="inline-block" style={{padding:"20px", display:"inline-block"}}>
              <Button variant="secondary" size="lg" >
                  Sign out
              </Button>
          </div>
      </header>

        <div>
            <h3>Close Button</h3>
            <div style={{padding:"20px"}}>
                <CloseButton variant="white" />
            </div>

            <div style={{padding:"20px"}}>
                <CloseButton variant="white" disabled/>
            </div>
        </div>

        <div>
            <h3>Modal</h3>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>

        <div>
            <h3>Dropdown</h3>
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
        </div>

        <div style={{padding:"20px"}}>
            <h3>Navbar - Dropdown</h3>
            <Navbar variant="dark" bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-dark-example" />
                    <Navbar.Collapse id="navbar-dark-example">
                        <Nav>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="Dropdown"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

        <div>
            <h3>Base Nav</h3>
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>

            <h3>Base Nav#2</h3>

            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Active</Nav.Link>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
            </Nav>


            <div>
                <h3>Base Nav#2</h3>

            </div>

        </div>

    </div>

  );
}

export default App;
