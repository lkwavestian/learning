import React, { Fragment } from 'react';
import UseState from './useState';
import UseEffect from './useEffect';
import UseContext from './useContext';
import UseReducer from './useReducer';
import UseMemo from './useMemo';
import UseRef from './useRef';
import UseCallBack from './useCallBack';

function BaseUse(params) {
    return (
        <Fragment>
            {/* <UseState /> */}
            {/* <UseEffect /> */}
            {/* <UseContext /> */}
            {/* <UseReducer /> */}
            {/* <UseMemo /> */}
            {/* <UseCallBack /> */}
            <UseRef />
        </Fragment>
    );
}

export default BaseUse;
