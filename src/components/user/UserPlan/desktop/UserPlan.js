import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import LeftNav from '../../../LeftNav/LeftNav';

import PlannerDay from './PlannerDay/PlannerDay';
import PlannerExpandedDay from './PlannerExpandedDay/PlannerExpandedDay';

import './userPlan.css';

const UserPlan = props => (
  <div className={`desktop-planner two-column-a ${props.twoColumnATheme}`}>

    <LeftNav />

    <section>

      <div className="planner-header">
        <h1>Plan</h1>
        <p className="error-message">{feedback}</p>
        <div className="planner-name">
          <label className="planner-name-label">Plan Name:</label>
          <input
            className="planner-name-input"
            type="text"
            onChange={handlePlanNameChange}
            value={props.planName}
          />
        </div>
      </div>

      <hr className="planner-hr" />

      <div id="calendar_container">
        <div id="monthly_plan">
          <div id="table">
            <div id="thead">
              <span className="th">Sunday</span>
              <span className="th">Monday</span>
              <span className="th">Tuesday</span>
              <span className="th">Wednesday</span>
              <span className="th">Thursday</span>
              <span className="th">Friday</span>
              <span className="th">Saturday</span>
            </div>
            <div id="tbody">
              {/* do you need Object.assign({}, ...Object.keys etc.) here? */}
              {Object.keys(props.recipeListsInsideDays).map((recipeList, i) => (
                <div key={i} className="td">
                  <div className="content">
                    <PlannerDay
                      day={i + 1}
                      list={props.recipeListsInsideDays[recipeList]}
                      expanded={props.expanded}
                      expandedDay={props.expandedDay}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div id="expanded_day_area">
            <PlannerExpandedDay
              day={props.expandedDay}
              list={(props.expanded)
                ? props.recipeListsInsideDays[props.expandedDay]
                : []
              }
              expanded={props.expanded}
              expandedDay={props.expandedDay}
            />
          </div>
        </div>
      </div>

    </section>

  </div>
);

const mapStateToProps = state => ({
  //viewingPlan: state.planner.viewing,
  //creatingPlan: state.planner.creating,
  //updatingPlan: state.planner.updating,
  expanded: state.planner.expanded,
  expandedDay: state.planner.expandedDay,
  //planName: state.planner.planName,
  recipeListsInsideDays: state.planner.recipeListsInsideDays
});

export default withRouter(connect(mapStateToProps)(UserPlan));