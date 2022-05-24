import { useState } from "react"
import { connect } from "react-redux"
import Modal from "./Modal"
import { addTransaction } from "../actions/transactionsActions"

const TransactionModal = () => {
    const [modal, setModal] = useState(false)

    const toggleTrue = () => {
        setModal(true)
    }

    return (
        <>
            <button onClick={toggleTrue}>Register Transaction</button>
            {modal && <Modal activation={setModal}/>}
        </>
    )

}

export default connect()(TransactionModal)