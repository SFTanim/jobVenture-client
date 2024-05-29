import Banner from "../components/Banner";
import 'react-tabs/style/react-tabs.css';
import CategoryTabs from "../components/CategoryTabs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="">
                <CategoryTabs></CategoryTabs>
            </div>
        </div>
    );
};

export default Home;