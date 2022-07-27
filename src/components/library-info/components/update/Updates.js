import React, { Fragment } from 'react';

// Styles
import classes from './Updates.module.css';

const Updates = (props) => {
    console.log(`L4 - inside Updates compt`);

    // const authCtx = useContext(AuthContext);

    return (
        <Fragment>
            <div className={classes.update}>
                <span className={classes.update__info}> The contents will be updated soon!!!</span>
            </div>
        </Fragment>
    )
}

export default Updates;