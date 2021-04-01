import React, {Component} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, Container, Row, Col, Modal, ModalBody, ModalHeader, Label, FormGroup, Input
  } from 'reactstrap';
  import { Control, LocalForm, Errors } from 'react-redux-form';

  
  const required = val => val && val.length;
  const maxLength = len => val => !val || (val.length <= len);
  const minLength = len => val => val && (val.length >= len);

  class MealForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            isModalOpen: false
          };

          this.toggleModal = this.toggleModal.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);

    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

    handleSubmit(values) {
        this.toggleModal();
        this.props.postMeal(values.name, values.almonds, values.avocado, values.beef, values.blueberries, values.darkChocolate, values.darkLeafyGreens, values.eggs, values.extraVirginOliveOil, values.salmon, values.description, values.directions);
        
    }

    render(){
        return(
            <>
            <Button style={{margin: '20px',}} onClick={this.toggleModal} outline><i className="fa fa-pencil"></i>New Meal</Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>  
                <ModalHeader toggle={this.toggleModal}>Submit New Meal</ModalHeader>
                <ModalBody toggle={this.toggleModal}>
                    <LocalForm onSubmit={values => this.handleSubmit(values)}>
                    {/* Meal Name */}
                        <div className="form-group">
                            <Label htmlFor="name">Meal Name:</Label>
                            <Control.text 
                            className="form-control"
                            model=".name" 
                            id="name" 
                            placeholder="What is it called?"
                            validators={{
                                required,
                                minLength: minLength(2),
                                maxLength: maxLength(15)
                            }}/>
                            <Errors
                                className="text-danger"
                                model=".title"
                                show="touched"
                                component="div"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be at least 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
                        </div>
                        {/* Brain Foods */}
                        <FormGroup tag="fieldset">
                            <legend>Brain Foods</legend>
                            <FormGroup check>
                                <Input id="checkbox1-almonds" type="checkbox" name="almonds" />
                                <Label check for="checkbox1-almonds">
                                    Almonds
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Input id="checkbox1-avocado" type="checkbox" name="avocado" />
                                <Label check for="checkbox1-avocado">
                                    Avocado
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Input id="checkbox1-beef" type="checkbox" name="beef" />
                                <Label check for="checkbox1-beef">
                                    Beef
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Input id="checkbox1-blueberries" type="checkbox" name="blueberries" />
                                <Label check for="checkbox1-blueberries">
                                    Blueberries
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Input id="checkbox1-darkChocolate" type="checkbox" name="darkChocolate" />
                                <Label check for="checkbox1-darkChocolate">
                                    Dark Chocolate
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Input id="checkbox1-darkLeafyGreens" type="checkbox" name="darkLeafyGreens" />
                                <Label check for="checkbox1-darkLeafyGreens">
                                    Dark Leafy Greens
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Input id="checkbox1-eggs" type="checkbox" name="eggs" />
                                <Label check for="checkbox1-eggs">
                                    Eggs
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Input id="checkbox1-extraVirginOliveOil" type="checkbox" name="extraVirginOliveOil" />
                                <Label check for="checkbox1-extraVirginOliveOil">
                                    Extra Virgin Olive Oil
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Input id="checkbox1-salmon" type="checkbox" name="salmon" />
                                <Label check for="checkbox1-salmon">
                                    Salmon
                                </Label>
                            </FormGroup>
                        </FormGroup>
                    {/* Meal Description */}
                        <div className="form-group">
                            <Label htmlFor="description">Meal Description</Label>
                            <Control.textarea className="form-control" model=".description" id="description" name="description"
                                rows="6"
                                className="form-control"
                            />
                        </div> 
                     {/* Meal Preparation */}
                        <div className="form-group">
                            <Label htmlFor="directions">Prep Directions</Label>
                            <Control.textarea className="form-control" model=".directions" id="directions" name="directions"
                                rows="6"
                                className="form-control"
                                placeholder="separate each step with a '  ,  '"
                            />
                        </div> 
                        <Button type="submit" color="secondary">
                           Submit
                        </Button>
                    </LocalForm>
                </ModalBody>
            </Modal>
            </>
        )
    }
}


function FoodBankList(props){
    const foodList = props.meals.map
    (item => {
        return (
        <Col style={{margin: '20px'}} className="d-flex align-items-stretch" md="4">
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
                <MealForm postMeal={this.props.postMeal}/>
                <FoodBankList meals={this.props.meals}/>
            </div>
        )
    }
}

export default FoodBank;