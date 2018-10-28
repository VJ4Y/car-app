import React, {Component} from 'react';


class CarList extends Component{
    constructor (props) {
        super(props);
        this.state={cars:[]};
    }
    componentDidMount () {
        fetch('http://localhost:8080/api/cars')
        .then((response)=>response.json())
        .then((responseData)=>this.setState(
            {cars:responseData._embedded.cars}
        ))

        .catch(err=>console.error(err));



        console.log("carrss"+this.state.cars)
    }
    
    render() {

        let a= this.state.cars.map((car)=>car.brand);
        console.log("carrr"+a);


        let tableRows=this.state.cars.map((car,i)=>
            <tr key={i}>
                <td>{car.brand}</td>
            </tr>
    
        );

        return (
            <div>
                <table>
                    <tbody>{tableRows}</tbody>
                </table>
                
            </div>
        );
    }
}

export default CarList;