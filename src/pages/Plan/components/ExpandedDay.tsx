import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { plannerViewClickDay } from '../../../store/plannerView/actions';
import { IPlannerViewRecipe } from '../../../store/plannerView/types';
import { Recipe } from './Recipe';

export function ExpandedDay({
  day,
  expanded,
  recipes,
  plannerViewClickDay
}: Props): JSX.Element | null {
  const handleClickDay = () => plannerViewClickDay(day);

  return expanded
  ? (
    <div className="plan__expanded-day" onClick={handleClickDay}>
      <span className="plan__date">{day}</span>
      {recipes.map(recipe => <Recipe recipe={recipe} />)}
    </div>
  )
  : null;
};

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  day: number;
  expanded: boolean;
  recipes: IPlannerViewRecipe[];
};

const mapDispatchToProps = {
  plannerViewClickDay: (day: number) => plannerViewClickDay(day)
};

const connector = connect(null, mapDispatchToProps);

export default connector(ExpandedDay);