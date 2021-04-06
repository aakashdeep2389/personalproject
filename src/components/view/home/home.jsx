import React from "react";
import { CardDeck, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// import ReduxComponent3 from '../reactRedux/ReduxComponent3'

const Home = () => {
  return (
    <div className="body-container-wrapper">
      <div className="p-4 text-center">home page</div>
      <CardDeck className="project_cards">
        <Card>
          <Card.Body>
            <Card.Title>Otp verification</Card.Title>
            <Card.Text>
              Otp verification
              <Link to="/javascri_ptpractice" className="card_url"></Link>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Api Callink</Card.Title>
            <Card.Text>
              Api Calling
              <Link to="/api_call" className="card_url"></Link>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Vertical Slider</Card.Title>
            <Card.Text>
              Vertical Slider
              <Link to="/vertical_slider" className="card_url"></Link>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>React Redux</Card.Title>
            <Card.Text>
              <Link to="/react_redux" className="card_url"></Link>
              React Redux
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Slick Slider</Card.Title>
            <Card.Text>
              Slick Slider
              <Link to="/slick_slider" className="card_url"></Link>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Lottie animation</Card.Title>
            <Card.Text>
              Lottie animation
              <Link to="/lottie_animation" className="card_url"></Link>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Redux with api call</Card.Title>
            <Card.Text>
              Reduc practice (09/07/2020)
              <Link to="/reduxComponent3" className="card_url"></Link>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className="bg-warning">
          <Card.Body>
            <Card.Title>Redux with api call</Card.Title>
            <Card.Text>
              Reduc practice (18/09/2020)
              <Link to="/ReduxComponent4" className="card_url"></Link>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">18/09/2020</small>
          </Card.Footer>
        </Card>
        <Card className="bg-success">
          <Card.Body>
            <Card.Title>To Do List</Card.Title>
            <Card.Text>
              Reduc practice (08/10/2020)
              <Link to="/todolist" className="card_url"></Link>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-light">08/10/2020</small>
          </Card.Footer>
        </Card>
        <Card className="bg-info">
          <Card.Body>
            <Card.Title>Api Method</Card.Title>
            <Card.Text>
              Api method with short a app or user
              <br />
              get/put/post/delete <br />
              userHistory, useparams hooks in routing
              <Link to="/userlist" className="card_url"></Link>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-light">08/10/2020</small>
          </Card.Footer>
        </Card>

        <Card className="bg-info">
          <Card.Body>
            <Card.Title>Dropdown implement</Card.Title>
            <Card.Text>
              Dropdown implement
              <Link to="/dropdown_implement" className="card_url"></Link>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-light">08/10/2020</small>
          </Card.Footer>
        </Card>

        <Card className="bg-primary">
          <Card.Body>
            <Card.Title>login authentication</Card.Title>
            <Card.Text>
              login authentication
              <Link to="/login_auth" className="card_url"></Link>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-light">15/11/2020</small>
          </Card.Footer>
        </Card>
        <Card className="bg-light">
          <Card.Body>
            <Card.Title>Tic-tac-toe</Card.Title>
            <Card.Text>
              Tic-tac-toe
              <Link to="/TicTacToe" className="card_url"></Link>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-light">15/11/2020</small>
          </Card.Footer>
        </Card>
        <Card className="bg-dark text-light">
          <Card.Body>
            <Card.Title>scroll F</Card.Title>
            <Card.Text>
              scroll F<Link to="/scroll_F" className="card_url"></Link>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-light">15/02/2021</small>
          </Card.Footer>
        </Card>
        <Card className="bg-danger text-light">
          <Card.Body>
            <Card.Title>custom slider</Card.Title>
            <Card.Text>
              slider<Link to="/slider" className="card_url"></Link>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-light">17/02/2021</small>
          </Card.Footer>
        </Card>
        <Card className="bg-secondary text-light">
          <Card.Body>
            <Card.Title>snakeNstare</Card.Title>
            <Card.Text>
            snakeNstare<Link to="/snakeNstare" className="card_url"></Link>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-light">17/02/2021</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Home;
