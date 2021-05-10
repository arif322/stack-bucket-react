//import assets
import brandLogo from "../../assets/brand-logo/brand-logo.svg";

import menu from "../../assets/icons/more-menu.png";

import plusIcon from "../../assets/icons/plus-icon.png";
import Edit from "../../assets/icons/edit-icon.png";
import Delete from '../../assets/icons/delete-icon.png';
import printer from '../../assets/icons/printer-icon.png'

function BucketPage() {
  return (
    <div>
      {/*Navigation bar*/}
      <nav className="nav __shadow--lg">
        <div className="container nav__container">
          <div className="nav__brand">
            <img className="nav__brand-logo" src={brandLogo} alt="Brand Logo" />
            <h1 className="nav__brand-name">Stack Learner</h1>
          </div>
          <div className="nav__menu--right">
            <div className="nav__menu-icon">
              <img className="nav__menu-items" src={menu} alt="More Menu" />
            </div>
          </div>
        </div>
      </nav>
      {/* Main Content Body */}
      <main className="container __margin--ylg">
        {/*Add New Bucket Section */}
        <div className="section add-item __shadow--sm">
          <div className="add-item__relative">
            <div className="add-item__input">
              <img
                className="add-item__icon"
                src={plusIcon}
                alt="Create New Bucket"
              />
              <input
                className="add-item__input-field"
                type="text"
                placeholder="Create New Bucket"
              />
            </div>
          </div>
        </div>

        {/*Bucket Table */}
        <div className="section table __shadow--sm">
          <table className="table_table">
            <thead className="table__thead">
              <tr>
                <th>Bucket</th>
                <th>Created</th>
                <th>Costs</th>
                <th className="align-right">Action</th>
              </tr>
            </thead>
            <tbody className='table__tbody'>
            <tr>
              <th>Holiday Shopping</th>
              <th className="text-secondary">8 may 2021</th>
              <th>4850 BDT</th>
              <th className="align-right">
                <button className="icon-button">
                  <img
                    className="icon-button__icon"
                    src={Edit}
                    alt="Edit"
                  />
                </button>

                <button className="icon-button">
                  <img className="icon-button__icon"
                   src={Delete} 
                   alt="Edit" />
                </button>
                <button className="icon-button">
                  <img className="icon-button__icon"
                   src={printer} alt="Edit" />
                </button>
              </th>
            </tr>
            <tr>
              <th>Holiday Shopping</th>
              <th className="text-secondary">4 may 2021</th>
              <th>4850 BDT</th>
              <th className="align-right">
                <button className="icon-button">
                  <img
                    className="icon-button__icon"
                    src={Edit}
                    alt="Edit"
                  />
                </button>

                <button className="icon-button">
                  <img className="icon-button__icon" 
                  src={Delete} alt="Edit" />
                </button>
                <button className="icon-button">
                  <img className="icon-button__icon"
                   src={printer} alt="Edit" />
                </button>
              </th>
            </tr>
            <tr>
              <th>Holiday Shopping</th>
              <th className="text-secondary">8 may 2021</th>
              <th>4850 BDT</th>
              <th className="align-right">
                <button className="icon-button">
                  <img
                    className="icon-button__icon"
                    src={Edit}
                    alt="Edit"
                  />
                </button>

                <button className="icon-button">
                  <img className="icon-button__icon"
                   src={Delete} alt="Edit" />
                </button>
                <button className="icon-button">
                  <img className="icon-button__icon"
                   src={printer} alt="Edit" />
                </button>
              </th>
            </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default BucketPage;
