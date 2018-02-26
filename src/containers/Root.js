import React from 'react';
import { Switch, Route} from 'react-router-dom';

import { Home, Profile, Explore, SignUp, SignIn, NotFoundPage } from '../views';

const Root = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/explore" component={Explore} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route component={NotFoundPage} />
        </Switch>
    )
}


export default Root;