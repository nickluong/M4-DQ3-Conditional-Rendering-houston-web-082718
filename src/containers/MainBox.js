import React from "react";
import MenuBar from "../components/MenuBar.js";
import { Profile, Photos, Cocktails, Pokemon } from "../components/Pages.js";

class MainBox extends React.Component {
  state = {
    selected: ""
  };

  changeSelected = id => {
    this.setState({
      selected: id
    });
  };

  render() {
    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. Which component should have state? 
    Which component should have methods to control state? Where should these methods be called?

    */

    const renderDisplay = {
      profile: <Profile />,
      photo: <Photos />,
      cocktail: <Cocktails />,
      pokemon: <Pokemon />
    };

    return (
      <div>
        <MenuBar changeSelected={this.changeSelected} />
        {renderDisplay[this.state.selected]}
      </div>
    );
  }
}

export default MainBox;
