import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import Button from '../../../components/ui/Button';
import { exitCustomizer } from '../../../store/customizerActions';
import customizerStore from '../../../store/customizerStore';
import { fadeAnimation, slideAnimation } from '../../../lib/motion';
import useCustomizerControls from '../hooks/useCustomizerControls';
import ColorPickerPanel from './ColorPickerPanel';
import EditorTabs from './EditorTabs';
import FilePickerPanel from './FilePickerPanel';
import FilterTabs from './FilterTabs';

function CustomizerPanel() {
    const snapshot = useSnapshot(customizerStore);
    const {
        activeEditorTab,
        downloadError,
        fileError,
        isApplyingFile,
        selectedFile,
        handleApplyDecal,
        handleDownload,
        handleFileChange,
        handleRemoveDecal,
        handleReset,
        handleTabChange,
        toggleFullTexture,
        toggleLogoTexture,
    } = useCustomizerControls();

    return (
        <AnimatePresence>
            {!snapshot.intro && (
                <>
                    <motion.div
                        className="absolute top-1/2 left-4 z-30 -translate-y-1/2 md:left-6"
                        {...slideAnimation('left')}
                    >
                        <div className="relative flex items-center">
                            <EditorTabs
                                activeEditorTab={activeEditorTab}
                                onTabChange={handleTabChange}
                            />

                            {activeEditorTab === 'colorpicker' ? (
                                <ColorPickerPanel />
                            ) : (
                                <FilePickerPanel
                                    file={selectedFile}
                                    errorMessage={fileError}
                                    isFullApplied={snapshot.isFullTexture}
                                    isApplying={isApplyingFile}
                                    isLogoApplied={snapshot.isLogoTexture}
                                    onApply={handleApplyDecal}
                                    onFileChange={handleFileChange}
                                    onRemove={handleRemoveDecal}
                                />
                            )}
                        </div>
                    </motion.div>

                    <motion.div
                        className="absolute top-4 right-4 z-30 md:top-6 md:right-6"
                        {...fadeAnimation}
                    >
                        <div className="flex flex-col items-end gap-3">
                            <div className="flex flex-wrap items-center justify-end gap-3">
                                <Button
                                    title="Reset"
                                    variant="ghost"
                                    onClick={handleReset}
                                />
                                <Button
                                    title="Download"
                                    onClick={handleDownload}
                                />
                                <Button
                                    title="Go Back"
                                    variant="outline"
                                    onClick={exitCustomizer}
                                />
                            </div>

                            {downloadError ? (
                                <p className="max-w-xs rounded-xl border border-red-300/70 bg-red-50/90 px-3 py-2 text-right text-xs leading-5 text-red-700 shadow-sm backdrop-blur">
                                    {downloadError}
                                </p>
                            ) : null}
                        </div>
                    </motion.div>

                    <motion.div
                        className="absolute inset-x-0 bottom-5 z-30 flex items-center justify-center gap-4 px-4"
                        {...slideAnimation('up')}
                    >
                        <FilterTabs
                            accentColor={snapshot.color}
                            isFullTexture={snapshot.isFullTexture}
                            isLogoTexture={snapshot.isLogoTexture}
                            onToggleFullTexture={toggleFullTexture}
                            onToggleLogoTexture={toggleLogoTexture}
                        />
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

export default CustomizerPanel;
