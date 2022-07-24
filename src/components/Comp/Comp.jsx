import React from "react";
import { withStyles, Grid } from "material-ui";

import {
    RegularCard,
    Table,
    ItemGrid
} from "components";

const Comp = (props) => {
    return(
        <Grid container>

            <ItemGrid xs={12} sm={12} md={6}>
                <RegularCard
                    headerColor="orange"
                    cardTitle="تعداد فالور ها"
                    content={
                        <div>
                            <div>
                                following 10
                                followers 18
                                post 18
                            </div>
                            <></>
                        </div>
                    }
                />
            </ItemGrid>
            </Grid>
    );
};
