import React,{Component} from "react";
import {withStyles, Grid, TextField, FormLabel, RadioGroup, FormControl, FormControlLabel, Radio} from "material-ui";
import { Form, Field } from "react-final-form";
import {
    RegularCard,
    Table,
    ItemGrid, Button, IconButton
} from "components";
import {imageSlider} from "../imageSlider/imageSlider";
import { Close } from "@material-ui/icons";
import {handleCourseDelete} from "../../actions/comptitors";

// import CloseIcon from '@mui/icons-material/Close';
class Comp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: "1",
            selected: "1",
            name: this.props.data.name,
            followers: this.props.data.followers,
            following: this.props.data.following,
            posts: this.props.data.posts,
            engagement: this.props.data.engagement,
            like: this.props.data.like,
            bio: this.props.data.bio,
            comment: this.props.data.comment,
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

    handleDelete = () => {
        // const  dispatch  = this.props.dispatch;
        this.props.dispatch(handleCourseDelete());
    }

    render() {
        return (
                <ItemGrid xs={12} sm={12} md={6}>
                    <RegularCard
                        headerColor="orange"
                        cardTitle=
                            {<div>
                                <Grid container
                                      style={{marginBottom:"2vh"}}>
                                    <Grid xs={10} sm={10} md={11}>{this.state.name}</Grid>
                                    <Grid xs={2} sm={2} md={1}>
                                        <IconButton onClick={this.handleDelete} color={"white"}>
                                            <Close/>
                                        </IconButton>
                                    </Grid>
                                </Grid>
                        </div>
                        }
                        content={
                            <div>
                                <div style={{textAlign: "left"}}>

                                    <Grid container
                                          style={{marginBottom:"2vh"}}>
                                        <ItemGrid xs={4} sm={4} md={4}>following {this.state.following}</ItemGrid>
                                        <ItemGrid xs={4} sm={4} md={4}>followers {this.state.followers}</ItemGrid>
                                        <ItemGrid xs={4} sm={4} md={4}>post {this.state.posts}</ItemGrid>
                                    </Grid>
                                </div>
                                <div>
                                    <Grid container>
                                        <ItemGrid xs={12} sm={12} md={6}>بیو : {this.state.bio} </ItemGrid>
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
                                        <ItemGrid xs={12} sm={12} md={12}>+({this.state.like})2% like</ItemGrid>
                                        <ItemGrid xs={12} sm={12} md={12}>+({this.state.comment})2% comment</ItemGrid>
                                        <ItemGrid xs={12} sm={12} md={12}>+({this.state.engagement})2% Engagement</ItemGrid>


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

        );
    }
}
export default Comp;


