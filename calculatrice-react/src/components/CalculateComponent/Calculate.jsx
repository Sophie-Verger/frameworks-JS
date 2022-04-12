import React from 'react';
import Button from '../ButtonComponent/Button';

class Calculate extends React.Component {
    
    state = {
        numbers: [
            { value: 1, classname:'number' },
            { value: 2, classname:'number' },
            { value: 3, classname:'number' },
            { value: 4, classname:'number' },
            { value: 5, classname:'number' },
            { value: 6, classname:'number' },
            { value: 7, classname:'number' },
            { value: 8, classname:'number' },
            { value: 9, classname:'number' },
        ],
        symbols: [
            { value: '+', classname:'' },
            { value: '-', classname:'' },
            { value: '*', classname:'' },
            { value: '/', classname:'' },
            { value: '=', classname:'' },
            { value: 'AC', classname:'' },
        ],
        total: 0,
    }

    addition = () => {
        console.log('hey')
        this.setState.total += 1
       
    }


    render() {
        return (
            <div>
                <div>
                {this.state.numbers.map((number, index) => {
                    return (
                        <span key={index}>
                            <Button onClick={this.addition()} classname={number.classname} value={number.value}/>
                        </span>
                        )
                    })}
                </div>
                
                <div>
                {this.state.symbols.map((symbol, index) => {
                    return (
                        <span key={index}>
                            <Button classname={symbol.classname} value={symbol.value}/>
                        </span>
                        )
                    })}
                </div>
                
                <div>{this.state.total}</div>
            </div>

        )
    }

    
}

export default Calculate