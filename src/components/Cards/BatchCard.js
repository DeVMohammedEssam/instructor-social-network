import React from "react";
import { Link } from "react-router-dom";

export default function BatchCard({
  image,
  name,
  admins,
  id,
  children,
  clicked
}) {
  return (
    <div className="batch-card card">
      <div className="batch-card__close-icon">
        <i
          data-toggle="modal"
          data-target={".modal-number-" + id}
          className="fa fa-times"
        />
      </div>
      <Link to={"dashboard/analysis/" + id}>
        <img className="batch-card__image" src={image} />
        <p className="batch-card__name">{name}</p>
      </Link>

      <div
        className={"modal modal-center modal-number-" + id}
        tabindex="-1"
        role="dialog"
        aria-labelledby="mySmallModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-body">
              you want to delete {name} for ever ?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  clicked(id);
                }}
                data-dismiss="modal"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
