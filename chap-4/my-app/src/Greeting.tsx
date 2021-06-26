import React, { FC, useState } from "react";



interface GreetingState {
    message: string
}

interface GreetingsProps {
    name?: string;
};

const Greeting: FC<GreetingsProps> = (props: GreetingsProps) => {

    const {name} = props 

    // const [msg, setMsg] = useState<GreetingState>({message:''})    

    // if (!name) {
    //     setMsg({message: 'No tiene nombre'})
    // }

    return (
        <>
            <h1> Mi nombre es {name ? <span>{name}</span> : <span>no</span>}</h1>
        </>
    )

};

export default Greeting;