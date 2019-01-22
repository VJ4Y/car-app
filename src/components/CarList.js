import React, {Component} from 'react';
import MS_SERVER_URL from '../constants.js';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from '@material-ui/core/Button'
import AddCar  from './AddCar.js';


class CarList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: []
        };

        this.fetchCars=this.fetchCars.bind(this);
    }
    componentDidMount() {
        this.fetchCars();
    }

    fetchCars(){
        fetch(MS_SERVER_URL + '/api/cars').then((response) => response.json())
        .then((responseData) => {
            console.log("fetched cars "+responseData._embedded)
            this.setState({cars: responseData._embedded.cars});

                })
        .catch(err => console.error(err));
    }
    

    addCar(car){
        console.log("in addCar " + JSON.stringify(car))
        fetch(MS_SERVER_URL + '/api/cars', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        }).then((response) => {this.fetchCars();})
        .catch(err => console.error(err));
    }

    deleteCar=(link)=>{
        
        fetch(link, {
            method: 'DELETE'
        }).then((response) => {this.fetchCars();})
        .catch(err => console.error(err));
    }
    

    render() {

        const columns = [
            {
                Header: 'Brand',
                accessor: 'brand'
            },
            {
                Header: 'Color',
                accessor: 'color'
            },
            {
                Header: 'Model',
                accessor: 'model'
            },
            {
                Header: 'Price(m)',
                accessor: 'price'
            },
            {
                Header: 'RegNumber',
                accessor: 'reg_number'
            },
            {
                Header: 'Year',
                accessor: 'year'
            },
            {
                sortable:false,
                filterable:false,
                accessor: '_links.self.href',
                Cell:({value})=><Button onClick={()=>this.deleteCar(value)} color='secondary'>DELETE</Button>
               
            }

        ]

        return (
            <div>
            <AddCar addCar={this.addCar} fetchCars={this.fetchCars} />
            <ReactTable data={this.state.cars} columns={columns} filterable={true} defaultPageSize={5}/>
                
            </div>
        );
    }
}

export default CarList;