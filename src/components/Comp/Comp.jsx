import React,{Component} from "react";
import {withStyles, Grid, TextField, FormLabel, RadioGroup, FormControl, FormControlLabel, Radio} from "material-ui";
import { Form, Field } from "react-final-form";
import {
    RegularCard,
    Table,
    ItemGrid, Button
} from "components";
import {imageSlider} from "../imageSlider/imageSlider";


class Comp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: "1",
            selected: "1"
        };
    }

    handleChange = e => {
        if (e.target.value === "1") {
            console.log("mamad hooo")
            this.setState({
                show: "1",
                selected: e.target.value
            });
        } else {
            this.setState({
                show: "2",
                selected: e.target.value
            });
        }
    };

    render() {
        return (
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
                                            <div>
                                                <form>
                                                    <input
                                                        type="radio"
                                                        value="1"
                                                        name="content"
                                                        id="1"
                                                        onClick={this.handleChange}
                                                        checked={this.state.selected === "1"}
                                                    />
                                                    <label htmlFor="1">هفته</label>

                                                    <input
                                                        type="radio"
                                                        value="2"
                                                        name="content"
                                                        id="2"
                                                        onClick={this.handleChange}
                                                        checked={this.state.selected === "2"}
                                                    />
                                                    <label htmlFor="2">دو هفته</label>

                                                    <input
                                                        type="radio"
                                                        value="3"
                                                        name="content"
                                                        id="3"
                                                        onClick={this.handleChange}
                                                        checked={this.state.selected === "3"}
                                                    />
                                                    <label htmlFor="hide">ماه</label>


                                                </form>

                                            </div>

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
    }
}
export default Comp;


