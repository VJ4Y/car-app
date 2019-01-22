import React, {Component} from 'react';
import {Modal, Dialog,TextField, Button, FormControl, InputLabel, Input} from '@material-ui/core'
// import Button from '@material-ui/core/Button'
const emptyForm={
    brand:'',
    color:'',
    model:'',
    price:'',
    reg_number:'',
    year:''
};

class AddCar extends Component {
    constructor(props) {
        super(props);
        this.state=emptyForm;
        this.state = {
            showModal:false
        };
    }

    // <h3>Form to add New Car</h3>
    // <input type='text' name='brand'/>
    // <input type='text' name='color'/>
    // <input type='text' name='price'/>
    // <input type='text' name='reg_number'/>
    // <input type='text' name='year'/>
// this.refs.addDialog.show()
handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    });
    console.log("in hNDLE "+this.state)
}

handleSubmit=(event) => {
    console.log(this.state);
    
    var newCar={
        brand:this.state.brand,
        color:this.state.color,
        model:this.state.model,
        price:this.state.price,
        reg_number:this.state.reg_number,
        year:this.state.year
    };

    this.props.addCar(newCar);
    this.setState({showModal:false})

}



render() {
    return (
        <div>Add a car {this.state.showModal && <Dialog title='A Dialog' title="Trytry 1" open>
                <form>
                    <FormControl fullWidth margin='dense' variant='outlined'>
                        <InputLabel >Brand</InputLabel>
                        <Input name='brand' onChange={this.handleChange}></Input>
                    </FormControl>

                    <FormControl fullWidth margin='dense' variant='outlined'>
                        <InputLabel>Color</InputLabel>
                        <Input name='color' onChange={this.handleChange}></Input>
                    </FormControl>

                    <FormControl fullWidth margin='dense' variant='outlined'>
                        <InputLabel>Model</InputLabel>
                        <Input name='model' onChange={this.handleChange}></Input>
                    </FormControl>

                    <FormControl fullWidth margin='dense' variant='outlined'>
                    <InputLabel >Price</InputLabel>
                    <Input name='price' onChange={this.handleChange}></Input>
                    </FormControl>

                    <FormControl fullWidth margin='dense' variant='outlined'>
                        <InputLabel >Reg Number</InputLabel>
                        <Input name='reg_number' onChange={this.handleChange}></Input>
                    </FormControl>


                    <FormControl fullWidth margin='dense' variant='outlined'>
                        <InputLabel >Year</InputLabel>
                        <Input name='year' onChange={this.handleChange}></Input>
                    </FormControl>

                    
                        <Button
                            size='medium'
                            variant='outlined'
                            color='secondary'
                            onClick={() => this.setState(emptyForm)}>Reset</Button>
                    
                        <Button variant='contained' color='primary' 
                            onClick={() => this.handleSubmit()}>Submit</Button>
                    
                        <Button type='close' variant='contained' color='secondary' onClick={() => this.setState({showModal: false})}>Cancel</Button>
                        
                </form>
            </Dialog>}
            <Button color='primary' onClick={() => this.setState({showModal: true})}>New Car</Button>
        </div>

    );
}

}
export default AddCar;
