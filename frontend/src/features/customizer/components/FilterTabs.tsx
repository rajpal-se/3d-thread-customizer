import IconTab from '../../../components/ui/IconTab';
import { FILTER_TABS } from '../config/customizer.constants';

interface FilterTabsProps {
    accentColor: string;
    isFullTexture: boolean;
    isLogoTexture: boolean;
    onToggleFullTexture: () => void;
    onToggleLogoTexture: () => void;
}

function FilterTabs({
    accentColor,
    isFullTexture,
    isLogoTexture,
    onToggleFullTexture,
    onToggleLogoTexture,
}: FilterTabsProps) {
    return (
        <>
            {FILTER_TABS.map((tab) => (
                <IconTab
                    key={tab.name}
                    icon={tab.icon}
                    label={tab.label}
                    isFilterTab
                    isActive={
                        tab.name === 'logoShirt' ? isLogoTexture : isFullTexture
                    }
                    accentColor={accentColor}
                    onClick={() => {
                        if (tab.name === 'logoShirt') {
                            onToggleLogoTexture();
                            return;
                        }

                        onToggleFullTexture();
                    }}
                />
            ))}
        </>
    );
}

export default FilterTabs;
