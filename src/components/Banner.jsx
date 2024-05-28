import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react";


const Banner = () => {
    const [width, setWidth] = useState();
    const carosel = useRef();
    useEffect(() => {
        console.log(`ScrollWidth: ${carosel.current.scrollWidth}`,
            `OffsetWidth: ${carosel.current.offsetWidth}`);
        setWidth(carosel.current.scrollWidth - carosel.current.offsetWidth)
    }, [])
    return (
        <div className="border">
            {/* <motion.h1 animate={{x: 50}}>Banner</motion.h1> */}
            <motion.div whileTap={{ cursor: "grabbing" }} ref={carosel} className="carosel">
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className="inner-carosel">
                    <motion.div className="item"> <img src="https://i.ibb.co/t39xBCJ/Default-dinner-set-1.jpg" alt="" /> </motion.div>
                    <motion.div className="item"> <img src="https://i.ibb.co/t39xBCJ/Default-dinner-set-1.jpg" alt="" /> </motion.div>
                    <motion.div className="item"> <img src="https://i.ibb.co/t39xBCJ/Default-dinner-set-1.jpg" alt="" /> </motion.div>
                    <motion.div className="item"> <img src="https://i.ibb.co/t39xBCJ/Default-dinner-set-1.jpg" alt="" /> </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Banner;