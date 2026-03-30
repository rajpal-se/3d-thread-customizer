import type { ChangeEvent } from 'react';

import Button from '../../../components/ui/Button';
import type { DecalKind } from '../../../types/customizer';

interface FilePickerPanelProps {
    file: File | null;
    errorMessage: string;
    isApplying: boolean;
    onApply: (kind: DecalKind) => void | Promise<void>;
    onFileChange: (file: File | null) => void;
}

function FilePickerPanel({
    errorMessage,
    file,
    isApplying,
    onApply,
    onFileChange,
}: FilePickerPanelProps) {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onFileChange(event.target.files?.[0] ?? null);
    };

    return (
        <div className="absolute left-full ml-3 flex h-[220px] w-[240px] flex-col rounded-2xl border border-white/50 bg-white/75 p-3 shadow-[0_16px_40px_rgba(31,38,135,0.08)] backdrop-blur">
            <div className="flex-1 rounded-xl border border-dashed border-stone-300 bg-stone-50 p-3">
                <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    onChange={handleChange}
                />

                <label
                    htmlFor="file-upload"
                    className="inline-flex cursor-pointer rounded-xl border border-stone-300 bg-white px-3 py-2 text-xs font-semibold tracking-[0.16em] text-stone-700 uppercase transition hover:bg-stone-100"
                >
                    Upload File
                </label>

                <p className="mt-4 text-sm font-medium text-stone-800">
                    {file ? file.name : 'No file selected'}
                </p>

                <p className="mt-2 text-xs leading-5 text-stone-500">
                    PNG, JPG, or WEBP image files work best for decals.
                </p>

                {errorMessage ? (
                    <p className="mt-3 text-xs leading-5 text-red-600">
                        {errorMessage}
                    </p>
                ) : null}
            </div>

            <div className="mt-3 flex gap-3">
                <Button
                    title={isApplying ? 'Applying...' : 'Logo'}
                    className="flex-1"
                    disabled={!file || isApplying}
                    onClick={() => onApply('logo')}
                />
                <Button
                    title={isApplying ? 'Applying...' : 'Full'}
                    className="flex-1"
                    disabled={!file || isApplying}
                    variant="outline"
                    onClick={() => onApply('full')}
                />
            </div>
        </div>
    );
}

export default FilePickerPanel;
