import type {
    DecalKind,
    EditorTabName,
    FilterTabName,
} from '../../../types/customizer';

export interface EditorTabConfig {
    name: EditorTabName;
    icon: string;
    label: string;
}

export interface FilterTabConfig {
    name: FilterTabName;
    icon: string;
    label: string;
}

export interface DecalTypeConfig {
    stateProperty: 'logoDecal' | 'fullDecal';
    filterTab: FilterTabName;
}

export type DecalTypeMap = Record<DecalKind, DecalTypeConfig>;
