//import assets
import brandLogo from "../../assets/brand-logo/brand-logo.svg";
import moreMenu from "../../assets/icons/more-menu.png";
import plusIcon from "../../assets/icons/plus-icon.png";
import rightArrowIcon from '../../assets/icons/right-arrow-icon.png';
import leftArrowIcon from '../../assets/icons/left-arrow-icon.png';
import deleteIcon from '../../assets/icons/delete-icon.png';
import downArrowIcon from '../../assets/icons/down-arrow-white-icon.png';
import printerArrowIcon2 from '../../assets/icons/printer-white-icon2.png';

function BucketDetailspage() {
  return (
    <div>
      {/* Navigation Bar*/}
      <nav className="nav __shadow--lg">
        <div className="container nav__container">
          <div className="nav__brand">
            <img className="nav__brand-name" src={brandLogo} alt="Brand Logo" />
            <h1 className="nav__brand-name">Stack Learner</h1>
          </div>
          <div className="nav__menu nav__menu--right">
            <div className="nav__menu-items">
              <img className="nav__menu-items" src={moreMenu} alt="More Menu" />
            </div>
          </div>
        </div>
      </nav>
      {/* Main Content Body */}
      <main className="container __margin--ylg">
        {/* Add Item */}
        <div className="section add-item __shadow--sm">
          <div className="add-item__relative">
            <div className="add-item__input">
              <img className='add-item__icon' src={plusIcon} alt="Create New Bucket" />

              <input
                className="add-item__input-field"
                type="text"
                placeholder="Create New Bucket"
              />
            </div>

            <div className="add-item__filter-overlay hide">
              <ul className="add-item__filter-list">
                <li className="add-item__filter-item">
                  <div className="add-item__filter-content">
                    <img
                      className="add-item__filter-icon"
                      src={plusIcon}
                      alt="Item"
                    />
                    Egg
                  </div>
                </li>

                <li className="add-item__filter-item">
                  <div className="add-item__filter-content">
                    <img
                      className="add-item__filter-icon"
                      src={plusIcon}
                      alt="Item"
                    />
                    Egg
                  </div>
                </li>

                <li className="add-item__filter-item">
                  <div className="add-item__filter-content">
                    <img
                      className="add-item__filter-icon"
                      src={plusIcon}
                      alt="Item"
                    />
                    Egg
                  </div>
                </li>

                <li className="add-item__filter-item">
                  <div className="add-item__filter-content">
                    <img
                      className="add-item__filter-icon"
                      src={plusIcon}
                      alt="Item"
                    />
                    Egg
                  </div>
                </li>

                <li className="add-item__filter-item">
                  <div className="add-item__filter-content">
                    <img
                      className="add-item__filter-icon"
                      src={plusIcon}
                      alt="Item"
                    />
                    Egg
                  </div>
                </li>

                <li className="add-item__filter-item">
                  <div className="add-item__filter-content">
                    <img
                      className="add-item__filter-icon"
                      src={plusIcon}
                      alt="Item"
                    />
                    Egg
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="horizontal-line"> </div>
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
        </div>
        <section className="section table __shadow--sm">
          <table className="table__table">
            <thead className="table__thead">
              <tr>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Cost</th>
                <th className="align-right">Actions</th>
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
                  <button className="icon-button icon-button--custom">
                    <img
                      className="icon-button__icon"
                      src={deleteIcon}
                      alt="Delete"
                    />
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Item table Completed */}
        <section className="section table table--success __shadow--sm">
          <table className="table__table">
            <thead className="table__thead">
              <tr>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Cost</th>
                <th className="align-right">
                  <button className="icon-button">
                    <img
                      src={printerArrowIcon2}
                      alt="print"
                    />
                  </button>

                  <button className="icon-button">
                    <img
                      src={downArrowIcon}
                      alt="Printer"
                    />
                  </button>
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
        </section>
      </main>
    </div>
  );
}
export default BucketDetailspage;
