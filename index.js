import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

const PROTO_PATH = "./calculator.proto";
const PackageDefinition = protoLoader.loadSync(PROTO_PATH);
const calculatorProto = grpc.loadPackageDefinition(PackageDefinition).calculator;
const calculatorService = calculatorProto.Calculator.service;

// Lets define the server
const calculatorServer = new grpc.Server();

calculatorServer.addService(calculatorService, {
    Add: (call, callback) => {
        const { num1, num2 } = call.request;
        const result = num1 + num2;
        callback(null, { results: result, message: `Added ${num1} + ${num2}` })
    },
    Divide: (call, callback) => {
        const { num1, num2 } = call.request;
        if (num2 === 0) {
            callback(null, { result: 0, message: "Cannot divide by zero." })
        } else {
            const result = num1 / num2;
            callback(null, { results: result, message: `Divided ${num1} / ${num2}` })
        }
    }
});

calculatorServer.bindAsync("0.0.0.0:50051", grpc.ServerCredentials.createInsecure(), () => {
    console.log("gRPC Calculator Server is running on port 50061");
    calculatorServer.start();
})