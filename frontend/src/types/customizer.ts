export type DecalKind = 'logo' | 'full';

export type EditorTabName = 'colorpicker' | 'filepicker';

export type FilterTabName = 'logoShirt' | 'stylishShirt';

export interface ActiveFilterTabState {
    logoShirt: boolean;
    stylishShirt: boolean;
}

export interface CustomizerState {
    intro: boolean;
    color: string;
    isLogoTexture: boolean;
    isFullTexture: boolean;
    logoDecal: string;
    fullDecal: string;
}
