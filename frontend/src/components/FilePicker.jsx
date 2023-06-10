import React from "react"

import CustomButton from "./CustomButton"

const FilePicker = ({ file, setFile, readFile }) => {
    console.log("zzzzzzzzddzzzzzzz", Boolean(file), file)
    return (
        <div className="filepicker-container">
            <div className="flex-1 flex flex-col p-3">
                <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <label htmlFor="file-upload" className="filepicker-label">
                    Upload File
                </label>

                <p className="mt-2 text-gray-500 text-xs truncate">
                    {file === "" ? "No file selected" : file.name}
                </p>
            </div>

            <div className="p-3 flex flex-wrap gap-3 rounded-md">
                <CustomButton
                    type="outline"
                    title="Logo"
                    handleClick={() => readFile("logo")}
                    customStyles="text-xs shadow-lg shadow-black-300/50"
                    disabled={!Boolean(file)}
                    useDisableStyle
                    style={{
                        color: "#444444",
                        fontWeight: "bold",
                    }}
                />
                <CustomButton
                    type="filled"
                    title="Full"
                    handleClick={() => readFile("full")}
                    customStyles="text-xs shadow-lg shadow-black-300/50"
                    disabled={!Boolean(file)}
                    useDisableStyle
                    style={{
                        color: "#444444",
                        fontWeight: "bold",
                    }}
                />
            </div>
        </div>
    )
}

export default FilePicker
