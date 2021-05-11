import rightArrowIcon from '../../assets/icons/right-arrow-icon.png';
import leftArrowIcon from '../../assets/icons/left-arrow-icon.png';
function SuggestionItem(){
    return(

        
        <div className="add-item__suggestions">
          <div className="add-item__suggestion-control add-item__suggestion-control--prev">
            <img
              className="add-item__suggestion-control-icon"
              src={leftArrowIcon}
              alt="previous"
            />
          </div>
          <div className="add-item__suggestion-chips">
            <div className="add-item__suggestion-chip-item">Egg</div>
            <div className="add-item__suggestion-chip-item">carrot</div>
            <div className="add-item__suggestion-chip-item">Banana</div>
            <div className="add-item__suggestion-chip-item">Apple</div>
            <div className="add-item__suggestion-chip-item">coke</div>
  
            <div className="add-item__suggestion-chip-item">water</div>
  
            <div className="add-item__suggestion-chip-item">Medicine</div>
            <div className="add-item__suggestion-chip-item">Milk</div>
            <div className="add-item__suggestion-chip-item">Apple</div>
            <div className="add-item__suggestion-chip-item">Egg</div>
          </div>
          <div className="add-item__suggestion-control add-item__suggestion-control--next">
            <img src={rightArrowIcon} alt="Next" />
          </div>
        </div>
      
    );
    
}

export default SuggestionItem;