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
        fileError,
        isApplyingFile,
        selectedFile,
        handleApplyDecal,
        handleFileChange,
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
                                    isApplying={isApplyingFile}
                                    onApply={handleApplyDecal}
                                    onFileChange={handleFileChange}
                                />
                            )}
                        </div>
                    </motion.div>

                    <motion.div
                        className="absolute top-4 right-4 z-30 md:top-6 md:right-6"
                        {...fadeAnimation}
                    >
                        <Button
                            title="Go Back"
                            variant="outline"
                            onClick={exitCustomizer}
                        />
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
