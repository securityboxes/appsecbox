import {Route, Switch} from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import ItemsList from "../ui/ItemsList";
import Api from "../api/Api";
import ApplicationForm from "../application/ApplicationForm";
import ApplicationPage from "../application/ApplicationPage";
import DatasetForm from "../application/DatasetForm";
import ComponentPage from "../application/ComponentPage";
import UseCasePage from "../application/UseCasePage";

const Routing = () => (
    <Switch>
        <Route exact path={"/application/:id"} component={ApplicationPage}/>
            <Route exact path={"/application/:applicationId/component/:componentId"} component={ComponentPage}/>
            <Route exact path={"/application/:applicationId/use-case/:useCaseId"} component={UseCasePage}/>

        <Route exact path={"/application"} render={(props) => (
            <span>
                <ApplicationForm></ApplicationForm>
                <br/>
                <ItemsList type={"application"} getDataPromise={Api.getApplications()}/>
            </span>
        )}/>

        <Route exact path={"/dataset"} render={(props) => (
            <span>
                <DatasetForm></DatasetForm>
                <br/>
                <ItemsList type={"dataset"} getDataPromise={Api.getDatasets()}/>
            </span>
        )}/>

        <Route exect path={"/"} component={Dashboard}/>
    </Switch>
)

export default Routing