import React, { Component } from "react";
import { CategoriesConsumer } from "../context/CategoriesContext";
import { EventsConsumer } from "../context/EventsContext";

class Form extends Component {
  state = {
    name: "",
    categories: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <EventsConsumer>
        {value => {
          console.log(value);
          return (
            <form
              onSubmit={e => {
                e.preventDefault();
                value.getEvents(this.state);
              }}
            >
              <fieldset className="uk-fieldset uk-margin">
                <legend className="uk-legend uk-text-center">
                  Search event by name or category...
                </legend>
              </fieldset>
              <div className="uk-column-1-3@m uk-margin">
                <div className="uk-margin" uk-margin="true">
                  <input
                    onChange={this.onChange}
                    name="name"
                    className="uk-input"
                    type="text"
                    placeholder="event name"
                  />
                </div>

                <div className="uk-margin" uk-margin="true">
                  <select
                    className="uk-select"
                    name="categories"
                    onChange={this.onChange}
                  >
                    <CategoriesConsumer>
                      {value =>
                        value.categories.map(category => (
                          <option
                            key={category.id}
                            value={category.id}
                            data-uk-form-select
                          >
                            {category.name}
                          </option>
                        ))
                      }
                    </CategoriesConsumer>
                  </select>
                </div>

                <div>
                  <input
                    type="submit"
                    className="uk-button uk-button-danger"
                    value="Search"
                  />
                </div>
              </div>
            </form>
          );
        }}
      </EventsConsumer>
    );
  }
}
export default Form;
