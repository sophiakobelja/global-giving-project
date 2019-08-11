import { combineReducers } from 'redux'
import React from "react"

import {
  INITIALIZE_COUNTRIES,
  LOAD_ALL_PROJECTS,
  ADD_PROJECTS,
  SET_CURRENT_COUNTRY,
  SET_CURRENT_PROJECT,
  SET_CURRENT_PROJECTS,
  ZOOM,
  ZOOM_SCALE,
  CENTER
} from './actions'

const initialState = {
  projects: {}, //all currently loaded projects indexed by project id 
  currentProjects: [], //all currently viewed projects in list view
  currentProject: undefined, //currently viewed project object 
  countries: [], //all preloaded country information
  currentCountry: undefined, //currently viewed country
  nextProjectIds: {}, //save next project id. indexed by country except for default 
                      //case, where the index will be stored as 'default'
}

function data(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_COUNTRIES:
      return {
        ...state,
        countries: action.countries
      }

    case ADD_PROJECTS:

      //add projects
      var addProjects = Object.assign({}, state.projects)
      action.projects.forEach(el => { addProjects[el.id] = el })

      // Set next project ids 
      var nextProjectId = action.nextProjectId ? action.nextProjectId : -1
      var ids = Object.assign({}, state.nextProjectIds)
      if (state.currentCountry !== undefined) {
        ids[state.currentCountry.country] = nextProjectId
      } else {
        ids['default'] = nextProjectId
      }

      return {
        ...state,

        projects: addProjects,

        // If current country is currently defined, ensure 
        // current projects is filtered by country code 
        currentProjects: state.currentCountry !== undefined ?
          Object.values(addProjects).filter(el => {
            return el.iso3166CountryCode === state.currentCountry.alpha2
          }) : Object.values(addProjects),

        nextProjectIds: ids
      }

    //Set current country:
      // - Filter all previously loaded projects by country code and set to current projects
      // - Initialize nextProjectIds[country] if necessary 
    case SET_CURRENT_COUNTRY:

      var ids = Object.assign({}, state.nextProjectIds)
      if (ids[action.country.country] === undefined) {
        ids[action.country.country] = -1
      }

      return {
        ...state,
        currentProjects: Object.values(state.projects).filter(el => {
          return el.iso3166CountryCode === action.country.alpha2
        }),
        currentProject: undefined,
        nextProjectIds: ids,
        currentCountry: action.country,
      }

    //Set current project
    case SET_CURRENT_PROJECT:

      return {
        ...state,
        currentProjects: [action.project],
        currentProject: action.project,
        currentCountry: state.countries.find(el => {
          return el.alpha2 === action.project.iso3166CountryCode
        })
      }

    //Set all previously loaded projects into currentProjects to be updated in list view
    case LOAD_ALL_PROJECTS:

      return {
        ...state,
        currentProjects: Object.values(state.projects),
        currentProject: undefined,
        currentCountry: undefined
      }

    default:
      return state
  }
}

function map(state = { zoom: .7, center: [0, 20] }, action) {
  switch (action.type) {
    //zoom into map on set current country (this means user clicked a country)
    case SET_CURRENT_COUNTRY:
      console.log(action)
      return {
        ...state,
        zoom: 5,
        center: [action.country.latlng[0], action.country.latlng[1]]
      }
    case CENTER:
      return {
        ...state,
        center: action.center
      }
    case ZOOM_SCALE:
      return {
        ...state,
        zoom: action.scale * state.zoom
      }
    case ZOOM:
      return {
        ...state,
        zoom: action.zoom
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  data, map
})

export default rootReducer