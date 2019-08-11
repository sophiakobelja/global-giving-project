
import React, { Component } from "react"
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

class Project extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let project = this.props.project
        return (
            <div>
                <h4>{project.title}</h4>
                <img src={project.imageLink} />
                <ListItemText primary={'Country'} secondary={project.country} />
                <ListItemText primary={'Goal'} secondary={'$' + project.goal} />
                <ListItemText primary={'Funding'} secondary={'$' + project.funding} />
            </div>
        )
    }
}

export default Project
