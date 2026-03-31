import { proxy } from 'valtio';

import type { CustomizerState } from '../types/customizer';

export const initialCustomizerState: CustomizerState = {
    intro: true,
    color: '#D94E28',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: '/3dtc-logo-v0.png',
    fullDecal: '/3dtc-logo-v0.png',
};

const customizerStore = proxy<CustomizerState>({
    ...initialCustomizerState,
});

export default customizerStore;
