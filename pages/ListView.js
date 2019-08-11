
import React, { Component } from "react"
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Projects from './Projects'

class ListView extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let data = this.props.data

        //ListView utilizes the permanent draw component and List component from Material UI 
        return (
            <Drawer
                variant="permanent"
                anchor="right"
            >
                <h1> Projects </h1>
                {
                    // If the user is looking at a country or a project, display button that
                    // takes user back to view all projects
                    (this.props.data.currentCountry || this.props.data.currentProject) &&
                    <Button variant="contained" onClick={this.props.viewAllProjects} >
                        View all Projects
                    </Button>
                }
                <List width={this.props.width}>
                    {
                        data.currentCountry !== undefined &&
                        <h2>
                            {data.currentCountry.country}
                        </h2>
                    }
                    <Projects 
                        data={data}
                        handleClickProject={this.props.handleClickProject}
                        dispatchCountry={this.props.dispatchCountry}
                        handleClickLoadMore={this.props.handleClickLoadMore} />
                </List>
            </Drawer>
        )
    }
}

export default ListView
