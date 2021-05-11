import plusIcon from "../../assets/icons/plus-icon.png";
import SuggestionItem from "../suggestion";
import FilterOverlay from "./FilterOverlay";

function CreateTable({label,extra}) {
  return (
    <div className="section add-item __shadow--sm">
      <div className="add-item__relative">
        <div className="add-item__input">
          <img
            className="add-item__icon"
            src={plusIcon}
            alt={label}
          />

          <input
            className="add-item__input-field"
            type="text"
            placeholder={label}
          />
        </div>
      <FilterOverlay />
      </div>
      {/* filter Overlay item */}

      <div className="horizontal-line"> </div>
      <SuggestionItem />
   
    </div>
  );
}

export default CreateTable;
