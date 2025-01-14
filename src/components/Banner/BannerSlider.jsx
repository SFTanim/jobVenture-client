import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react";



const BannerSlider = () => {
    const [width, setWidth] = useState();
    const carosel = useRef();
    useEffect(() => {
        setWidth(carosel.current.scrollWidth - carosel.current.offsetWidth)
    }, [])

    return (
        <div>
            {/* <motion.h1 animate={{x: 50}}>Banner</motion.h1> */}
            <motion.div whileTap={{ cursor: "grabbing" }} ref={carosel} className="carosel">
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className="inner-carosel">
                    <motion.div className="item"> <img src="https://i.ibb.co/m05ndGh/Default-teamwork-in-office-2.jpg" alt="" /> </motion.div>
                    <motion.div className="item"> <img src="https://i.ibb.co/3CB8Wrm/Default-work-in-office-1.jpg" alt="" /> </motion.div>
                    <motion.div className="item"> <img src="https://i.ibb.co/hCh59pv/Default-work-in-office-0.jpg" alt="" /> </motion.div>
                    <motion.div className="item"> <img src="https://i.ibb.co/cvFsW5V/Default-work-in-office-3.jpg" alt="" /> </motion.div>
                    <motion.div className="item"> <img src="https://i.ibb.co/wcgs8xg/Default-teamwork-in-office-1.jpg" alt="" /> </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default BannerSlider;