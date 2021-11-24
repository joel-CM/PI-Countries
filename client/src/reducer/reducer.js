import {
  GET_COUNTRIES,
  GET_BY_QUERY,
  PAG_LEFT,
  PAG_RIGHT,
  FILTER_BY_CONTINENT,
  ORDER_BY_NAME,
} from "../actions/actions";

const initialState = {
  countriesLoaded: [],
  countries: [],
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

  if (action.type === GET_BY_QUERY) {
    console.log(action.payload);
    return {
      ...state,
      countries: action.payload,
      pagInicio: 0,
      pagFinal: 10,
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
          ...state.countries.sort((a, b) => (a.nombre > b.nombre ? 1 : -1)),
        ],
      };
    }
    if (action.payload === "name_des") {
      return {
        ...state,
        countries: [
          ...state.countries.sort((a, b) => (a.nombre > b.nombre ? -1 : 1)),
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
