export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_BY_QUERY = "GET_BY_QUERY";
export const GET_COUNTRIES_NAME = "GET_COUNTRIES_NAME";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const PAG_LEFT = "PAG_LEFT";
export const PAG_RIGHT = "PAG_RIGHT";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const ORDER_BY_NAME = "ORDER_BY_NAME";

export const getCountries = () => {
  return function (dispatch) {
    fetch("http://localhost:3001/api/countries")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_COUNTRIES,
          payload: data.results,
        });
      });
  };
};

export const getByQuery = (country) => {
  return async function (dispatch) {
    if (country) {
      const res = await fetch(
        `http://localhost:3001/api/countries?name=${country}`
      );

      const data = await res.json();

      dispatch({
        type: GET_BY_QUERY,
        payload: data.result,
      });
    } else {
      const res = await fetch(`http://localhost:3001/api/countries`);
      const data = await res.json();
      dispatch({
        type: GET_BY_QUERY,
        payload: data.results,
      });
    }
  };
};

export const getActivities = () => {
  return function (dispatch) {
    fetch("http://localhost:3001/api/activity")
      .then((res) => res.json())
      .then((arrayActivities) => {
        dispatch({
          type: GET_ACTIVITIES,
          payload: arrayActivities,
        });
      });
  };
};

export const pagLeft = () => ({
  type: PAG_LEFT,
});

export const pagRight = () => ({
  type: PAG_RIGHT,
});

export const filterByContinent = (continent) => {
  return {
    type: FILTER_BY_CONTINENT,
    payload: continent,
  };
};

export const filterByActivity = (activity) => {
  return {
    type: FILTER_BY_ACTIVITY,
    payload: activity,
  };
};

export const orderByName = (name) => {
  return {
    type: ORDER_BY_NAME,
    payload: name,
  };
};

export const getCountriesName = () => {
  return async function (dispatch) {
    const res = await fetch("http://localhost:3001/api/countries_names");
    const data = await res.json();
    dispatch({
      type: GET_COUNTRIES_NAME,
      payload: data,
    });
  };
};
