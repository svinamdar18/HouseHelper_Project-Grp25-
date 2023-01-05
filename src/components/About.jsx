import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import SVI from '../images/SVI-original.jpg'
import ARN from '../images/ARN-original.jpg'
import SG from '../images/SG-original.jpg'
import SS from '../images/SS-original.jpg'

export default function About() {
  return (
    <div>
        <div className='container-fluid col-8'>
            <h1 style={{textAlign: 'center'}} className='mt-3 text-secondary'>Developed by</h1><hr/><br/><br/>
        <CardGroup>
            <Card className='col-4'>
                <Card.Body>
                    <img src={SVI} height={150} alt='Not available'></img>
                </Card.Body>
            </Card>
            <Card className='col-8'>
                <Card.Body>
                    <p>Name: Sohail Inamdar</p>
                    <p>PRN: 220343120037</p>
                    <p>Institute: CDAC Infoway</p>
                </Card.Body>
            </Card>
        </CardGroup>
        <CardGroup>
            <Card style={{width:'18rem'}}>
                <Card.Body>
                    <img src={ARN} height={150} alt='Not available'></img>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <p>Name: Aditya Nair</p>
                    <p>PRN: 220343120003</p>
                    <p>Institute: CDAC Infoway</p>
                </Card.Body>
            </Card>
        </CardGroup>
        <CardGroup>
            <Card style={{width:'18rem'}}>
                <Card.Body>
                    <img src={SG} height={150} alt='Not available'></img>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <p>Name: Sadanand Gobade</p>
                    <p>PRN: 220343120036</p>
                    <p>Institute: CDAC Infoway</p>
                </Card.Body>
            </Card>
        </CardGroup>
        <CardGroup>
            <Card style={{width:'18rem'}}>
                <Card.Body>
                    <img src={SS} height={150} alt='Not available'></img>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <p>Name: Sujeet Shinde</p>
                    <p>PRN: 220343120102</p>
                    <p>Institute: CDAC Infoway</p>
                </Card.Body>
            </Card>
        </CardGroup>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        </div>
    </div>
  )
}
