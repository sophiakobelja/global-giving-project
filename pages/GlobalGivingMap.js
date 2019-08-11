
import React, { Component } from "react"
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
    Markers,
    Marker,
} from "react-simple-maps"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ListView from './ListView'
import MapView from './MapView'
import {
    initializeCountries,
    fetchProjects,
    fetchProjectsByCountry,
    zoom,
    zoomScale,
    center,
    setCurrentProject,
    loadAllProjects
} from '../redux/actions'

class GlobalGivingMap extends Component {
    constructor(props) {
        super(props)
        this.handleZoomIn = this.handleZoomIn.bind(this)
        this.handleZoomOut = this.handleZoomOut.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.handleCountryClick = this.handleCountryClick.bind(this)
        this.dispatchCountry = this.dispatchCountry.bind(this)
        this.handleClickProject = this.handleClickProject.bind(this)
        this.handleClickLoadMore = this.handleClickLoadMore.bind(this)
    }

    //When component mounts, get initial 50 countries
    //and initialize static list of countries from /static/countries.json
    componentDidMount() {
        this.props.dispatch(fetchProjects())
        //dispatching initialize countries
        this.props.dispatch(initializeCountries())
    }

    handleZoomIn() {
        this.props.dispatch(zoomScale(1.5))
    }
    
    handleZoomOut() {
        this.props.dispatch(zoomScale(.75))
    }

    handleClickProject(project) {
        this.props.dispatch(setCurrentProject(project))
        this.props.dispatch(zoom(10))
        this.props.dispatch(center([project.longitude, project.latitude]))
    }

    handleCountryClick(country) {
        this.dispatchCountry(country.id)
    }

    dispatchCountry(threeLetterCountryCode) {
        this.props.dispatch(fetchProjectsByCountry(threeLetterCountryCode))
    }

    handleReset() {
        this.props.dispatch(zoom(.7))
        this.props.dispatch(center([0, 20]))
        this.props.dispatch(loadAllProjects())
    }

    handleClickLoadMore() {
        const { data, map } = this.props
        if (data.currentCountry !== undefined) {
            this.props.dispatch(fetchProjectsByCountry(data.currentCountry.alpha3))
        } else {
            this.props.dispatch(fetchProjects())
        }
    }

    render() {
        const { data, map } = this.props
        return (
            <div>
                <button onClick={this.handleZoomIn}>{"Zoom in"}</button>
                <button onClick={this.handleZoomOut}>{"Zoom out"}</button>
                <button onClick={this.handleReset}>{"Reset"}</button>
                <MapView
                    width={this.props.width}
                    data={data}
                    map={map}
                    handleCountryClick={this.handleCountryClick}
                    handleClickProject={this.handleClickProject}
                    />
                <ListView 
                    width={this.props.width * .15}
                    data={data}
                    handleClickLoadMore={this.handleClickLoadMore}
                    handleClickProject={this.handleClickProject}
                    dispatchCountry={this.dispatchCountry}
                    viewAllProjects={this.handleReset}
                />
            </div>
        )
    }
}

//ensures dispatch function is initialized upon instantiation 
GlobalGivingMap.propTypes = {
    dispatch: PropTypes.func.isRequired
}

//Redux will dispatch current app state
//so this will simply map the dispatched state
//to the component's props 
function mapDispatchToProps(state) {
    const { data, map } = state
    return state
}

export default connect(mapDispatchToProps)(GlobalGivingMap)
