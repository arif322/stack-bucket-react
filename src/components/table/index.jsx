// import downArrowIcon from '../../assets/icons/down-arrow-white-icon.png';
// import printerArrowIcon2 from '../../assets/icons/printer-white-icon2.png';
import deleteIcon from '../../assets/icons/delete-icon.png';

function TableItem(){
    return(
        <table className="table__table">
        <thead className="table__thead">
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Cost</th>
            <th className="align-right">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="table__tbody">
          <tr>
            <th>
              <div className="table__item-name">
                <input type="checkbox" />
                <label>Carrots</label>
              </div>
            </th>
            <th>
              <div className="table__item-input">
                <span
                  className="auto-grow-input"
                  role="textbox"
                  aria-placeholder="500G"
                  contentEditable
                >
                  2KG
                </span>
              </div>
            </th>
            <th>
              <div className="table__item-input">
                <span
                  className="auto-grow-input"
                  role="textbox"
                  contentEditable
                >
                  250
                </span>
                <span>BDT</span>
              </div>
            </th>
            <th className="align-right">
              <button className="icon-button">
                <img src={deleteIcon} alt="Delete" />
              </button>
            </th>
          
          </tr>
          <tr>
            <th>
              <div className="table__item-name">
                <input className="table__item-name" type="checkbox" />
                <label>Carrots</label>
              </div>
            </th>
            <th>
              <div className="table__item-input">
                <span
                  className="auto-grow-input"
                  role="textbox"
                  aria-placeholder="500G"
                  contentEditable
                >
                  2KG
                </span>
              </div>
            </th>
            <th>
              <div className="table__item-input">
                <span
                  className="auto-grow-input"
                  role="textbox"
                  contentEditable
                >
                  250
                </span>
                <span>BDT</span>
              </div>
            </th>
            <th className="align-right">
              <button className="icon-button">
                <img src={deleteIcon} alt="Delete" />
              </button>
            </th>
          </tr>
          <tr>
            <th>
              <div className="table__item-input">
                <input type="checkbox" />
                <label>Carrots</label>
              </div>
            </th>
            <th>
              <div className="table__item-input">
                <span
                  className="auto-grow-input"
                  role="textbox"
                  aria-placeholder="500G"
                  contentEditable
                >
                  2KG
                </span>
              </div>
            </th>
            <th>
              <div className="table__item-input">
                <span
                  className="auto-grow-input"
                  role="textbox"
                  contentEditable
                >
                  250
                </span>
                <span>BDT</span>
              </div>
            </th>
            <th className="align-right">
              <button className="icon-button">
                <img src={deleteIcon} alt="Delete" />
              </button>
            </th>
          </tr>
        </tbody>
      </table>

    )
}

export default TableItem;