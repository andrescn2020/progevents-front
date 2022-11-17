import axios from "axios";

export function getEvents() {
    return async function (dispatch) {
        const json = await axios.get("https://03jw4d3g69.execute-api.us-east-1.amazonaws.com/events");
        return dispatch({
            type: "GET_EVENTS",
            payload: json.data.body
        });
    };
}

export function getFilteredEvents(filterInput) {
    return {
        type: "GET_FILTERED_EVENTS",
        payload: filterInput
    };
};

export function getFilter(filterType, filterKey) {
    return {
        type: "GET_FILTER",
        payload: [filterType, filterKey]
    };
};

export function resetFilters() {
    return {
        type: "RESET_FILTERS"
    };
};

export function changePage(pageAndMethod) {
    return {
        type: "CHANGE_PAGE",
        payload: pageAndMethod
    };
};
