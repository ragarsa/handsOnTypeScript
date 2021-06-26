import React from "react";

interface GreetingState {
    message: string
}

interface GreetingProps {
    name?: string
};

export default class GreetingClass extends React.Component<GreetingProps> {
    constructor(props: GreetingProps) {
        super(props);
        this.state = {
            message: `Hello, Im ,${this.props.name}`
        }
    }
    state: GreetingState;

    static getDerivedStateFromProps(props: GreetingProps,
        state:GreetingState) {
            console.log(props, state); 
            if(props.name && props.name !== state.message) {
                const newState = {...state}; 
                newState.message = GreetingClass.getNewMessage(props.name);
                return newState
            }
            return state; 
        }

    static getNewMessage(name = ''){
        return `Hello, Im ${name}`
    }

    render() {
        console.log("rendering Greeting")
        if(!this.props.name) {
            return <div> No name </div>
        }

        return <div> {this.state.message} </div>;
    }
}