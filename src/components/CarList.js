import React, {Component} from 'react';
import MS_SERVER_URL from '../constants.js';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from '@material-ui/core/Button'


class CarList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: []
        };
    }
    componentDidMount() {
        fetch(MS_SERVER_URL + '/api/cars').then((response) => response.json()).then((responseData) => this.setState({cars: responseData._embedded.cars})).catch(err => console.error(err));

        console.log("carrss" + this.state.cars)
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

                Cell:<Button color='secondary'>DELETE</Button>
               
            }

        ]

        return (
            <div>
            <ReactTable data={this.state.cars} columns={columns} filterable={true} defaultPageSize={5}/>
                
            </div>
        );
    }
}

export default CarList;