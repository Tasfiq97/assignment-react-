import Banner from "../components/Banner";
import Bookings from "../components/Bookings";
import BookNow from "../components/BookNow";
import Cities from "../components/Cities";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nature from "../components/Nature";


const Home = () => {
    return (
      <div>
        <Header></Header>
        <Banner></Banner>
        <BookNow></BookNow>
        <Bookings></Bookings>
        <Nature></Nature>
        <Cities></Cities>
        <Footer>  </Footer>
      </div>
    );
};

export default Home;