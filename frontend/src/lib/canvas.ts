const CUSTOMIZER_CANVAS_SELECTOR = '#customizer-canvas';

const resolveCanvasElement = (): HTMLCanvasElement | null => {
    const canvasRoot = document.querySelector(CUSTOMIZER_CANVAS_SELECTOR);

    if (!canvasRoot) {
        return null;
    }

    if (canvasRoot instanceof HTMLCanvasElement) {
        return canvasRoot;
    }

    return canvasRoot.querySelector('canvas');
};

export const downloadCanvasImage = (
    fileName = 'thread-customizer.png',
): void => {
    const canvas = resolveCanvasElement();

    if (!canvas) {
        throw new Error('The preview is not ready to download yet.');
    }

    if (typeof canvas.toDataURL !== 'function') {
        throw new Error('The preview canvas is not ready to export yet.');
    }

    const imageDataUrl = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');

    downloadLink.href = imageDataUrl;
    downloadLink.download = fileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
};
