
import React, { Component } from "react"
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Project from './Project'
class Projects extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let data = this.props.data
        return (
            <div>
                {
                    data.currentProject !== undefined &&
                    <h3> Projects </h3>
                }
                {
                    data.currentProjects.length > 0 &&
                    data.currentProjects.map((el, index) => (
                        <ListItem onClick={() => this.props.handleClickProject(el)} button key={el.id}>
                            <Project data={this.props.data} project={el} dispatchCountry={this.props.dispatchCountry} />
                        </ListItem>
                    ))
                }
                {
                    data.currentProject &&
                    <Button variant="contained" onClick={() => { this.props.dispatchCountry(data.currentCountry.alpha3) }} >
                        View all Projects in {this.props.data.currentProject.country}
                    </Button>
                }
                {
                    data.currentProjects.length <= 0 &&
                    <ListItem >
                        <ListItemText primary={"No projects"} />
                    </ListItem>
                }
                {
                    data.currentProject === undefined &&
                    <Button variant="contained" onClick={this.props.handleClickLoadMore} >
                        Load More
                    </Button>
                }
            </div>
        )
    }
}

export default Projects
