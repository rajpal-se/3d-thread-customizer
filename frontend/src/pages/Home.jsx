import { motion, AnimatePresence } from "framer-motion"
import { useSnapshot } from "valtio"

import state from "../store"
import { Button } from "../components"
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation,
} from "../config/motion"
import ErrorBoundary from "../components/ErrorBoundary"

const Home = () => {
    const snap = useSnapshot(state)

    return (
        <ErrorBoundary message="Home">
            <AnimatePresence>
                {snap.intro && (
                    <motion.section className="home" {...slideAnimation("left")}>
                        <motion.header {...slideAnimation("down")}>
                            <img src="./logo.png" alt="logo" className="w-20 h-20 object-contain" />
                        </motion.header>

                        <motion.div className="home-content" {...headContainerAnimation}>
                            <motion.div {...headTextAnimation}>
                                <h1
                                    className="head-text"
                                    style={{ color: "snow", textShadow: "1px 1px 2px gray" }}
                                >
                                    LET'S <br className="xl:block hidden" /> DO IT.
                                </h1>
                            </motion.div>
                            <motion.div {...headContentAnimation} className="flex flex-col gap-5">
                                <p
                                    className="max-w-md font-normal text-gray-600 text-base"
                                    style={{
                                        color: "#555555",
                                        letterSpacing: "1px",
                                    }}
                                >
                                    Create your unique and exclusive shirt with our brand-new 3D
                                    customization tool. <strong>Unleash your imagination</strong>{" "}
                                    and define your own style.
                                </p>

                                <Button
                                    title="Customize It"
                                    onClick={() => (state.intro = false)}
                                    className="self-start ml-10 my-5"
                                />
                            </motion.div>
                        </motion.div>
                    </motion.section>
                )}
            </AnimatePresence>
        </ErrorBoundary>
    )
}

export default Home
