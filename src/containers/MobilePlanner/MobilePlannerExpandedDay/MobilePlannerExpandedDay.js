import React, { Component } from 'react';
//import { createPortal } from 'react-dom';
import { DropTarget } from 'react-dnd';
import update from 'immutability-helper';

import MobilePlannerRecipe from '../MobilePlannerRecipe/MobilePlannerRecipe';

const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};

const plannerExpandedDayTarget = {
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

class MobilePlannerExpandedDay extends Component {
  constructor(props) {
    super(props);
    this.state = {recipes: props.list};
  }

  // send child back to its usual div
  handleClick = async (e) => {
    const { day, onDayClick } = this.props;
    e.preventDefault(); // stoppropagation or none?
    await onDayClick(day);
    //this.setState({recipes: []});
  }
  
  /*
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
  */

  pushRecipe = async (recipe) => {
    const { day, onPushRecipe } = this.props;
    await onPushRecipe(day, recipe);
    // ^ $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ update the parent state
    /*this.setState(update(this.state, {
      recipes: {$push: [recipe]}
    }));*/
    //const { list } = this.props;
    //this.setState({recipes: list});
  }

  removeRecipe = async (index) => {
    const { day, onRemoveRecipe } = this.props;
    await onRemoveRecipe(day, index);
    // ^ $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ update the parent state
    /*this.setState(update(this.state, {
      recipes: {$splice: [[index, 1]]}
    }));*/
    //const { list } = this.props;
    //this.setState({recipes: list});
  }

  moveRecipe = async (dragIndex, hoverIndex) => {
    const { recipes } = this.state; // !!!!!!! or list from props?
    const { day, expandedDay, onReorderRecipe } = this.props;
    const dragRecipe = recipes[dragIndex];
    // only allow reordering/moving of recipes within currently expanded day
    if (day !== expandedDay) return;
    await onReorderRecipe(day, dragIndex, hoverIndex, dragRecipe);
    // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ update the parent state
    /*this.setState(update(this.state, {
      recipes: {$splice: [[dragIndex, 1], [hoverIndex, 0, dragRecipe]]}
    }));*/
  }


  render() {
    //const { recipes } = this.state;
    const { list, expanded, day, expandedDay, canDrop, isOver, connectDropTarget } = this.props;

    let color = (isOver && canDrop) ? "mobile_planner_day_green" : "mobile_planner_day_white";

    return expanded
    ? connectDropTarget(
      <div
        className={`mobile_planner_expanded_day ${color}`}
        ref={this.setSelfRef}
        onClick={this.handleClick}
      >
        <span className="mobile_the_date">{day}</span>
        {list.map((recipe, i) => (
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
    )
    : false;
  }
}

export default DropTarget(
  Types.PLANNER_RECIPE,
  plannerExpandedDayTarget,
  collect
)(MobilePlannerExpandedDay);