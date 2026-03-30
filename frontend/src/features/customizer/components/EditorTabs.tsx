import IconTab from '../../../components/ui/IconTab';
import { EDITOR_TABS } from '../config/customizer.constants';
import type { EditorTabName } from '../../../types/customizer';

interface EditorTabsProps {
    activeEditorTab: EditorTabName;
    onTabChange: (tab: EditorTabName) => void;
}

function EditorTabs({ activeEditorTab, onTabChange }: EditorTabsProps) {
    return (
        <div className="flex w-16 flex-col items-center gap-4 rounded-2xl border border-white/50 bg-white/30 px-2 py-4 shadow-[0_18px_48px_rgba(31,38,135,0.12)] backdrop-blur">
            {EDITOR_TABS.map((tab) => (
                <IconTab
                    key={tab.name}
                    icon={tab.icon}
                    label={tab.label}
                    isActive={activeEditorTab === tab.name}
                    onClick={() => onTabChange(tab.name)}
                />
            ))}
        </div>
    );
}

export default EditorTabs;
