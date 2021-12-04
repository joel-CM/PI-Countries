import {
  GET_COUNTRIES,
  GET_BY_QUERY,
  PAG_LEFT,
  PAG_RIGHT,
  FILTER_BY_CONTINENT,
  FILTER_BY_ACTIVITY,
  ORDER_BY_NAME,
  GET_COUNTRIES_NAME,
  GET_ACTIVITIES,
} from "../actions/actions";

const initialState = {
  countriesNames: [],
  countriesLoaded: [],
  countries: [],
  activities: [],
  pagInicio: 0,
  pagFinal: 10,
};

export const reducer = (state = initialState, action) => {
  if (action.type === GET_COUNTRIES) {
    return {
      ...state,
      countriesLoaded: action.payload,
      countries: [...state.countriesLoaded],
    };
  }

  if (action.type === GET_COUNTRIES_NAME) {
    return {
      ...state,
      countriesNames: action.payload,
    };
  }

  if (action.type === GET_BY_QUERY) {
    console.log(action.payload);
    return {
      ...state,
      countries: action.payload,
      pagInicio: 0,
      pagFinal: 10,
    };
  }

  if (action.type === GET_ACTIVITIES) {
    return {
      ...state,
      activities: action.payload,
    };
  }

  if (action.type === PAG_LEFT) {
    return {
      ...state,
      pagInicio: state.pagInicio - 10,
      pagFinal: state.pagFinal - 10,
    };
  }

  if (action.type === PAG_RIGHT) {
    return {
      ...state,
      pagInicio: state.pagInicio + 10,
      pagFinal: state.pagFinal + 10,
    };
  }

  if (action.type === FILTER_BY_CONTINENT) {
    if (action.payload !== "none") {
      return {
        ...state,
        countries: state.countriesLoaded.filter(
          (c) => c.continente === action.payload
        ),
        pagInicio: 0,
        pagFinal: 10,
      };
    } else {
      return {
        ...state,
        countries: [...state.countriesLoaded],
        pagInicio: 0,
        pagFinal: 10,
      };
    }
  }

  if (action.type === FILTER_BY_ACTIVITY) {
    if (action.payload !== "none") {
      return {
        ...state,
        countries: state.countriesLoaded.filter((c) => {
          const res = c.Activities.find(
            (a) => a.nombre === action.payload && a
          );
          if (res) return res;
        }),
        pagInicio: 0,
        pagFinal: 10,
      };
    } else {
      return {
        ...state,
        countries: [...state.countriesLoaded],
        pagInicio: 0,
        pagFinal: 10,
      };
    }
  }

  if (action.type === ORDER_BY_NAME) {
    if (action.payload === "none") {
      return {
        ...state,
        countries: state.countriesLoaded,
      };
    }
    if (action.payload === "name_asc") {
      return {
        ...state,
        countries: [
          ...state.countries.sort((a, b) => a.nombre.localeCompare(b.nombre)),
        ],
      };
    }
    if (action.payload === "name_des") {
      return {
        ...state,
        countries: [
          ...state.countries.sort((a, b) => b.nombre.localeCompare(a.nombre)),
        ],
      };
    }
    if (action.payload === "population_asc") {
      return {
        ...state,
        countries: [
          ...state.countries.sort((a, b) =>
            a.poblacion > b.poblacion ? 1 : -1
          ),
        ],
      };
    }
    if (action.payload === "population_des") {
      return {
        ...state,
        countries: [
          ...state.countries.sort((a, b) =>
            a.poblacion > b.poblacion ? -1 : 1
          ),
        ],
      };
    }
  }

  return state;
};
