import React from "react"

import Button from "./Button"

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
    return (
        <div className="aipicker-container">
            <textarea
                placeholder="Ask AI..."
                rows={5}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="aipicker-textarea"
            />
            <div className="flex flex-wrap gap-3 justify-center">
                {generatingImg ? (
                    <Button type="outline" title="Asking AI..." customStyles="text-xs" />
                ) : (
                    <>
                        <Button
                            title="AI Logo"
                            onClick={() => handleSubmit("logo")}
                            disabled={!Boolean(prompt)}
                            style={{ flexGrow: 1 }}
                        />

                        <Button
                            title="AI Full"
                            onClick={() => handleSubmit("full")}
                            disabled={!Boolean(prompt)}
                            style={{ flexGrow: 1 }}
                        />
                    </>
                )}
            </div>
        </div>
    )
}

export default AIPicker
