import { useState } from 'react';

import type { DecalKind, EditorTabName } from '../../../types/customizer';
import { downloadCanvasImage } from '../../../lib/canvas';
import {
    applyDecal,
    removeFullDecal,
    removeLogoDecal,
    resetCustomizerState,
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
    const [downloadError, setDownloadError] = useState('');

    const handleTabChange = (tab: EditorTabName) => {
        setActiveEditorTab((currentTab) =>
            currentTab === tab ? 'colorpicker' : tab,
        );
    };

    const handleFileChange = (file: File | null) => {
        setDownloadError('');

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
            setDownloadError('');
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

    const handleDownload = () => {
        try {
            downloadCanvasImage();
            setDownloadError('');
        } catch (error) {
            setDownloadError(
                error instanceof Error
                    ? error.message
                    : 'Unable to download the current preview.',
            );
        }
    };

    const handleRemoveDecal = (kind: DecalKind) => {
        if (kind === 'logo') {
            removeLogoDecal();
        } else {
            removeFullDecal();
        }

        setFileError('');
        setDownloadError('');
    };

    const handleReset = () => {
        resetCustomizerState();
        setActiveEditorTab('colorpicker');
        setSelectedFile(null);
        setFileError('');
        setDownloadError('');
    };

    return {
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
    };
}

export default useCustomizerControls;
