
function TLocalStorage(name) {
    var self = this;
    self.name = String(name);

    var StorageH = {};

    // getting ready to work with Storage
    self.Reset = function() {
        if(name) {StorageH = JSON.parse(window.localStorage.getItem(name));}
        else if(!name) {StorageH = {}; }
        return StorageH;
    };

    // adding value
    self.AddValue = function(K,V) {
        StorageH[K]=V;
        // pack StorageH to JSON and push to LS
        window.localStorage.setItem(name, JSON.stringify(StorageH));
    };

    // delete value
    self.DeleteValue = function(K) {
        console.log(K in StorageH);
        if((K in StorageH)==true) {
            delete StorageH[K];
            // pack StorageH to JSON and push to LS
            window.localStorage.setItem(name, JSON.stringify(StorageH));
            return true;
        }
        else {return false;}
    };

    self.GetValue = function(K) {
        return StorageH[K];
    };

    self.GetKeys = function() {
        return Object.keys(StorageH)
    }

}