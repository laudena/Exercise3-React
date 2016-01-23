import React from 'react';
import _ from 'underscore';

export default React.createClass({
  propTypes: {
    children:  React.PropTypes.node
  },
  getInitialState: function() {
    return { selected: 0 ,
            newItem : false};
  },
  selectItem: function(idx) {
    this.setState({selected: idx ,
                    newItem: false});

  },
    newItem: function() {
        this.setState({selected: this.state.selected,
                        newItem : true});
    },
    setNewItem : function(item)
    {
        console.log("GOT IT!!!!" + item);

    },
    showItem: function() {
        if (this.state.newItem)
            return this.props.children[this.props.children.length - 1];
        else
            return this.props.children[this.state.selected];

    },

  render: function () {
    var children = React.Children.toArray(this.props.children);
    var _item = this.showItem();
      //var d = showItem();
    return (<div className="container">
      <div className="col-xs-4">
      <ul className="nav nav-pills nav-stacked">
        {_.range(children.length -1).map((index) => (
          <li>
          <a key={index} href="#"
            onClick={this.selectItem.bind(this, index)}>Try {index}</a>
          </li>

        ))}
          <li>
              <a key={children.length-1} href="#"
                 onClick={this.selectItem.bind(this, children.length-1)}>New Item</a>
          </li>

      </ul>
      </div>

      <div className="col-xs-8">
          {_item}

      </div>

    </div>)
  }
});











