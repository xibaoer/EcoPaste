import type { ClipboardStore } from "@/types/store";
import proxyWithPersist from "valtio-persist";

export const clipboardStore = proxyWithPersist<ClipboardStore>({
	name: "clipboard",
	initialState: {},
	persistStrategies,
	version: 0,
	migrations: {},
	getStorage,
});
