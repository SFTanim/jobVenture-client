import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useEffect, useState } from "react";
import CategoryCards from "./CategoryCards/CategoryCards";


const CategoryTabs = () => {
    const [allJobData, setAllJobData] = useState([]);
    const [allJobCategory, setAllJobCategory] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/allCategoryJob')
            .then(res => {
                setAllJobData(res.data);

                // Extract unique categories
                const uniqueCategories = [...new Set(res.data.map(data => data.category))];
                setAllJobCategory(uniqueCategories);
            })
            .catch(err => console.error(err));
    }, []);

    // console.log(allJobData);
    // console.log(allJobCategory);
    return (
        <div className='my-16'>
            <h2 className="text-2xl lg:text-5xl mb-6 border-[#FF4949] border-b-4 w-fit pb-2">Available Job Categories</h2>
            <Tabs>
                <TabList>
                    <Tab>All Category</Tab>
                    {
                        allJobCategory?.map((data, idx) => <Tab key={idx}>{data}</Tab>)
                    }
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-evenly mt-2'>
                        {
                            allJobData?.map((data, idx) =>
                                <div key={idx} className="card border w-full bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title text-2xl">{data.name}</h2>
                                        <h3 className=""><span className="font-bold">Job Title:</span> {data.category}</h3>
                                        <h3 className=""><span className="font-bold">Job Title:</span> {data.jobTitle}</h3>
                                        <h3 className=""><span className="font-bold">Salary: </span>{data.salaryRange}</h3>
                                        <h3 className=""><span className="font-bold">Posted: </span>{data.jobPostingDate}</h3>
                                        <h3 className=""><span className="font-bold">Deadline: </span>{data.applicationDeadline}</h3>
                                        <h3 className=""><span className="font-bold">Job Applicants Number: </span>{data.jobApplicantsNumber}</h3>
                                        <div className="card-actions justify-end">
                                            <button className="card-common-button">View Details</button>
                                        </div>
                                    </div>
                                </div>)
                        }
                    </div>

                </TabPanel>
                {
                    allJobCategory?.map((data, idx) => <TabPanel key={idx}>
                        <CategoryCards categoryName={data}></CategoryCards>
                    </TabPanel>)
                }


                {/* <TabPanel>
                    <p>
                        <b>Luigi</b> (<i>Japanese: ルイージ Hepburn: Ruīji, [ɾɯ.iː.dʑi̥]</i>) (<i>English: /luˈiːdʒi/;
                            Italian: [luˈiːdʒi]</i>) is a fictional character featured in video games and related media
                        released by Nintendo. Created by prominent game designer Shigeru Miyamoto, Luigi is portrayed
                        as the slightly younger but taller fraternal twin brother of Nintendo's mascot Mario, and
                        appears in many games throughout the Mario franchise, often as a sidekick to his brother.
                    </p>
                    <p>
                        Source:{' '}
                        <a href="https://en.wikipedia.org/wiki/Luigi" target="_blank">
                            Wikipedia
                        </a>
                    </p>
                </TabPanel>
                <TabPanel>
                    <p>
                        <b>Princess Peach</b>
                        is a character in Nintendo's Mario franchise. Originally created by Shigeru Miyamoto,
                        Peach is the princess of the fictional Mushroom Kingdom, which is constantly under
                        attack by Bowser. She often plays the damsel in distress role within the series and
                        is the lead female. She is often portrayed as Mario's love interest and has appeared
                        in Super Princess Peach, where she is the main playable character.
                    </p>
                    <p>
                        Source:{' '}
                        <a href="https://en.wikipedia.org/wiki/Princess_Peach" target="_blank">
                            Wikipedia
                        </a>
                    </p>
                </TabPanel>
                <TabPanel>
                    <p>
                        <b>Yoshi</b> , once
                        romanized as Yossy, is a fictional anthropomorphic dinosaur who appears in
                        video games published by Nintendo. Yoshi debuted in Super Mario World (1990) on the
                        Super Nintendo Entertainment System as Mario and Luigi's sidekick. Yoshi later starred
                        in platform and puzzle games, including Super Mario World 2: Yoshi's Island, Yoshi's Story
                        and Yoshi's Woolly World. Yoshi also appears in many of the Mario spin-off games, including
                        Mario Party and Mario Kart, various Mario sports games, and Nintendo's crossover fighting
                        game series Super Smash Bros. Yoshi belongs to the species of the same name, which is
                        characterized by their variety of colors.
                    </p>
                    <p>
                        Source:{' '}
                        <a href="https://en.wikipedia.org/wiki/Yoshi" target="_blank">
                            Wikipedia
                        </a>
                    </p>
                </TabPanel>
                <TabPanel>
                    <p>
                        <b>Toad</b> (<i>Japanese: キノピオ Hepburn: Kinopio</i>) is a fictional character who primarily
                        appears in Nintendo's Mario franchise. Created by Japanese video game designer Shigeru Miyamoto,
                        he is portrayed as a citizen of the Mushroom Kingdom and is one of Princess Peach's most loyal
                        attendants; constantly working on her behalf. He is usually seen as a non-player character (NPC)
                        who provides assistance to Mario and his friends in most games, but there are times when Toad(s)
                        takes center stage and appears as a protagonist, as seen in Super Mario Bros. 2, Wario's Woods,
                        Super Mario 3D World, and Captain Toad: Treasure Tracker.
                    </p>
                    <p>
                        Source:{' '}
                        <a href="https://en.wikipedia.org/wiki/Toad_(Nintendo)" target="_blank">
                            Wikipedia
                        </a>
                    </p>
                </TabPanel> */}
            </Tabs>
        </div>
    );
};

export default CategoryTabs;