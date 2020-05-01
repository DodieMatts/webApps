window.addDashes = function addDashes(f) {
    var r = /(\D+)/g, //regex to only accept digits globally
        first = '',
        mid = '',
        last4 = '';
    f.value = f.value.replace(r, '');
    first = f.value.substr(0, 3);//first subset of string
    mid = f.value.substr(3, 3);//second subset
    last4 = f.value.substr(6, 4);//last
    f.value = first + '-' + mid + '-' + last4;
}