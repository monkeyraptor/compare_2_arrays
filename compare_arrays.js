function c_a(a, b) {
    "use strict";
    var c, //array 1 clone
        d, //array 2 clone
        l_0, //array length
        l_1, //array length
        obj = {};
        
        function trim(a) {            
            var i = 0,
                l = a.length,
                buffer = [];
                
            for (i; i < l; i++) {
                if (!a[i].toString().match("(deleted)")) {
                    buffer.push(a[i]);
                }
            }
            return buffer;
        }
        
        function splice_it(k, l, m, n) {
            var i = 0,
                j,                
                buffer = [];
                
            for (i; i < m; i++) {
                j = 0;
                for (j; j < n; j++) {         
                    if (l[j] === k[i]) {
                        buffer.push(l[j]);
                        l.splice(j, 1, j + " (deleted)");
                        k.splice(i, 1, i + " (deleted)");
                    }
                }
            }
            
            return {
                        "difference": trim(k).concat(trim(l)), 
                        "same_elements": buffer
                    };
        }
        
    if (!!a && !!b) {        
        c = a.slice(); //clone array 1
        d = b.slice(); //clone array 2
        l_0 = c.length; //array 1 length
        l_1 = d.length; //array 2 length
        
        //Switch reference. The longest length is the reference.
        if (c.length >= d.length) {
            obj = splice_it(c, d, l_0, l_1);              
        } else {
            obj = splice_it(d, c, l_1, l_0);
        }                
    } else {
        obj = "ERROR ARRAY INPUT";
    }
    return obj;
}
