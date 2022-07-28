import React from "react";
import {withStyles, Grid, TextField, FormLabel, RadioGroup, FormControl, FormControlLabel, Radio} from "material-ui";

import {
    RegularCard,
    Table,
    ItemGrid, Button
} from "components";
import {imageSlider} from "../imageSlider/imageSlider";

const Comp = (props) => {
    return(
        <Grid container>
            <ItemGrid xs={12} sm={12} md={6}>
                <RegularCard
                    headerColor="orange"
                    cardTitle="پیج ممد"
                    content={
                        <div>
                            <div style={{textAlign: "left"}}>

                                <Grid container
                                      style={{marginBottom:"2vh"}}>
                                    <ItemGrid xs={4} sm={4} md={4}>following 10</ItemGrid>
                                    <ItemGrid xs={4} sm={4} md={4}>followers 18</ItemGrid>
                                    <ItemGrid xs={4} sm={4} md={4}>post 10</ItemGrid>
                                </Grid>
                            </div>
                            <div>
                                <Grid container>
                                    <ItemGrid xs={12} sm={12} md={6}>بیو : آموزش کسب کارهای اینستاگرامی</ItemGrid>
                                    <ItemGrid xs={12} sm={12} md={6}>
                                        <FormControl style={{textAlign:"left"}}>
                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group"
                                            >
                                                <FormControlLabel value="female" control={<Radio />} label="هفته" />
                                                <FormControlLabel value="male" control={<Radio />} label="15 روز" />
                                                <FormControlLabel value="other" control={<Radio />} label="ماه" />
                                            </RadioGroup>
                                        </FormControl>
                                    </ItemGrid>
                                </Grid>
                            </div>
                            <div>
                                <Grid container>
                                    <ItemGrid xs={12} sm={12} md={12}>+(100)2% like</ItemGrid>
                                    <ItemGrid xs={12} sm={12} md={12}>+(100)2% comment</ItemGrid>
                                    <ItemGrid xs={12} sm={12} md={12}>+(100)2% Engagement</ItemGrid>


                                </Grid>
                            </div>
                            <div>
                                <Grid container>
                                    <ItemGrid xs={12} sm={12} md={12}>
                                    </ItemGrid>
                                </Grid>
                            </div>
                        </div>
                    }
                />
            </ItemGrid>
            </Grid>
    );
};
export default Comp;
