//import assets


import NavBar from "../../components/nav/nav";
import CreateTable from "../../components/create";
import TableItem from "../../components/table";

function BucketPage() {
  return (
    <div>
      {/*Navigation bar*/}
      <NavBar />
      {/* Main Content Body */}
      <main className="container __margin--ylg">
        {/*Add New Bucket Section */}
      <CreateTable label= "Create New Bucket" />

        {/*Bucket Table */}
        <div className="section table __shadow--sm">
          <TableItem />
        </div>
      </main>
    </div>
  );
}

export default BucketPage;
