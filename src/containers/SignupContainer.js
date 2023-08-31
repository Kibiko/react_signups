import { useState } from 'react';
import Counter from '../components/Counter';

const SignupContainer = () => {

    const [archeryCount, setArcheryCount] = useState(0);
    const [zorbCount, setZorbCount] = useState(0);
    const [canoeCount, setCanoeCount] = useState(0);

    return(
        <>
            <h2>Activities:</h2>
            <Counter 
                title={"Archery"} 
                count={archeryCount}
                onButtonClick={setArcheryCount}
            /> {/* these properties are all stored in an object called props which child can use */}
            <Counter 
                title={"Zorb"} 
                count={zorbCount}
                onButtonClick={setZorbCount}
            />
            <Counter 
                title={"Canoeing"} 
                count={canoeCount}
                onButtonClick={setCanoeCount}
            />
            <p>Total sign-ups: {archeryCount + zorbCount + canoeCount}</p>
        </>
    )

}

export default SignupContainer;