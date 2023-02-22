const regularFunction = function (param1, param2) {
       return param1 + param2;
     };
    
     const arrowFunction = (param1, param2) => param1 + param2;
    
    
     const arrowFunctionMultiParams = (param1, param2, param3) => {
       return param1 + param2 + param3;
     };
    
    
     const noParameters = () => "Hello world!";
    
     console.log(regularFunction(1,2));
     console.log(arrowFunction(2,3));
     console.log(arrowFunctionMultiParams(1,2,3));
     console.log(noParameters());