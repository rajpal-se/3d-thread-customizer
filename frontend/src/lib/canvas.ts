const CUSTOMIZER_CANVAS_SELECTOR = '#customizer-canvas';

export const downloadCanvasImage = (
    fileName = 'thread-customizer.png',
): void => {
    const canvas = document.querySelector<HTMLCanvasElement>(
        CUSTOMIZER_CANVAS_SELECTOR,
    );

    if (!canvas) {
        throw new Error('The preview is not ready to download yet.');
    }

    const imageDataUrl = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');

    downloadLink.href = imageDataUrl;
    downloadLink.download = fileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
};
