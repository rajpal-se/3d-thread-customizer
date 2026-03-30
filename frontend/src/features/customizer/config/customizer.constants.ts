import type {
    DecalTypeMap,
    EditorTabConfig,
    FilterTabConfig,
} from '../model/customizer.types';

export const EDITOR_TABS: EditorTabConfig[] = [
    {
        name: 'colorpicker',
        icon: 'color',
        label: 'Color Picker',
    },
    {
        name: 'filepicker',
        icon: 'file',
        label: 'File Picker',
    },
];

export const FILTER_TABS: FilterTabConfig[] = [
    {
        name: 'logoShirt',
        icon: 'logo-shirt',
        label: 'Logo Shirt',
    },
    {
        name: 'stylishShirt',
        icon: 'stylish-shirt',
        label: 'Stylish Shirt',
    },
];

export const DECAL_TYPES: DecalTypeMap = {
    logo: {
        stateProperty: 'logoDecal',
        filterTab: 'logoShirt',
    },
    full: {
        stateProperty: 'fullDecal',
        filterTab: 'stylishShirt',
    },
};
