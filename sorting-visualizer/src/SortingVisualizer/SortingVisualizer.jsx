import React from 'react';
import './SortingVisualizer.css'

export class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            array: [],
        };
    }

    //When component loads
    componentDidMount(){
        this.resetArray();
    }

    //When user hits reset button, populate a new array for the state with
    //random values
    resetArray() {
        const array = [];
        for(let i = 0; i < 100; i++){
            array.push(randomIntFromInterval(5, 1000));
        }
        this.setState({array});
    }

    render() {
        // Map values in array to array-bar
        // We include a key property with the index because React
        // values rendered in an iterable causes a warning
        const {array} = this.state;

        return (<>
            {array.map((value, idx) => (
                <div className="array-bar" key={idx}>
                    {value}
                </div>
            ))}
        </>
        );
    }
}

//Random numbers from stack overflow
function randomIntFromInterval(min, max){
    //min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}