import { useState } from 'react';

import type { DecalKind, EditorTabName } from '../../../types/customizer';
import {
    applyDecal,
    toggleFullTexture,
    toggleLogoTexture,
} from '../../../store/customizerActions';
import { isImageFile, readFileAsDataUrl } from '../../../lib/file';

function useCustomizerControls() {
    const [activeEditorTab, setActiveEditorTab] =
        useState<EditorTabName>('colorpicker');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [fileError, setFileError] = useState('');
    const [isApplyingFile, setIsApplyingFile] = useState(false);

    const handleTabChange = (tab: EditorTabName) => {
        setActiveEditorTab((currentTab) =>
            currentTab === tab ? 'colorpicker' : tab,
        );
    };

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

    const handleApplyDecal = async (kind: DecalKind) => {
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

    return {
        activeEditorTab,
        fileError,
        isApplyingFile,
        selectedFile,
        handleApplyDecal,
        handleFileChange,
        handleTabChange,
        toggleFullTexture,
        toggleLogoTexture,
    };
}

export default useCustomizerControls;
