$(document).ready(function() {
/* initialize the external events
     -----------------------------------------------------------------*/

  $('#external-events div.ext-event').each(function() {

    // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
    // it doesn't need to have a start or end
    var eventObject = {
      title: $.trim($(this).text()) // use the element's text as the event title
    };

    // store the Event Object in the DOM element so we can get to it later
    $(this).data('eventObject', eventObject);

    // make the event draggable using jQuery UI
    $(this).draggable({
      zIndex: 999,
      revert: true,      // will cause the event to go back to its
      revertDuration: 0  //  original position after the drag
    });

  });


  /* initialize the calendar
   -----------------------------------------------------------------*/

  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();

  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,basicWeek,basicDay'
    },
    editable: true,
    droppable: true, // this allows things to be dropped onto the calendar !!!
    drop: function(date, allDay) { // this function is called when something is dropped

      // retrieve the dropped element's stored Event Object
      var originalEventObject = $(this).data('eventObject');

      // we need to copy it, so that multiple events don't have a reference to the same object
      var copiedEventObject = $.extend({}, originalEventObject);

      // assign it the date that was reported
      copiedEventObject.start = date;
      copiedEventObject.allDay = allDay;

      // render the event on the calendar
      // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
      $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

      // is the "remove after drop" checkbox checked?
      if ($('#drop-remove').is(':checked')) {
          // if so, remove the element from the "Draggable Events" list
        $(this).remove();
      }

    },
    events: [
      {
        title: '9:00AM Daily StandUp',
        start: new Date(y, m, 1),
        className : 'red-bg',
      },
      {
        title: '9:00AM Daily StandUp',
        start: new Date(y, m, 2),
        className : 'green-bg',
      },
      {
        title: 'Team Meating 12:30PM',
        start: new Date(y, m, 2),
        end: new Date(y, m, 3),
        className : 'brown-bg',
      },
      {
        title: '5 Days Long Event',
        start: new Date(y, m, d-3),
        end: new Date(y, m, d-2),
        className : 'green-bg',
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: new Date(y, m, d-3, 15, 0),
        allDay: false,
        className : 'blue-bg',
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: new Date(y, m, d+4, 12, 0),
        allDay: false,
        className : 'yellow-bg',
      },
      {
        title: 'Weekly Meeting 4PM',
        start: new Date(y, m, 10),
        allDay: false,
        className : 'pink-bg',
      },
      {
        title: '2 Weeks Conference In Japan',
        start: new Date(y, m, 17),
        end: new Date(y, m, 21),
        className : 'blue-bg',
      },
      {
        title: '2 Weeks Long Ride from US to Canada',
        start: new Date(y, m, 17),
        end: new Date(y, m, 21),
        className : 'red-bg',
      },
      {
        title: '9:00AM Daily StandUp',
        start: new Date(y, m, 23),
        className : 'green-bg',
      },
      {
        title: '9:00AM Daily StandUp',
        start: new Date(y, m, 24),
        className : 'green-bg',
      },
      {
        title: '9:00AM Daily StandUp',
        start: new Date(y, m, 25),
        className : 'green-bg',
      },
      {
        title: '9:00AM Daily StandUp',
        start: new Date(y, m, 26),
        className : 'green-bg',
      },
      {
        title: '9:00AM Daily StandUp',
        start: new Date(y, m, 27),
        className : 'blue-bg',
      },
      {
        title: '9:00AM Daily StandUp',
        start: new Date(y, m, 30),
        className : 'pink-bg',
      },
      {
        title: '9:00AM Daily StandUp',
        start: new Date(y, m, 31),
        className : 'blue-bg',
      },
      {
        title: 'Lunch with Sandy 12:30PM',
        start: new Date(y, m, 12),
        end: new Date(y, m, d, 14, 0),
        allDay: false,
        className : 'brown-bg',
      },
      {
        title: 'Birthday Party',
        start: new Date(y, m, d+1, 12, 0),
        end: new Date(y, m, d+1, 22, 30),
        allDay: false,
        className : 'purple-bg',
      },
      {
        title: 'Click for Sunrise Admin Dashboard',
        start: new Date(y, m, 28),
        end: new Date(y, m, 29),
        url: 'index.html',
        className : 'green-bg',
      }
    ]
  });

});