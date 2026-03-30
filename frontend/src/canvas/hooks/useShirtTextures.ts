import { useTexture } from '@react-three/drei';
import { useMemo } from 'react';

interface ShirtTextureSources {
    logoDecal: string;
    fullDecal: string;
}

function useShirtTextures({ fullDecal, logoDecal }: ShirtTextureSources) {
    const logoTexture = useTexture(logoDecal);
    const fullTexture = useTexture(fullDecal);

    return useMemo(
        () => ({
            fullTexture,
            logoTexture,
        }),
        [fullTexture, logoTexture],
    );
}

export default useShirtTextures;
