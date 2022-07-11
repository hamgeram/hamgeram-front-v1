import React from "react";
import {ChartLine} from "./../../components/Charts/Charts";

import { withStyles, Grid } from "material-ui";

import {
    RegularCard,
    Table,
    ItemGrid
} from "components";

export const CompetitorsChart = () => {
    return(
        <div>
            <Grid container>

                <ItemGrid xs={12} sm={12} md={6}>
                    <RegularCard
                        headerColor="orange"
                        cardTitle="تعداد فالور ها"
                        content={
                            <ChartLine></ChartLine>
                        }
                    />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={6}>
                    <RegularCard
                        headerColor="blue"
                        cardTitle="فالور های جدید"
                        content={
                            <ChartLine></ChartLine>
                        }
                    />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={6}>
                    <RegularCard
                        headerColor="red"
                        cardTitle="تعداد لایک ها"
                        content={
                            <ChartLine></ChartLine>
                        }
                    />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={6}>
                    <RegularCard
                        headerColor="purple"
                        cardTitle="تعداد کامنت ها"
                        content={
                            <ChartLine></ChartLine>
                        }
                    />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={6}>
                    <RegularCard
                        headerColor="green"
                        cardTitle="Engagement"
                        content={
                            <ChartLine></ChartLine>
                        }
                    />
                </ItemGrid>
            </Grid>

        </div>
    )
};
