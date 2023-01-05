import React from 'react';
import gardener from '../images/gardener.jpg'
import nanny from '../images/nanny.jpg'
import maid from '../images/maid.jpg'
import petsitter from '../images/petsitter.jpg'
import { Card, CardGroup } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';

 const custlog =() => {

  const {id} = useParams();
  
  const navigate = useNavigate();
  
  const redirect = (e) =>{
    e.preventDefault();
    navigate(`/${e.target.value}/${id}`)
  }

  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Img src={nanny} />
          <Card.Body>
            <Card.Title>Nanny</Card.Title>
            <Card.Text>
              We Provide best nanny services in city
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <center><button value={'nanny'} className="btn btn-dark" onClick={(e)=>redirect(e)}>Click to View</button></center>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img src={maid} />
          <Card.Body>
            <Card.Title>Maid</Card.Title>
            <Card.Text>
              We Provide best maid services in city
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <center><button value={'maid'} className="btn btn-dark" onClick={(e)=>redirect(e)}>Click to View</button></center>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img src={petsitter} />
          <Card.Body>
            <Card.Title>Pet Care</Card.Title>
            <Card.Text>
              We Provide best pet care services in city
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <center><button value={'petcare'} className="btn btn-dark" onClick={(e)=>redirect(e)}>Click to View</button></center>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img src={gardener} />
          <Card.Body>
            <Card.Title>Gardener</Card.Title>
            <Card.Text>
              We Provide best gardening service in city
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <center><button value={'gardener'} className="btn btn-dark" onClick={(e)=>redirect(e)}>Click to View</button></center>
          </Card.Footer>
        </Card>



      </CardGroup><br />
      <center><Link to={"/home"} className="btn btn-danger" >Sign Out</Link></center>
    </div>
  )
}

export default custlog;
