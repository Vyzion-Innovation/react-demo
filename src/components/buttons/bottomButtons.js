import { Button } from "primereact/button";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function BottomButtons(props) {
  const location = useLocation(); //  used to access the current location object which gives info about URL like strings, path etc
  const navigate = useNavigate();
  return (
    <div className="flex mt-3">
      <Button
        label={props.label}
        type="button"
        loading={props.loading1}
        onClick={props.save}
        className="modules__save_button me-3"
      />
      {!location.state && (
        <Button
          label="Save + Next"
          type="button"
          severity="secondary"
          loading={props.loading2}
          onClick={props.saveNext}
          className="modules__savenext_button me-3"
        />
      )}
      <Button
        label="Back"
        severity="secondary"
        onClick={() => navigate(-1)}
        className="modules__back_button"
      />
    </div>
  );
}

export default BottomButtons;
