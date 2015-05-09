function c_a(a, b) {
    "use strict";
    var c,
        d,
        l_0,
        l_1,
        obj = {"difference": [], "same_elements": []};

        function trim(a) {
            var result;
            function p(v) {
                if (!!v.toString().match(/\(\*\)/g)) {
                    return false;
                }
                return true;
            }
            result = a.filter(p);
            return result;
        }

        function splice_it(k, l, m, n) {
            var i = 0,
                j,
                buffer = [];

            do {
                j = 0;
                do {
                    if (l[j] === k[i]) {
                        buffer.push(l[j]);
                        l.splice(j, 1, l[j] + " (*)");
                        k.splice(i, 1, l[i] + " (*)");
                    }
                    j++;
                } while (j < n);
                i++;
            } while (i < m);
            
            return {"difference": trim(k).concat(trim(l)), "same_elements": buffer};
        }
        
    if (Array.isArray(a) && Array.isArray(b)) {
        c = a.slice();
        d = b.slice();
        l_0 = c.length;
        l_1 = d.length;        
        
        if (l_0 >= l_1) {
            obj = splice_it(c, d, l_0, l_1);
        } else {
            obj = splice_it(d, c, l_1, l_0);
        }                
    }
    return obj;
}
