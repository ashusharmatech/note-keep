import React, { useEffect, useState } from 'react';
import { getPayments } from '../SanityClient';
import { Box, Button, HStack, Table, Tbody, Td, Th, Thead, Tr, VStack } from '@chakra-ui/react';
import PaymentEdit from './PaymentEdit';

const Payments = () => {
    const [paymentList, setPaymentList] = useState([]);
    const [selectedPayment, setSelectedPayment] = useState(null);

    const fetchPayments = async () => {
        let fetchedPayments = await getPayments();
        setPaymentList(fetchedPayments);
    };

    // Function to handle edit button click
    const handleEditClick = (paymentId: any) => {
        setSelectedPayment(paymentId);
    };

    // Function to handle delete button click (You can implement this as per your requirement)
    const handleDeleteClick = (paymentId: any) => {
        // Handle delete operation here
    };



    useEffect(() => {
        fetchPayments();
    }, []);

    return (

        <HStack align="normal" spacing={4}>
            <Box bg='yellow.200'>
                {paymentList && <PaymentTable payments={paymentList} onEdit={handleEditClick} onDelete={handleDeleteClick} />}
            </Box>
            <div>
                {selectedPayment && <PaymentEdit paymentId={selectedPayment} onClose={() => setSelectedPayment(null)} />}
            </div>
        </HStack>
    );
};


interface PaymentTableProps {
    payments: any;
    onEdit: (payment: any) => void;
    onDelete: (paymentId: string) => void;
}

const PaymentTable: React.FC<PaymentTableProps> = ({ payments, onEdit, onDelete }) => {
    return (
        <Table variant="simple">
            <Thead>
                <Tr>
                    <Th>Title</Th>
                    <Th>Type</Th>
                    <Th>Paid By</Th>
                    <Th>Date of Payment</Th>
                    <Th>Amount</Th>
                    <Th>Actions</Th>
                </Tr>
            </Thead>
            <Tbody>
                {payments.map((payment) => (
                    <Tr key={payment._id}>
                        <Td>{payment.title}</Td>
                        <Td>{payment.type?._ref}</Td>
                        <Td>{payment.paidBy?._ref}</Td>
                        <Td>{new Date(payment.dateOfPayment).toLocaleDateString()}</Td>
                        <Td>{payment.amount}</Td>
                        <Td>
                            <Button colorScheme="blue" onClick={() => onEdit(payment._id)}>
                                Edit
                            </Button>
                            <Button colorScheme="red" onClick={() => onDelete(payment._id)}>
                                Delete
                            </Button>
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
};

export default Payments;
