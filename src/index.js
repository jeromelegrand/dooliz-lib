import React, {useState} from 'react';

const DoolizLib = () => {
    const [state, setState] = useState('foo');

    return (
        <div>
            <h1>test:  {state}</h1>
            <button onClick={() => setState(state === 'foo' ? 'bar': 'foo')}>change</button>
        </div>
    );
};

export default DoolizLib;
