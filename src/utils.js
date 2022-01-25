function Storage() {
    this.save = (key, value) => {
        window.sessionStorage.setItem(key, value);
        window.localStorage.setItem(key, value)

    }
    this.get = (key) => {
        if (window.sessionStorage.getItem(key) !== null) {
            return window.sessionStorage.getItem(key)
        }
        return window.localStorage.getItem(key)
    }
    this.clear = () => {
        window.sessionStorage.clear()
        window.localStorage.clear()
    }
    this.storageAvailable = (type) => {
        var storage;
        try {
            storage = window[type];
            var x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }
        catch (e) {
            return e instanceof DOMException && (
                // Firefox를 제외한 모든 브라우저
                e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // 코드가 존재하지 않을 수도 있기 떄문에 이름 필드도 확인합니다.
                // Firefox를 제외한 모든 브라우저
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                // 이미 저장된 것이있는 경우에만 QuotaExceededError를 확인하십시오.
                (storage && storage.length !== 0);
        }
    }
}

// if (storageAvailable('localStorage')) {
// 	// 야호! 우리는 localStorage를 사용할 수 있습니다.
// }
// else {
// 	// 슬픈 소식, localStorage를 사용할 수 없습니다.
// }
// storageAvailable('sessionStorage')