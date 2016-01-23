import React from 'react';

export default React.createClass({
    propTypes: {
        onNewItem: React.PropTypes.func
    },
    getInitialState: function() {
        return {
            selected : "counter"
        };
    },


    setState: function(e){
        this.state = { selected: e.target.value}
    },
    createNew: function(s) {
        console.log(this.state);
        this.props.onNewItem(this.state.selected);
    },

    render: function() {
        return (<div>
            <p>Please select from the following types: {this.state.n}</p>
            <label className="radio-inline"><input type="radio" name="optradio" value="counter" onClick={this.setState} />counter</label>
            <label className="radio-inline"><input type="radio" name="optradio" value="filteredList" onChange={this.setState}/>filteredList</label>
            <label className="radio-inline"><input type="radio" name="optradio" value="multi_input" onChange={this.setState}/>multi_input</label>
            <label className="radio-inline"><input type="radio" name="optradio" value="TimeConverter" onchange={this.setState}/>TimeConverter</label>
        <button onClick={this.createNew}>Generate Now!</button>
        </div>);
    }
});
