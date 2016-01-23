import React from 'react';
import Selector from './selector';
import TimeConverter from "./TimeConverter";
import Counter from "./counter";
import MultiInput from "./multi_input";
import FilteredList from "./filteredList";
import NewItem from "./newItemForm";
import _ from 'underscore';

var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

export default React.createClass({

  getInitialState: function() {
      var children = [];
      var child1 = React.createElement("Counter", {max:"10"}, '');
      var child2 = React.createElement("TimeConverter", null,  '');
      var child3 = React.createElement("NewItem", null, '');
      children.push(child1);
      children.push(child2);
      children.push(child3);

      return {children};
  },

  render: function () {
    /*var listOfItems = _.map(this.state.children, function(name) {
        if (name === "counter"){
            return '<Counter max="10" />';
        }
        else if (name === "TimeConverter"){
            return '<TimeConverter />';
        }
        else if (name === "multi_input"){
            return '<MultiInput  boxCount="7"/>';
        }
        else if (name === "filteredList"){
            return '<FilteredList items={days}/>';
        }
    });*/

      return (<div>
      <Selector children={this.state.children}>

      </Selector>

    </div>)
  },
  setNewItem : function(item)
  {
      var child = React.createElement(item, {boxCount:"6", max:"10",  items:{days}}, '');
      //var root = React.createElement('ul', { className: 'my-list' }, child);

      var curState = this.state.children;
      curState.push(child);
      this.setState({children :curState});
      console.log("GOT IT!!!!" + item);
  },
});



