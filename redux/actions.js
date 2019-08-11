import API from '../utils/API'
import { API_KEY } from '../utils/API'
import request from 'axios'
export const INITIALIZE_COUNTRIES = 'INITIALIZE_COUNTRIES'
export const ADD_PROJECTS = 'ADD_PROJECTS'
export const LOAD_ALL_PROJECTS = 'LOAD_ALL_PROJECTS'
export const SET_CURRENT_PROJECT = 'SET_CURRENT_PROJECT'
export const SET_CURRENT_PROJECTS = 'SET_CURRENT_PROJECTS'
export const SET_CURRENT_COUNTRY = 'SET_CURRENT_COUNTRY'
export const ZOOM = 'ZOOM'
export const ZOOM_SCALE = 'ZOOM_SCALE'
export const CENTER = 'CENTER'

export const initializeCountries = () => {
    let countries = []
    return (dispatch) => {
        return request
            .get("/static/countries.json")
            .then(res => {
                countries = res.data.ref_country_codes.map(country => {
                    let countryTemp = country;
                    countryTemp['latlng'] = [country.longitude, country.latitude]
                    return countryTemp
                })
                console.log(countries)
                dispatch(countriesInitialized(countries))
            })
    }
};

function transformResponse(data) {
    let d = data.projects;
    d["project"] = d.project.filter(el => {
        return el.latitude !== undefined && el.longitude !== undefined;
    });
    return d;
}

export let fetchProjects = () => {
    console.log('fetching projects')

    return (dispatch, getState) => {
        const state = getState();
        let params = {
            api_key: API_KEY
        }

        if (state.data.nextProjectIds['default'] > 0) {
            params = {
                api_key: API_KEY,
                nextProjectId: state.data.nextProjectIds['default']
            }
        }

        return API.get("/public/projectservice/all/projects/active", {
            params: params,
            transformResponse: [transformResponse]
        })
            .then(response => {
                dispatch(projectsFetched(response.data));
            },
            err => {
                console.log(err);
            })
            .then(() => {
                const state = getState();
                if (Object.keys(state.data.projects).length <= 50 &&
                    state.data.nextProjectIds['default'] > 0) {
                    dispatch(fetchProjects())
                }
            });
    };
};

export const fetchProjectsByCountry = (threeLetterCountryCode) => {
    console.log('fetching projects by country')
    
    return (dispatch, getState) => {
        const state = getState();
        console.log(threeLetterCountryCode)
        let countryObj = state.data.countries.find(el => {
            return el.alpha3 === threeLetterCountryCode
        })

        console.log(countryObj)
        dispatch(setCountry(countryObj))

        const countryCode = countryObj.alpha2;
        let params = {
            api_key: API_KEY
        }

        //query state map storing next project id by country name
        //and add next project id to request if it exists
        if (state.data.nextProjectIds[countryObj.country] > 0) {
            params = {
                api_key: API_KEY,
                nextProjectId: state.data.nextProjectIds[countryObj.country]
            }
        }
        return API.get('/public/projectservice/countries/' + countryCode + '/projects/active', {
            params: params,
            transformResponse: [transformResponse]
        })
            .then(response => {
                dispatch(projectsFetched(response.data));
            },
            err => {
                console.log(err);
            })
    };
};

export const projectsFetched = projects => {
    return {
        type: ADD_PROJECTS,
        projects: projects.project,
        nextProjectId: projects.nextProjectId
    };
};

export const setCountry = country => {
    return {
        type: SET_CURRENT_COUNTRY,
        country: country
    };
};

export const setCurrentProject = project => {
    return {
        type: SET_CURRENT_PROJECT,
        project: project
    };
};

export let loadAllProjects = () => {
    return {
        type: LOAD_ALL_PROJECTS
    }
}

export const zoom = (zoom) => {
    return {
        type: ZOOM,
        zoom: zoom
    }
}

export const zoomScale = (scale) => {
    return {
        type: ZOOM_SCALE,
        scale: scale
    }
}

export const center = (center) => {
    return {
        type: CENTER,
        center
    }
}

export const countriesInitialized = (countries) => {
    return {
        type: INITIALIZE_COUNTRIES,
        countries
    };
}