import React, { useState } from 'react';
import './style.css';
import type { TimelineEvent } from '../../types';

interface TimelineProps {
  events: TimelineEvent[];
}

interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <TimelineItem key={index} event={event} index={index} />
      ))}
    </div>
  );
}

function TimelineItem({ event }: TimelineItemProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`timeline__item timeline__item--${event.type}`}>
      <div className="timeline__marker">
        <div className="timeline__dot" />
      </div>

      <div className="timeline__content">
        <span className="timeline__date">{event.date}</span>
        <h3 className="timeline__title">{event.title}</h3>
        {event.company && (
          <p className="timeline__company">
            {event.link
              ? <a href={event.link} target="_blank" rel="noreferrer">{event.company}</a>
              : event.company
            }
          </p>
        )}
        {event.description && (
          <p className="timeline__desc">{event.description}</p>
        )}
        {event.details && (
          <>
            <button
              className="timeline__toggle"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
            >
              {expanded ? 'Hide details ↑' : 'Show details ↓'}
            </button>
            {expanded && (
              <ul className="timeline__details">
                {event.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </>
        )}
        {event.tags && (
          <ul className="timeline__tags">
            {event.tags.map((tag) => (
              <li key={tag} className="timeline__tag">{tag}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
