import {Router, Redirect} from '@reach/router'
import NotFound from '../pages/404';
import BucketDetailspage from "../pages/bucket-details";
//custom components
import BucketPage from "../pages/buckets";

function AppRouter () {
 return(
     <Router>
         <BucketPage path='/' />
         <Redirect from='buckets' to ='/' noThrow />
         <BucketDetailspage path='/buckets/:bucketID' />
         <NotFound default />

     </Router>

 )

}

export default AppRouter;