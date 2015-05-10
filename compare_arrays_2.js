var c_a = function (a, b) {
    "use strict";
    var c,
        d,
        obj = {"difference": [], "same_elements": []},
        trim = function (a) {
            var result;
            function p(v) {
                var thingy = 1;
                if (!!v.toString().match(/\(\*\)/g)) {
                    thingy = 0;
                }
                return thingy;
            }
            result = a.filter(p);
            return result;
        },
        splice_it = function (k, l) {
            var buffer = [],
                result;
            l.forEach(function (outer_value, outer_index) {
                k.forEach(function (inner_value, inner_index) {
                    if (outer_value === inner_value) {
                        buffer.push(inner_value);
                        l.splice(inner_index, 1, inner_value + " (*)");
                        k.splice(outer_index, 1, outer_value + " (*)");
                    }
                });
            });
            result = {"difference": trim(k).concat(trim(l)), "same_elements": buffer};
            return result;
        };

    if (Array.isArray(a) && Array.isArray(b)) {
        c = a.slice();
        d = b.slice();
        if (c.length >= d.length) {
            obj = splice_it(c, d);
        } else {
            obj = splice_it(d, c);
        }                
    }
    return obj;
};
