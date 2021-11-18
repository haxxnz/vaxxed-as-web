import { useContext } from "react";
import { MobXProviderContext } from "mobx-react";

const useStores = () => useContext(MobXProviderContext);

export default useStores;
