//import assets



import CreateTable from '../../components/create';
import NavBar from "../../components/nav/nav";
import TableItem from '../../components/table';

function BucketDetailspage() {
  return (
    <div>
      {/* Navigation Bar*/}
      <NavBar />
      {/* Main Content Body */}
      <main className="container __margin--ylg">
      
        
        {/* Add Item */}
      <CreateTable extra label="Add New Bucket"/>

        {/* item table */}
        <section className="section table __shadow--sm">
         
         <TableItem />
        </section>

        {/* Item table Completed */}
        <section className="section table table--success __shadow--sm">
         <TableItem />
        </section>
      </main>
    </div>
  );
}
export default BucketDetailspage;
