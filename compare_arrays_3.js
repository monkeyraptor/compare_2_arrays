var c_a = function (a, b) {
    "use strict";
    var c, d, obj;
    obj = {
        "difference": [],
        "same_elements": []
    };
    function trim(a) {
        var i = a.length;
        while (i >= 0) {
            if (a[i] === "_*deleted*_") {
                a.splice(i, 1);
            }
            i -= 1;
        }
        return a;
    }
    function process_it(k, l) {
        var same = [];
        l.forEach(function (v, i) {
            k.forEach(function (vv, ii) {
                if (v === vv) {
                    same.push(vv);
                    l.splice(i, 1, "_*deleted*_");
                    k.splice(ii, 1, "_*deleted*_");
                }
            });
        });
        return {
            "difference": trim(l.concat(k)),
            "same_elements": same
        };
    }
    if (Array.isArray(a) && Array.isArray(b)) {
        c = a.slice();
        d = b.slice();
        if (c.length >= d.length) {
            obj = process_it(c, d);
        } else {
            obj = process_it(d, c);
        }
    }
    return obj;
};
