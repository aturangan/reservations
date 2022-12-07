import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

export default function Calendar() {
  return (
    <FullCalendar
      plugins={[ dayGridPlugin, interactionPlugin, timeGridPlugin ]}
      initialView="timeGridWeek"
      selectable={true}
      slotLabelInterval={{minutes: 30}}
      // slotMinTime={{minutes: 15}}
      // eventMinHeight={15}
      slotDuration={{minutes: 15}} // duration 30 min is correct but need intervals to be 15
      selectOverlap={false}
    />
  );
}
