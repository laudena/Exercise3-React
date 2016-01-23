import React from 'react';
import Selector from './selector';
import TimeConverter from "./TimeConverter";
import Counter from "./counter";
import MultiInput from "./multi_input";
import FilteredList from "./filteredList";
import NewItem from "./newItemForm";

var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

export default React.createClass({
  getInitialState: function() {
    return {
      items : this.children
    }
  },
  render: function () {
    return (<div>
      <Selector>
        <Counter max="10" />
        <MultiInput boxCount="7"/>
        <TimeConverter/>
        <FilteredList items={days}/>
        <NewItem onNewItem={this.setNewItem}/>
      </Selector>

    </div>)
  },
  setNewItem : function(item)
  {

    console.log("GOT IT!!!!" + item);
  },
});



