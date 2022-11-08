// The namespace is a way which is used for logical grouping of functionalities.
// Unlike javascript, namespace are inbuit into typescript.
//NOTE- A namespace can span in multiple files and allow to concatenate each file using "-outFile" as they were all defined on one place. It makes the code easier to maintain.
var studentCalc;
(function (studentCalc) {
    function AnnualFeeCalc(feeAmount, term) {
        return feeAmount * term;
    }
    studentCalc.AnnualFeeCalc = AnnualFeeCalc;
})(studentCalc || (studentCalc = {}));
/// <reference path = "./studentCalc.ts"/>
let TotalFee = studentCalc.AnnualFeeCalc(2000, 2);
console.log(`Annual Fee - ${TotalFee}`);
