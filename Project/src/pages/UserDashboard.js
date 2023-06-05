import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import UserNav from '../components/userNav';

const UserDashboard = () =>{
    return (
        <>
        <NavBar />
       
        <div className='page'>
        <UserNav />
        <div className='user-container'>
        
        </div>
        </div>
        <Footer />
        </>
    )
}

export default UserDashboard;