import type { Key } from "@/components/ShortcutKey/keys";

export type Theme = "auto" | "light" | "dark";

export type TabTrigger = "click" | "hover";

export interface GlobalStore {
	theme?: Theme;
	isDark?: boolean;
	autoStart: boolean;
	tabTrigger: TabTrigger;
	wakeUpKey?: Key[];
	appInfo?: {
		name: string;
		version: string;
	};
}

export interface ClipboardStore {
	wakeUpKey?: Key[];
	enableSound?: boolean;
	capacity?: string;
}
