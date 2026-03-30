import type { GLTF } from 'three-stdlib';
import type { Mesh, MeshStandardMaterial } from 'three';

export type ShirtGLTFResult = GLTF & {
    nodes: {
        T_Shirt_male: Mesh;
    };
    materials: {
        lambert1: MeshStandardMaterial;
    };
};
