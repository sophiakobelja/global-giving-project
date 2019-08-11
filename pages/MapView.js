
import React, { Component } from "react"
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
    Markers,
    Marker,
} from "react-simple-maps"
import { Motion, spring } from "react-motion"

//This utilizes the svg map view built into react-simple-maps library 
class MapView extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let data = this.props.data
        let map = this.props.map
        return (
            <div style={{width: this.props.width}}>
            {/*This is a built-in library that gives the "bouncing" effect when a user clicks 
            on a country and the map zooms in */}
            <Motion
                defaultStyle={{
                    zoom: 5,
                    x: 0,
                    y: 20,
                }}
                style={{
                    zoom: spring(map.zoom, { stiffness: 210, damping: 20 }),
                    x: spring(map.center[0], { stiffness: 210, damping: 20 }),
                    y: spring(map.center[1], { stiffness: 210, damping: 20 }),
                }}
            >
                {({ zoom, x, y }) => (
                    <ComposableMap
                        projectionConfig={{ scale: 205 }}
                        style={{
                            width: (this.props.width * .8),
                            height: "auto",
                        }}
                    >
                        <ZoomableGroup center={[x, y]} zoom={zoom}>
                            <Geographies geography="/static/world-50m.json">
                                {(geographies, projection) =>
                                    geographies.map((geography, i) =>
                                        geography.id !== "ATA" && (
                                            <Geography
                                                key={i}
                                                geography={geography}
                                                projection={projection}
                                                onClick={this.props.handleCountryClick}
                                                style={{
                                                    default: {
                                                        fill: "#ECEFF1",
                                                        stroke: "#607D8B",
                                                        strokeWidth: 0.75,
                                                        outline: "none",
                                                    },
                                                    hover: {
                                                        fill: "#607D8B",
                                                        stroke: "#607D8B",
                                                        strokeWidth: 0.75,
                                                        outline: "none",
                                                    },
                                                    pressed: {
                                                        fill: "#ECEFF1",
                                                        stroke: "#607D8B",
                                                        strokeWidth: 0.75,
                                                        outline: "none",
                                                    },
                                                }}
                                            />
                                        ))}
                            </Geographies>
                            
                            <Markers>
                                {
                                    //now simply map all the projects to an svg marker on the map, passing the project's coordinates
                                    data &&
                                    Object.values(data.projects).map((project, i) => {
                                        let p = { 'key': project.id, 'name': project.title, 'coordinates': [project.longitude, project.latitude] }
                                        let style = {
                                            default: { stroke: "#455A64" },
                                            hover: { stroke: "#FF5722" },
                                            pressed: { stroke: "#FF5722" },
                                        }
                                        if (data.currentProject !== undefined && data.currentProject.id == project.id) {
                                            style = {
                                                default: { stroke: "#FF5722" },
                                                hover: { stroke: "#FF5722" },
                                                pressed: { stroke: "#FF5722" },
                                            }
                                        }
                                        return (
                                            <Marker key={i} marker={p}
                                                style={style}
                                                onClick={() => {
                                                    this.props.handleClickProject(project)
                                                }}>

                                                <g transform="translate(-12, -24)">
                                                    <path
                                                        fill="none"
                                                        strokeWidth="2"
                                                        strokeLinecap="square"
                                                        strokeMiterlimit="10"
                                                        strokeLinejoin="miter"
                                                        d="M20,9c0,4.9-8,13-8,13S4,13.9,4,9c0-5.1,4.1-8,8-8S20,3.9,20,9z"
                                                    />
                                                    <circle
                                                        fill="none"
                                                        strokeWidth="2"
                                                        strokeLinecap="square"
                                                        strokeMiterlimit="10"
                                                        strokeLinejoin="miter"
                                                        cx="12"
                                                        cy="9"
                                                        r="3"
                                                    />
                                                </g>
                                            </Marker>)
                                    })
                                }
                            </Markers>
                        </ZoomableGroup>
                    </ComposableMap>
                )}
            </Motion>
            </div>
        )
    }
}
export default MapView
