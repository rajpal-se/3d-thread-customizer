import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import Button from '../../../components/ui/Button';
import IconTab from '../../../components/ui/IconTab';
import { EDITOR_TABS, FILTER_TABS } from '../config/customizer.constants';
import type { EditorTabName } from '../../../types/customizer';
import {
    applyDecal,
    exitCustomizer,
    toggleFullTexture,
    toggleLogoTexture,
} from '../../../store/customizerActions';
import customizerStore from '../../../store/customizerStore';
import { isImageFile, readFileAsDataUrl } from '../../../lib/file';
import { fadeAnimation, slideAnimation } from '../../../lib/motion';
import ColorPickerPanel from './ColorPickerPanel';
import FilePickerPanel from './FilePickerPanel';

function CustomizerPanel() {
    const snapshot = useSnapshot(customizerStore);
    const [activeEditorTab, setActiveEditorTab] =
        useState<EditorTabName>('colorpicker');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [fileError, setFileError] = useState('');
    const [isApplyingFile, setIsApplyingFile] = useState(false);

    const handleFileChange = (file: File | null) => {
        if (!file) {
            setSelectedFile(null);
            setFileError('');
            return;
        }

        if (!isImageFile(file)) {
            setSelectedFile(null);
            setFileError('Please choose an image file.');
            return;
        }

        setSelectedFile(file);
        setFileError('');
    };

    const handleApplyDecal = async (kind: 'logo' | 'full') => {
        if (!selectedFile) {
            setFileError('Choose a file before applying it.');
            return;
        }

        try {
            setIsApplyingFile(true);
            setFileError('');

            const imageDataUrl = await readFileAsDataUrl(selectedFile);
            applyDecal(kind, imageDataUrl);
        } catch (error) {
            setFileError(
                error instanceof Error
                    ? error.message
                    : 'Unable to apply this file.',
            );
        } finally {
            setIsApplyingFile(false);
        }
    };

    return (
        <AnimatePresence>
            {!snapshot.intro && (
                <>
                    <motion.div
                        className="absolute top-1/2 left-4 z-30 -translate-y-1/2 md:left-6"
                        {...slideAnimation('left')}
                    >
                        <div className="relative flex items-center">
                            <div className="flex w-16 flex-col items-center gap-4 rounded-2xl border border-white/50 bg-white/30 px-2 py-4 shadow-[0_18px_48px_rgba(31,38,135,0.12)] backdrop-blur">
                                {EDITOR_TABS.map((tab) => (
                                    <IconTab
                                        key={tab.name}
                                        icon={tab.icon}
                                        label={tab.label}
                                        isActive={activeEditorTab === tab.name}
                                        onClick={() =>
                                            setActiveEditorTab((currentTab) =>
                                                currentTab === tab.name
                                                    ? 'colorpicker'
                                                    : tab.name,
                                            )
                                        }
                                    />
                                ))}
                            </div>

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
                        {FILTER_TABS.map((tab) => (
                            <IconTab
                                key={tab.name}
                                icon={tab.icon}
                                label={tab.label}
                                isFilterTab
                                isActive={
                                    tab.name === 'logoShirt'
                                        ? snapshot.isLogoTexture
                                        : snapshot.isFullTexture
                                }
                                accentColor={snapshot.color}
                                onClick={() => {
                                    if (tab.name === 'logoShirt') {
                                        toggleLogoTexture();
                                        return;
                                    }

                                    toggleFullTexture();
                                }}
                            />
                        ))}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

export default CustomizerPanel;
