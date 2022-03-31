const { bmicalc} = require('./bmi-calc');

// test.each([[20,7,0],[40,1,40],[20,1,20]])(
//     '%i  weight / %i  height, Your BMI is %i ',(a,b,expected)=>{
//         expect(bmicalc(a,b)).toBe(expected);
//     },
// );
test('67,1.65', ()=>{
    expect(bmicalc(67,1.65)).toBe("Normal");
});
test('45,1.80', ()=>{
    expect(bmicalc(45,1.80)).toBe("Underweight");
});
test('67,1.40', ()=>{
    expect(bmicalc(67,1.40)).toBe("Obese");
});
test('67,1.50', ()=>{
    expect(bmicalc(67,1.50)).toBe("Overweight");
});