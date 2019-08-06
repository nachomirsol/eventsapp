import React from "react";

const Event = ({ event }) => {
  let { text } = event.description;
  if (text) {
    if (text.length > 250) {
      text = text.substr(0, 250);
    }
  } else {
    text = "No description found...";
  }
  return (
    <div>
      <div className="uk-card uk-card-default">
        <div className="uk-card-media-top">
          {event.logo ? <img src={event.logo.url} alt={event.name} /> : null}
        </div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">{event.name.text}</h3>
          {text}
        </div>
        <div className="uk-card-footer">
          <a
            className="uk-button uk-button-secondary"
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            More info...
          </a>
        </div>
      </div>
    </div>
  );
};
export default Event;
