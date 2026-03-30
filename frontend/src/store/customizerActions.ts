import type { CustomizerState, DecalKind } from '../types/customizer';

import customizerStore, { initialCustomizerState } from './customizerStore';

const decalStatePropertyMap: Record<
    DecalKind,
    keyof Pick<CustomizerState, 'logoDecal' | 'fullDecal'>
> = {
    logo: 'logoDecal',
    full: 'fullDecal',
};

export const enterCustomizer = (): void => {
    customizerStore.intro = false;
};

export const exitCustomizer = (): void => {
    customizerStore.intro = true;
};

export const setColor = (color: string): void => {
    customizerStore.color = color;
};

export const setLogoDecal = (value: string): void => {
    customizerStore.logoDecal = value;
};

export const setFullDecal = (value: string): void => {
    customizerStore.fullDecal = value;
};

export const toggleLogoTexture = (value?: boolean): void => {
    customizerStore.isLogoTexture = value ?? !customizerStore.isLogoTexture;
};

export const toggleFullTexture = (value?: boolean): void => {
    customizerStore.isFullTexture = value ?? !customizerStore.isFullTexture;
};

export const applyDecal = (kind: DecalKind, value: string): void => {
    const targetProperty = decalStatePropertyMap[kind];

    customizerStore[targetProperty] = value;

    if (kind === 'logo') {
        customizerStore.isLogoTexture = true;
        return;
    }

    customizerStore.isFullTexture = true;
};

export const removeLogoDecal = (): void => {
    customizerStore.isLogoTexture = false;
};

export const removeFullDecal = (): void => {
    customizerStore.isFullTexture = false;
};

export const resetCustomizerState = (): void => {
    Object.assign(customizerStore, initialCustomizerState);
};
