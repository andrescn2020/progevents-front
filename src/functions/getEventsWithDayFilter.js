export const getEventsWithDayFilter = (events, day, month) => {
    let filteredEvents = [];
    if(day === undefined){
        filteredEvents = events.filter(event => Number(event.date.slice(5, 7)) === month);
    } else {
        filteredEvents = events.filter(event => Number(event.date.slice(8)) === day);
        filteredEvents = filteredEvents.filter(event => Number(event.date.slice(5, 7)) === month);
    }
  
    return filteredEvents;

}