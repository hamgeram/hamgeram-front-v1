import React, {useEffect} from "react";
import Comp from "../../components/Comp/Comp";
import FormDialog from "../../dialogs/setPage";
import {getCompetitors} from "../../services/Competitors";
import {handleGetCompetitor} from "../../actions/comptitors";
import {useDispatch, useSelector} from "react-redux";
import {store} from "../../store";
import {ItemGrid, RegularCard} from "../../components";
import {Grid} from "material-ui";
import config from "../../services/config.json";

export const Competitors = () => {

    const shop = useSelector(state => state.competitors);
    const user = useSelector(state => state.insgeramUser);
    const dispatch = useDispatch();
    console.log(user)
    useEffect(() => {
        console.log(user)
        let array = [];
        for (const key in user){
            array.push(user[key])
        }

        {array.map(data => (
            store.dispatch(handleGetCompetitor(data.username))
        ))}
    }, [user]);





    let array2 = [];
    for (const key in shop) {
        array2.push(shop[key])
    }


    return(
        <div>
            <FormDialog/>
            <Grid container>
                {array2.map(data => (
                    <Comp data={data} dispatch={dispatch}/>
                ))}
            </Grid>
        </div>




    )
}
