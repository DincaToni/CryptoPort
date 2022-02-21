import { connect } from 'react-redux'
import { getTransactions } from '../actions/transactionsActions'
import PropTypes from 'prop-types'
import { useEffect } from 'react'

const TransactionList = (props) => {

    useEffect(() => {
        props.getTransactions()
    }, [])
    
    const { transactions } = props.transaction
    console.log(transactions)
    
    return (
        <>
            <button>Register Transaction</button>
            
                {transactions.map(({ coin, date, units, pricePerUnit }) => { 
                    <h1>h</h1>
                })}
            
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

export default connect(mapStateToProps, { getTransactions })(TransactionList)