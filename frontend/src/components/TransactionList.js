import { connect } from 'react-redux'
import { getTransactions, deleteTransaction } from '../actions/transactionsActions'
import PropTypes from 'prop-types'
import { useEffect } from 'react'

const TransactionList = (props) => {

    useEffect(() => {
        props.getTransactions()
    }, [])

    const { transactions } = props.transaction

    const onDeleteClick = (id) =>{
        props.deleteTransaction(id)
        console.log("been pressed")
    }

    return (
        <>
            <table>
                {transactions.map(({id, coin, date, units, pricePerUnit }) => {
                    return (
                        <>
                            <tr>
                                <button onClick={onDeleteClick.bind(this, id)}>delete</button>
                                <td>{coin}</td>
                                <td>{date}</td>
                                <td>{units}</td>
                                <td>{pricePerUnit}</td>
                            </tr>
                        </>)
                })}
            </table>
        </>
    )
}

TransactionList.propTypes = {
    getTransactions: PropTypes.func.isRequired,
    transaction: PropTypes.object.isRequired
}

const mapStateToProps = (state) => (
    { transaction: state.transaction }
)

export default connect(mapStateToProps, { getTransactions,deleteTransaction })(TransactionList)