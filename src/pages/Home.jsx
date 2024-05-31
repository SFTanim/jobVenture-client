import Banner from "../components/Banner/Banner";
import 'react-tabs/style/react-tabs.css';
import CategoryTabs from "../components/CategoryCards/CategoryTabs";
import JobSeekerSection from "../components/JobSeekerSection";
import JobProcessSection from "../components/JobProcessSection";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="">
                <CategoryTabs></CategoryTabs>
            </div>
            <div className="">
                <JobSeekerSection></JobSeekerSection>
            </div>
            <div className="">
                <JobProcessSection></JobProcessSection>
            </div>
        </div>
    );
};

export default Home;