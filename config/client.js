require('dotenv').config();

const path = require('path');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const SERVER_URI = process.env.SERVER_URI;
const PROTO_PATH = path.join(__dirname, '../protos/book.proto');

const loadProto = protoLoader.loadSync(
        PROTO_PATH, 
        {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true
        }
    );
const bookProto = grpc.loadPackageDefinition(loadProto);
const client = new bookProto.book.BookService(
    SERVER_URI, 
    grpc.credentials.createInsecure()
);

module.exports = client;