
import './App.css';
import axios from './api/axios';
import CheckApi from './component/CheckApi';
import { Route, Routes } from 'react-router-dom';
import Layout from './component/Layout';
import HomePage from './component/HomePage';
import { useEffect, useState } from 'react';
import { DataProvider } from './context/DataContext';
import { AuthProvider } from './context/AuthContext';
import Nav from './component/Nav';
import Footer from './component/Footer';
import Faq from './component/Faq';
import HowToBuyAnNFT from './component/HowToBuyAnNFT';
import FaqCreateNft from './component/FaqCreateNft';
import WhoIsTritons from './component/WhoIsTritons';
import UserArea from './component/UserArea';
import Profile from './component/Profile';
import CreateNft from './component/CreateNft';
import ItemPage from './component/ItemPage';
import EditItem from './component/EditItem';
import GetNFTbyContract from './component/GetNFTbyContract';
import FaqDept from './component/FaqDept';
import Faqs from './component/Faqs';
import CollectionPage from './component/CollectionPage';
import Admin from './protected routes/Admin';
import AdminPanel from './protected routes/AdminPanel';
import WalletLogin from './component/WalletLogin';
import AdminUsers from './protected routes/AdminUsers';
import AdminEditUser from './protected routes/AdminEditUser';
import SupportRequest from './component/SupportRequest';
import ExplorePage from './component/ExplorePage';
import Cart from './component/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';


function App() {
  const [bannerData, setBannerData] = useState([]);
  const trendUrl = 'trending'
  useEffect(() => {
    const getTrendData = async () => {

      try {
        const response = await axios.get(trendUrl);
        const data = response.data
        console.log(data);
        setBannerData(data)
      } catch (error) {
        console.error(error);
      }
    }
    getTrendData()
  }, [])

  return (
    <main className="App">
      <DataProvider>
        <AuthProvider>
        <Nav />
        <section className='main--display'>
          <div className='buy--tab'>
            
            <div className='buy-details'>
            <FontAwesomeIcon icon={faCircleXmark} style={{color: "#000000", position : 'absolute', right : '-3px', top : '-3px', fontSize : '28px', cursor :'pointer'}} />
            <article style={{display : 'flex'}}>
              <img src="https://i.seadn.io/gcs/files/e370e9c70ae235cfcdf21b4a068ab83b.png?auto=format&dpr=1&w=384" alt="" />
              <div className='pay--now'>
                <h1 className='buy--itm'> <span>Name :</span> Doodles #8797</h1>
                <h2 className='buy--quantity'><span>Quantity :</span> 2</h2>
                <h3 className='buy--fees'><span>Fees :</span> $23</h3>
                <button className='buy--btn'> Buy </button>
              </div>
            </article>
            </div>
          </div>
          <Routes>
             {/* area open to every one */}
              <Route path='/' element={<Layout />}>
              <Route path='/' element={<HomePage bannerData={bannerData} />} />
              <Route path='/support-request' element={<SupportRequest />} />

              <Route path='collection/:contractAddress' element={<CollectionPage />} />
              <Route path='/itempage/:_id' element={<ItemPage />} />
              <Route path='/walletlogin' element={<WalletLogin />} />
              <Route path='/explore' element={<ExplorePage />} />
              <Route path='/cart' element={<Cart />} />

              {/* faq sections */}
              <Route path='/' element={<FaqDept />}>
                <Route path='/faq-quick-answer' element={<Faqs />} />
                <Route path='/faq-what-is-an-nft' element={<Faq />} />
                <Route path='/faq-how-to-buy-an-nft' element={<HowToBuyAnNFT />} />
                <Route path='/faq-how-to-create-an-nft' element={<FaqCreateNft />} />
                <Route path='/faq-who-is-tritonsprime' element={<WhoIsTritons />} />
              </Route>


              {/* user area to lock */}
                <Route path='/user-profile/:id' element={<Profile />} />
                <Route path='/user-create/:id' element={<CreateNft />} />
                <Route path='/user-edit/:id' element={<EditItem />} />
              <Route path='/' element={<UserArea />}>
              </Route>
                <Route path='/getnftassets' element={<GetNFTbyContract />} />

            {/* Admin panel  to lock */}
              <Route path='/' element={<Admin />}>
                <Route path='/admin-panel' element={<AdminPanel />} />
                <Route path='/admin-panel-users' element={<AdminUsers />} />
                <Route path='/admin-panel-edit-user' element={<AdminEditUser />} />
              </Route>  

              {/* {missing get routes} */}

``
            </Route>
          </Routes>
        </section>
        <Footer />
        </AuthProvider>
      </DataProvider>
    </main>
  );
}

export default App;
