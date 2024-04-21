export const checkOnline = (callback) => {
    let status = navigator.onLine;

    const onlineHandler = () => {
        status = true;
        callback(true);
    };

    const offlineHandler = () => {
        status = false;
        callback(false);
    };

    window.addEventListener('online', onlineHandler);
    window.addEventListener('offline', offlineHandler);
    callback(status);

    return () => {
        window.removeEventListener('online', onlineHandler);
        window.removeEventListener('offline', offlineHandler);
    };
};
