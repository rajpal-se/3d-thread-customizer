import React, { useState, useEffect, useCallback } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useSnapshot } from "valtio"

import config from "../config/config"
import state from "../store"
import { download } from "../assets"
import { downloadCanvasToImage, reader } from "../config/helpers"
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants"
import { fadeAnimation, slideAnimation } from "../config/motion"
import { AIPicker, ColorPicker, Button, FilePicker, Tab } from "../components"
import ErrorBoundary from "../components/ErrorBoundary"

const Customizer = () => {
    const snap = useSnapshot(state)

    const [file, setFile] = useState("")

    const [prompt, setPrompt] = useState("")
    const [generatingImg, setGeneratingImg] = useState(false)

    const [activeEditorTab, setActiveEditorTab] = useState("")
    const [activeFilterTab, setActiveFilterTab] = useState({
        logoShirt: true,
        stylishShirt: false,
    })

    const readFile = (type) => {
        reader(file).then((result) => {
            handleDecals(type, result)
            setActiveEditorTab("")
        })
    }

    const handleSubmit = async (type) => {
        if (!prompt) return alert("Please enter a prompt")

        try {
            setGeneratingImg(true)

            const response = await fetch("http://localhost:8080/api/v1/dalle", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    prompt,
                }),
            })

            const data = await response.json()
            if (!data?.message) {
                // Check, If no error
                handleDecals(type, `data:image/png;base64,${data.photo}`)
            } else {
                alert("Limit exceeded")
            }
        } catch (error) {
            console.log("API Error", error)
            // alert(error?.message)
            alert("Limit exceeded")
        } finally {
            setGeneratingImg(false)
            setActiveEditorTab("")
        }
    }

    const handleDecals = (type, result) => {
        const decalType = DecalTypes[type]

        state[decalType.stateProperty] = result

        if (!activeFilterTab[decalType.filterTab]) {
            handleActiveFilterTab(decalType.filterTab)
        }
    }

    const handleActiveFilterTab = (tabName) => {
        switch (tabName) {
            case "logoShirt":
                state.isLogoTexture = !activeFilterTab[tabName]
                break
            case "stylishShirt":
                state.isFullTexture = !activeFilterTab[tabName]
                break
            default:
                state.isLogoTexture = true
                state.isFullTexture = false
                break
        }

        // after setting the state, activeFilterTab is updated

        setActiveFilterTab((prevState) => {
            return {
                ...prevState,
                [tabName]: !prevState[tabName],
            }
        })
    }

    // show tab content depending on the activeTab
    const generateTabContent = useCallback(() => {
        switch (activeEditorTab) {
            case "colorpicker":
                return <ColorPicker />
            case "filepicker":
                return <FilePicker file={file} setFile={setFile} readFile={readFile} />
            case "aipicker":
                return (
                    <AIPicker
                        prompt={prompt}
                        setPrompt={setPrompt}
                        generatingImg={generatingImg}
                        handleSubmit={handleSubmit}
                    />
                )
            default:
                return null
        }
    }, [activeEditorTab, file, setFile, readFile, prompt, setPrompt, generatingImg, handleSubmit])

    return (
        <ErrorBoundary message="Customizer">
            <AnimatePresence>
                {!snap.intro && (
                    <>
                        <motion.div
                            key="custom"
                            className="absolute top-0 left-0 z-10"
                            {...slideAnimation("left")}
                        >
                            <div className="flex items-center min-h-screen">
                                <div className="editortabs-container tabs">
                                    {EditorTabs.map((tab) => (
                                        <Tab
                                            key={tab.name}
                                            tab={tab}
                                            handleClick={() =>
                                                setActiveEditorTab((state) =>
                                                    tab.name !== state ? tab.name : ""
                                                )
                                            }
                                        />
                                    ))}

                                    {generateTabContent()}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div className="absolute z-10 top-5 right-5" {...fadeAnimation}>
                            <Button title="Go Back" onClick={() => (state.intro = true)} />
                        </motion.div>

                        <motion.div className="filtertabs-container" {...slideAnimation("up")}>
                            {FilterTabs.map((tab) => (
                                <Tab
                                    key={tab.name}
                                    tab={tab}
                                    isFilterTab
                                    isActiveTab={activeFilterTab[tab.name]}
                                    handleClick={() => handleActiveFilterTab(tab.name)}
                                />
                            ))}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </ErrorBoundary>
    )
}

export default Customizer
