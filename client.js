import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
import express, { response } from "express";

const PROTO_PATH = "./calculator.proto";
const PackageDefinition = protoLoader.loadSync(PROTO_PATH);
const calculatorProto = grpc.loadPackageDefinition(PackageDefinition).calculator;

// Now lets create the client

const CalculatorClient = new calculatorProto.Calculator(
    "localhost:50051",
    grpc.credentials.createInsecure()
);

const app = express();

app.get("/add", (req, res) => {
    try {
        CalculatorClient.Add({ num1: 25, num2: 50 }, (err, response) => {
            if (err) return res.status(500).send(err.message);
            res.send(response);
        })
    } catch (error) {
        console.log("error:", error)
    }
})

app.get("/divide", (req, res) => {
    try {
        CalculatorClient.Divide({ num1: 25, num2: 2 }, (err, response) => {
            if (err) return res.status(500).send(err.message);
            res.send(response);
        })
    } catch (error) {
        console.log("error:", error)
    }
})

app.listen(3002, () => {
    console.log("Client api's running on port 3002")
})