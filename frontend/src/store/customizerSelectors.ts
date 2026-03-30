import type {
    ActiveFilterTabState,
    CustomizerState,
    DecalKind,
} from '../types/customizer';

import customizerStore from './customizerStore';

export const selectCustomizerState = (): CustomizerState => ({
    intro: customizerStore.intro,
    color: customizerStore.color,
    isLogoTexture: customizerStore.isLogoTexture,
    isFullTexture: customizerStore.isFullTexture,
    logoDecal: customizerStore.logoDecal,
    fullDecal: customizerStore.fullDecal,
});

export const selectIsIntro = (): boolean => customizerStore.intro;

export const selectBaseColor = (): string => customizerStore.color;

export const selectActiveFilterTabs = (): ActiveFilterTabState => ({
    logoShirt: customizerStore.isLogoTexture,
    stylishShirt: customizerStore.isFullTexture,
});

export const selectDecalSource = (kind: DecalKind): string =>
    kind === 'logo' ? customizerStore.logoDecal : customizerStore.fullDecal;
