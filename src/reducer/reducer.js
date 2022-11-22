import { getEventsWithDayFilter } from "../functions/getEventsWithDayFilter";

const initialState = {
    events: [],
    filterEvents: [],
    pagesPerViews: 6,
    page: 1,
    filters: {
        date: "",
        format: "",
        language: "",
        price: ""
    }
};

function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case "GET_EVENTS":
            return {
                ...state,
                events: payload,
                filterEvents: payload
            }
        case "GET_FILTER":
            let newFilter = state.filters
            if (payload[0] === "hoy") {
                newFilter[payload[1]] = "hoy"
            }
            if (payload[0] === "mañana") {
                newFilter[payload[1]] = "mañana"
            }
            if (payload[0] === "proximo mes") {
                newFilter[payload[1]] = "proximo mes"
            }
            if (payload[0] === "defaultDate") {
                newFilter[payload[1]] = ""
            }
            if (payload[0] === "presencial") {
                newFilter[payload[1]] = "presencial"
            }
            if (payload[0] === "online") {
                newFilter[payload[1]] = "online"
            }
            if (payload[0] === "defaultFormat") {
                newFilter[payload[1]] = ""
            }
            if (payload[0] === "español") {
                newFilter[payload[1]] = "español"
            }
            if (payload[0] === "english") {
                newFilter[payload[1]] = "english"
            }
            if (payload[0] === "defaultLanguage") {
                newFilter[payload[1]] = ""
            }
            if (payload[0] === "gratis") {
                newFilter[payload[1]] = "gratis"
            }
            if (payload[0] === "con precio") {
                newFilter[payload[1]] = "con precio"
            }
            if (payload[0] === "defaultPrice") {
                newFilter[payload[1]] = ""
            }
            return {
                ...state,
                filters: newFilter
            }

        case "GET_FILTERED_EVENTS":

            let filteredEvents = state.events;

  

            if (payload.date === "hoy") {
                let day = new Date().getDate();
                let month = new Date().getMonth() + 1;
                filteredEvents = getEventsWithDayFilter(state.events, day, month);
            } else if (payload.date === "mañana") {
                let day = new Date().getDate() + 1;
                let month = new Date().getMonth() + 1;
                if (month === 1 && day === 32) {
                    day = 1;
                    month = 2;
                    filteredEvents = getEventsWithDayFilter(state.events, day, month);
                } else if (month === 2 && day === 29) {
                    day = 1;
                    month = 3;
                    filteredEvents = getEventsWithDayFilter(state.events, day, month);
                } else if (month === 3 && day === 32) {
                    day = 1;
                    month = 4;
                    filteredEvents = getEventsWithDayFilter(state.events, day, month);
                } else if (month === 4 && day === 31) {
                    day = 1;
                    month = 5;
                    filteredEvents = getEventsWithDayFilter(state.events, day, month);
                } else if (month === 5 && day === 32) {
                    day = 1;
                    month = 6;
                    filteredEvents = getEventsWithDayFilter(state.events, day, month);
                } else if (month === 6 && day === 31) {
                    day = 1;
                    month = 7;
                    filteredEvents = getEventsWithDayFilter(state.events, day, month);
                } else if (month === 7 && day === 32) {
                    day = 1;
                    month = 8;
                    filteredEvents = getEventsWithDayFilter(state.events, day, month);
                } else if (month === 8 && day === 32) {
                    day = 1;
                    month = 9;
                    filteredEvents = getEventsWithDayFilter(state.events, day, month);
                } else if (month === 9 && day === 31) {
                    day = 1;
                    month = 10;
                    filteredEvents = getEventsWithDayFilter(state.events, day, month);
                } else if (month === 10 && day === 32) {
                    day = 1;
                    month = 11;
                    filteredEvents = getEventsWithDayFilter(state.events, day, month);
                } else if (month === 11 && day === 31) {
                    day = 1;
                    month = 12;
                    filteredEvents = getEventsWithDayFilter(state.events, day, month);
                } else if (month === 12 && day === 32) {
                    day = 1;
                    month = 1;
                    filteredEvents = getEventsWithDayFilter(state.events, day, month);
                } else {
                    filteredEvents = getEventsWithDayFilter(state.events, day, month);
                }
            } else if (payload.date === "proximo mes") {
                let day = undefined;
                let month = new Date().getMonth() + 2;
                filteredEvents = getEventsWithDayFilter(state.events, day, month);
            }

            if (payload.format === "online") {
                filteredEvents = filteredEvents.filter(event => event.itsOnline === true);
            } else if (payload.format === "presencial") {
                filteredEvents = filteredEvents.filter(event => event.itsOnSite === true);
            }

            if (payload.language === "español") {
                filteredEvents = filteredEvents.filter(event => event.language.toLowerCase() === payload.language.toLowerCase());
            } else if (payload.language === "ingles") {
                filteredEvents = filteredEvents.filter(event => event.language.toLowerCase() === payload.language.toLowerCase());
            }

            if (payload.price === "gratis") {
                filteredEvents = filteredEvents.filter(event => event.itsFree === true);
            } else if (payload.price === "con precio") {
                filteredEvents = filteredEvents.filter(event => event.itsFree === false);
            }

            return {
                ...state,
                filterEvents: filteredEvents
            }

        case "RESET_FILTERS":
            let emptyFilter = {
                date: "",
                format: "",
                language: "",
                price: ""
            }
            console.log(emptyFilter);
            return {
                ...state,
                filters: emptyFilter,
                filterEvents: state.events
            }

        case "CHANGE_PAGE":

            let pageNumber = state.page;
            let dividePayload = payload.split(",");

            if(dividePayload[1] === "sumar"){
                pageNumber+= 1;

            }

            if(dividePayload[1] === "restar"){

                if(Number(dividePayload[0]) === 1 || Number(dividePayload[0]) < 1){
                    pageNumber = 1;

                } else {
                    pageNumber-= 1;

                }
            }

            return {
                ...state,
                page: pageNumber
            }

        default:
            return state;
    }
}

export default rootReducer;