import StoreProvider from "./src/StoreProvider";
import "./src/styles/tailwind.css";

const onInitialClientRender = () => {
  window.addEventListener(
    "popstate",
    () => (window.location.href = window.location.href)
  );
};

const wrapRootElement = StoreProvider;

const onServiceWorkerUpdateFound = () => {
  window.swUpdate = true;
};

const onServiceWorkerUpdateReady = async () => {
  window.dispatchEvent(new Event("resize"));
  if (caches) {
    await caches
      .keys()
      .then(async names => {
        await Promise.all(names.map(name => caches.delete(name)));
      })
      .catch(console.log);
  }
  if (typeof window.swUpdate !== "undefined" && window.swUpdate) {
    window.location.reload(true);
  }
};

export {
  onInitialClientRender,
  onServiceWorkerUpdateFound,
  onServiceWorkerUpdateReady,
  wrapRootElement
};
