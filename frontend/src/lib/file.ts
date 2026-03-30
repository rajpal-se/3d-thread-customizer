const IMAGE_MIME_TYPE_PREFIX = 'image/';

export const isImageFile = (file: File | null | undefined): file is File => {
    if (!file) {
        return false;
    }

    return file.type.startsWith(IMAGE_MIME_TYPE_PREFIX);
};

export const readFileAsDataUrl = (file: File): Promise<string> => {
    if (!isImageFile(file)) {
        return Promise.reject(new Error('Only image uploads are supported.'));
    }

    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();

        fileReader.onerror = () => {
            reject(new Error('Unable to read the selected file.'));
        };

        fileReader.onload = () => {
            if (typeof fileReader.result !== 'string') {
                reject(new Error('Unexpected file result format.'));
                return;
            }

            resolve(fileReader.result);
        };

        fileReader.readAsDataURL(file);
    });
};
