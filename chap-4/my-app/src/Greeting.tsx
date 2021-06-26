
interface GreetingsProps {
    message: string | undefined;
};

const Greeting = (props: GreetingsProps) => {

    const { message } = props

    

    return (
        <>
            <h1> {message} </h1>           
        </>
    )

};

export default Greeting;