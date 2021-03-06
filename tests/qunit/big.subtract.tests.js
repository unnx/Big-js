module("subtract");

test("subtract(4, 36) = -32", 0, function() {
    var l, r, expect, result;
    
    l = new Big("4");
    r = new Big("36");
    expected = new Big("-32");
    result = normalize(subtract(l, r));
    deepEqual(
        result, 
        expected, 
        "subtract correctly subtracts larger number from smaller"
    );
});

test("subtract(4, 3.5) = 0.5", 0, function() {
    var l, r, expect, result;

    l = new Big("4");
    r = new Big("3.5");
    expected = new Big("0.5");
    result = normalize(subtract(l, r));
    deepEqual(result, expected, "subtract correctly subtracts fractional number from whole");
});

test("subtract(8.3, 3.5) = 4.8", 0, function() {        
    var l, r, expect, result;

    l = new Big("8.3");
    r = new Big("3.5");
    expected = new Big("4.8");
    result = normalize(subtract(l, r));
    deepEqual(result, expected, "subtract correctly subtracts real from real");
});

test("subtract(8.6, 8.2) = 0.4", 0, function() {        
    var l, r, expect, result;

    l = new Big("8.6");
    r = new Big("8.2");
    expected = new Big("0.4");
    result = normalize(subtract(l, r));
    deepEqual(result, expected, "subtract correctly subtracts near reals");
});

test("subtract(6.161, -853.721) = 859.882", 0, function() {    
    var l, r, expect, result;

    l = new Big(6.161);
    r = new Big(-853.721);
    expected = new Big(859.882);
    result = normalize(subtract(l, r));
    deepEqual(result, expected, "subtract correctly subtracts negative from positive");
    
    // l = new Big(-52.5631613);
    // r = new Big(680.514537350);
    // expected = new Big(-733.07769865);
    // result = normalize(subtract(l, r));
    // deepEqual(result, expected, "subtract correctly subtracts negative from negative");
});

test("subtract(-2.5, 2.1) = -4.6", 0, function() {    
    var l, r, expect, result;

    l = new Big(-2.5);
    r = new Big(2.1);
    expected = new Big(-4.6);
    result = normalize(subtract(l, r));
    deepEqual(result, expected, "subtract correctly subtracts positive from negative");
});

test("subtract(74.9032474, 74.57896593) = 0.32428147", 0, function() {    
    var l, r, expect, result;

    l = new Big("74.9032474");
    r = new Big("74.57896593");
    expected = new Big("0.32428147");
    result = l.minus(r);
    equal(result + "", "0.32428147", "subtract correctly subtracts nearby reals");
});

test("subtract(0.0, 10.0) = 0.32428147", 0, function() {    
    var l, r, expect, result;

    l = new Big(0);
    r = new Big(10);
    expected = new Big(-10.0);
    result = l.minus(r);
    equal(result + "", "-10", "subtract correctly subtracts 10 from \0");
});

test("subtractMantissae(m1, m2)", 0, function() {
    var l, r, expect, result;

    var m1, m2, expected, result;
    
    m1 = [ 8, 3 ];
    m2 = [ 3, 0 ];
    expected = [ 5, 3 ];
    result = subtractMantissae(m1, m2);
    deepEqual(result, expected, "subtractMantissae correctly subtracts simple mantissae without carry");
    
    m1 = [ 8, 3 ];
    m2 = [ 3, 5 ];
    expected = [ 4, 8 ];
    result = subtractMantissae(m1, m2);
    deepEqual(result, expected, "subtractMantissae correctly subtracts simple mantissae with carry");
    
    m1 = [ 8, 6 ];
    m2 = [ 8, 2 ];
    expected = [ 0, 4 ];
    result = subtractMantissae(m1, m2);
    deepEqual(result, expected, "subtractMantissae correctly subtracts near mantissae");
});
