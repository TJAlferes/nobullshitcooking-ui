import React from 'react';
import { Link } from 'react-router-dom';

import { IEquipment } from '../../../../store/data/types';

export function Equipment({
  handleDeletePrivateEquipment,
  myPrivateEquipment
}: Props): JSX.Element {
  return (
    <div className="dashboard-content">
      <h2 className="dashboard-content-heading">Private Equipment</h2>
      <Link className="create-new-entity" to="/user-equipment/submit">
        Create New Equipment
      </Link>
      {
        myPrivateEquipment.length
        ? myPrivateEquipment.map(e => (
          <div className="dashboard-content-item" key={e.id}>
            <span className="dashboard-content-item-tiny">
              {
                e.image !== "nobsc-equipment-default"
                ? <img src={`https://s3.amazonaws.com/nobsc-user-equipment/${e.image}-tiny`} />
                : <div className="image-default-28-18"></div>
              }
            </span>
            <span className="dashboard-content-item-name">
              <Link to={`/user-equipment/${e.id}`}>{e.name}</Link>
            </span>
            <span className="dashboard-content-item-action">
              <Link to={`/user-equipment/edit/${e.id}`}>Edit</Link>
            </span>
            <span
              className="dashboard-content-item-delete"
              onClick={() => handleDeletePrivateEquipment(e.id)}
            >
              Delete
            </span>
          </div>
        ))
        : (
          <div className="dashboard-content-none">
            You haven't created any private equipment yet.
          </div>
        )
      }
    </div>
  );
}

type Props = {
  handleDeletePrivateEquipment(id: number): void;
  myPrivateEquipment: IEquipment[];
};