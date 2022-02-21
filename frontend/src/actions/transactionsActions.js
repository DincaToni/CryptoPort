import { GET_TRANSACTIONS, ADD_TRANSACTIONS, DELTE_TRANSACTIONS } from "./types";

export const getTransactions = () =>{
    //console.log("smth")
    return {
        type: GET_TRANSACTIONS
    }
}