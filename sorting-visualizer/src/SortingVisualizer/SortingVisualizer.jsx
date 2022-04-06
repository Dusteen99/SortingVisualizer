import React from 'react';
import './SortingVisualizer.css'
import * as sortingAlgorithms from '../sortingAlgorithms/sortingAlgorithms.js';

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
        for(let i = 0; i < 230; i++){
            array.push(randomIntFromInterval(5, 1000));
        }
        this.setState({array});
    }

    mergeSort(){
        const javaScriptSortedArray = this.state.array.slice().sort((a, b) => a - b);
        const sortedArray = sortingAlgorithms.mergeSort(this.state.array);

        console.log(arraysAreEqual(javaScriptSortedArray, sortedArray));
    }

    quickSort(){

    }

    heapSort(){

    }

    bubbleSort(){

    }

    //Automated testing of all sorting algorithms
    testSortingAlgorithms(){
        for (let i = 0; i < 100; i++){
            const array = [];
            const bound = randomIntFromInterval(1, 1000);

            for(let i = 0; i < bound; i++){
                array.push(randomIntFromInterval(-1000, 1000));
            }
            const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
            const mergeSortedArray = sortingAlgorithms.mergeSort(array.slice());
            console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
        }
    }

    render() {
        // Map values in array to array-bar
        // We include a key property with the index because React
        // values rendered in an iterable causes a warning
        const {array} = this.state;

        return (
            <div className="array-container">
                {array.map((value, idx) => (
                    <div 
                    className="array-bar" 
                    key={idx}
                    style={{height: `${value}px`}}></div>
                ))}
                <button onClick={() => this.resetArray()}>Generate New Array</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                <button onClick={() => this.quickSort()}>Quick Sort</button>
                <button onClick={() => this.heapSort()}>Heap Sort</button>
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                <button onClick={() => this.testSortingAlgorithms()}>Test Sorting Algorithms</button>
            </div>
        );
    }
}

//Random numbers from stack overflow
function randomIntFromInterval(min, max){
    //min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Used for testing sorting algorithms
function arraysAreEqual(arrayOne, arrayTwo){
    if(arrayOne.length !== arrayTwo.length) return false;

    for(let i = 0; i < arrayOne.length; i++){
        if(arrayOne[i] !== arrayTwo[i]) return false;
    }
    return true;
}