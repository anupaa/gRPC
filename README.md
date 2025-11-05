# 🧮 gRPC Calculator Example (Node.js)

A simple **gRPC-based Calculator** built with Node.js — demonstrating how two microservices can communicate efficiently using Remote Procedure Calls (RPC).

> ⚠️ **Note:**  
> This project is created **only for learning purposes.**  
> I’ve implemented a similar RPC communication between two microservices for my company in a production system.

---

## 🚀 Overview

This demo shows how to build a lightweight **gRPC client-server architecture** using:

- `@grpc/grpc-js`
- `@grpc/proto-loader`
- Protocol Buffers (`.proto`) for defining structured messages and RPC services.

The calculator exposes two RPCs:

- **Add** → adds two numbers
- **Divide** → divides two numbers (handles divide-by-zero gracefully)

---

## ✨ Features

✅ Fast, binary communication over HTTP/2  
✅ Strongly typed structure via Protocol Buffers  
✅ Clear separation of Client ↔ Server  
✅ Ready-to-extend for microservice use cases  
✅ Ideal for beginners learning gRPC concepts

---

## 📁 Folder Structure

gRPC/
├── calculator.proto # gRPC service + message definitions
├── index.js # gRPC Server implementation
├── client.js # gRPC Client calling the server
├── package.json # Dependencies and scripts
└── README.md # Project documentation (this file)
