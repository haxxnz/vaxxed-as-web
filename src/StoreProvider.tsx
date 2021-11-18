import { configure } from "mobx";
import { Provider as MobxProvider, enableStaticRendering } from "mobx-react";
import uiStore from "./stores/uiStore";

const isBrowser = typeof window !== "undefined";

configure({
  useProxies: "always",
  enforceActions: "never",
  isolateGlobalState: true
});

enableStaticRendering(!isBrowser);

const StoreProvider = ({ element }) => {
  return <MobxProvider uiStore={uiStore}>{element}</MobxProvider>;
};

export default StoreProvider;
