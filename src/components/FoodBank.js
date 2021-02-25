import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, Container, Row, Col
  } from 'reactstrap';
  

function FoodBankList(props){
    const foodList = props.meals.map
    (item => {
        return (
        <Col className="d-flex align-items-stretch" md="4">
            <Card key={item.id}>
                <CardImg top width="100%" src={item.image} alt={item.name}/>
                <CardBody>
                <CardTitle tag="h5">{item.name}</CardTitle>
                <CardText>
                    {item.description}
                </CardText>
                <Button>See Meal Card</Button>
                </CardBody>
            </Card>
        </Col>
        ); 
    });

    return(
        <Container>
            <Row >
                {foodList}
            </Row>
        </Container>
    )
}

class FoodBank extends React.Component{
    render(){
        return(
            <div>
               <FoodBankList meals={this.props.meals}/>
            </div>
        )
    }
}

export default FoodBank;