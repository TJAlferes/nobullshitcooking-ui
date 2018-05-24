import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import update from 'immutability-helper';

import PlannerRecipe from '../PlannerRecipe/PlannerRecipe';

const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};  // is this definition necessary here since we imported?

const plannerDayTarget = {
  drop(props, monitor, component) {
    const { day } = props;
    const draggedRecipe = monitor.getItem();

    if (day !== draggedRecipe.listId) {
      component.pushRecipe(draggedRecipe.recipe);
    }

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

//

class PlannerDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: props.list,
      expanded: false
    };
    //this.dayRef = React.createRef();
  }

  //componentDidMount() {} ???

  handleClick = e => {
    const testX = "10 px";
    const testY = "30 px";
    /*
    const dayClicked = e.target.getBoundingClientRect();
    //const dayClicked = this.dayRef.getBoundingClientRect();
    const topCoords = dayClicked.top + pageYOffset;
    const leftCoords = dayClicked.left + pageXOffset;

    const { tableRef } = this.props; // or findDOMNode
    const moveY = tableRef.top - topCoords;
    const moveX = (tableRef.right + 10) - leftCoords;
    */
    e.preventDefault();
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));

    //this.style.transform = `translateX (${testX}) translateY(${testY})`;
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
    const { recipes, expanded } = this.state;
    const dragRecipe = recipes[dragIndex];

    if (expanded === false) {
      return;
    }

    this.setState(update(this.state, {
      recipes: {$splice: [[dragIndex, 1], [hoverIndex, 0, dragRecipe]]}
    }));
  }

  render() {
    const { recipes, expanded } = this.state;
    const { canDrop, isOver, connectDropTarget } = this.props;

    let size = expanded ? "planner_day_expanded" : "planner_day_collapsed";
    let location = expanded ? ({"transform": "translateX(200px)"}) : ({"transform": "none"});
    let color = (isOver && canDrop) ? "planner_day_green" : "planner_day_white";
    
    return connectDropTarget(
      <td className={`${size} ${color}`} onClick={this.handleClick} style={location}>
        <span className="the_date">{this.props.day}</span>
        {recipes.map((recipe, i) => (
          <PlannerRecipe
          key={recipe.id}
          index={i}
          listId={this.props.id}
          recipe={recipe}
          removeRecipe={this.removeRecipe}
          moveRecipe={this.moveRecipe}
          expanded={expanded}
          />
        ))}
      </td>
    );
  }
}

export default DropTarget(Types.PLANNER_RECIPE, plannerDayTarget, collect)(PlannerDay);