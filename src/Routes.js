import {HashRouter, Switch, Route} from "react-router-dom";
import Home from "./Home";
import HookUsingIndex from "./hookUsing/Index";
import ClickCounter from "./hookUsing/ClickCounter";

function Routes() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/hook-using" render={() => (
                    <>
                        <Route path="/hook-using" component={HookUsingIndex} exact />
                        <Route path="/hook-using/use-state" component={ClickCounter}/>
                    </>
                )}>
                </Route>
            </Switch>
        </HashRouter>
    );
}

export default Routes;
