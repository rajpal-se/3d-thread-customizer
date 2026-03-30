import { SketchPicker, type ColorResult } from 'react-color';
import { useSnapshot } from 'valtio';

import { setColor } from '../../../store/customizerActions';
import customizerStore from '../../../store/customizerStore';

function ColorPickerPanel() {
    const snapshot = useSnapshot(customizerStore);

    const handleColorChange = (color: ColorResult) => {
        setColor(color.hex);
    };

    return (
        <div className="absolute left-full ml-3">
            <SketchPicker
                color={snapshot.color}
                disableAlpha
                onChange={handleColorChange}
            />
        </div>
    );
}

export default ColorPickerPanel;
