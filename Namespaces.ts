// The namespace is a way which is used for logical grouping of functionalities.
// Unlike javascript, namespace are inbuit into typescript.

//NOTE- A namespace can span in multiple files and allow to concatenate each file using "-outFile" as they were all defined on one place. It makes the code easier to maintain.
namespace studentCalc {
    export function AnnualFeeCalc(feeAmount : number, term : number){
        return feeAmount*term;
    }
}
/// <reference path = "./studentCalc.ts"/>
let TotalFee = studentCalc.AnnualFeeCalc(2000,2);
console.log(`Annual Fee - ${TotalFee}`);

// tsc --target es6 Namespaces.ts
//And
// tsc --target es6 Namespaces.ts --outfile out.js
//node ./out.js