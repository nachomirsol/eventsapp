import React, { Component } from "react";
import axios from "axios";

// create context
const CategoriesContext = React.createContext();

export const CategoriesConsumer = CategoriesContext.Consumer;

class CategoriesProvider extends Component {
  token = "XNDEQ43UPSBBM3B4ZRGD";
  state = {
    categories: []
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = async () => {
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${
      this.token
    }&locale=es_ES`;

    let categories = await axios.get(url);

    this.setState({
      categories: categories.data.categories
    });
  };

  render() {
    return (
      <CategoriesContext.Provider value={{ categories: this.state.categories }}>
        {this.props.children}
      </CategoriesContext.Provider>
    );
  }
}
export default CategoriesProvider;
