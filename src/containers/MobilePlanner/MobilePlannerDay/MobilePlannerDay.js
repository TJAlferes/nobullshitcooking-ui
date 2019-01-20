import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { DropTarget } from 'react-dnd';
import update from 'immutability-helper';

import MobilePlannerRecipe from '../MobilePlannerRecipe/MobilePlannerRecipe';

const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};

const plannerDayTarget = {
  drop(props, monitor, component) {
    const { day } = props;
    const draggedRecipe = monitor.getItem();
    if (day !== draggedRecipe.listId) component.pushRecipe(draggedRecipe.recipe);
    return {listId: day};
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

class MobilePlannerDay extends Component {
  constructor(props) {
    super(props);
    this.day = null;
    this.setSelfRef = element => {
      this.day = element;
    };
    //this.state = {recipes: props.list, shiftX: 0, shiftY: 0};
    this.state = {recipes: props.list};
  }
  
  /*componentDidUpdate() {
    // hooks now? and fix movement error
    // ********* JUST USE PORTALS INSTEAD??? **********
    // (would need to copy data / state over though) (and be sure of no memory leaks(?))
    const { tRef } = this.props;
    const dayClicked = this.day.getBoundingClientRect();
    const tablePos = findDOMNode(tRef.current).getBoundingClientRect();

    const moveY = tablePos.top - dayClicked.top;  // change for mobile, to now go beneath table instead of to the right
    const moveX = (tablePos.right + 10) - dayClicked.left;  // change for mobile, to now go beneath table instead of to the right

    console.log("===== update =====");
    console.log(tablePos.top);
    console.log(dayClicked.top);
    console.log(tablePos.right + 10);
    console.log(dayClicked.left);
    console.log(moveY);
    console.log(moveX);

    // without this conditional, setState would be called endlessly
    const { shiftX, shiftY } = this.state;
    if ((shiftX !== 0) || (shiftY !== 0)) return;  // issue is here I think... but maybe not... remember, it wasn't doing this before...
    this.setState({shiftX: moveX, shiftY: moveY});
  }*/
  
  handleClick = async (e) => {
    const { day, expanded, expandedDay, onDayClick } = this.props;
    e.preventDefault(); // stoppropagation or none?
    await onDayClick(day);
  }
  
  pushRecipe = recipe => {
    this.setState(update(this.state, {
      recipes: {$push: [recipe]}
    }));
  }

  removeRecipe = index => {
    this.setState(update(this.state, {
      recipes: {$splice: [[index, 1]]}
    }));
  }

  moveRecipe = (dragIndex, hoverIndex) => {
    const { recipes } = this.state;
    const { day, expandedDay } = this.props;
    const dragRecipe = recipes[dragIndex];
    // only allow reordering/moving of recipes within currently expanded day
    if (day !== expandedDay) return;
    this.setState(update(this.state, {
      recipes: {$splice: [[dragIndex, 1], [hoverIndex, 0, dragRecipe]]}
    }));
  }

  render() {
    //const { recipes, shiftX, shiftY } = this.state;
    const { recipes } = this.state;
    const { expanded, day, expandedDay, canDrop, isOver, connectDropTarget } = this.props;

    let size = (expanded && (day === expandedDay)) ? "mobile_planner_day_expanded" : "mobile_planner_day_collapsed";
    //let location = {"--shiftX": `${shiftX}px`, "--shiftY": `${shiftY}px`};
    let color = (isOver && canDrop) ? "mobile_planner_day_green" : "mobile_planner_day_white";
    
    return connectDropTarget(
      <div
        style={{/*location*/}}
        className={`${size} ${color}`}
        ref={this.setSelfRef}
        onClick={this.handleClick}
      >
        <span className="mobile_the_date">{day}</span>
        {recipes.map((recipe, i) => (
          <MobilePlannerRecipe
            key={recipe.id}
            index={i}
            listId={this.props.id}
            recipe={recipe}
            removeRecipe={this.removeRecipe}
            moveRecipe={this.moveRecipe}
            expanded={expanded}
            day={day}
            expandedDay={expandedDay}
            className="mobile_planner_recipe"
          />
        ))}
      </div>
    );
  }
}

// move to separate wrapper file in this same folder,
// like you would with react-redux's connect()
export default DropTarget(
  Types.PLANNER_RECIPE,
  plannerDayTarget,
  collect
)(MobilePlannerDay);