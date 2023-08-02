import { useEffect, useState } from 'react'
import {
    Box,
    Button,
    Heading,
    Flex,
    FormControl,
    FormLabel,
    Input,
} from '@chakra-ui/react'

import { getPaymentById } from '../SanityClient';

const PaymentEdit = ({ paymentId, onClose }) => {
    const [payment, setPayment] = useState({});

    const getPaymentDetail = async () => {
        let fetchedPayment = await getPaymentById(paymentId);
        setPayment(fetchedPayment);
    };

    useEffect(() => {
        getPaymentDetail();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPayment((prevPayment) => ({
            ...prevPayment,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your code here to handle form submission
        console.log('Form data submitted:', payment);
    };

    return (
        <>
            <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                {JSON.stringify(payment)}
            </Heading>
            <form onSubmit={handleSubmit}>
                <Flex>
                    <FormControl mr="5%">
                        <FormLabel htmlFor="dateOfPayment" fontWeight={'normal'}>
                            Date of Payment
                        </FormLabel>
                        <Input
                            id="dateOfPayment"
                            type="date"
                            name="dateOfPayment"
                            value={payment.dateOfPayment || ''}
                            onChange={handleChange}
                        />
                    </FormControl>
                </Flex>
                <Flex>

                    <FormControl>
                        <FormLabel htmlFor="title" fontWeight={'normal'}>
                            Title
                        </FormLabel>
                        <Input
                            id="title"
                            type="text"
                            name="title"
                            value={payment.title || ''}
                            onChange={handleChange}
                        />
                    </FormControl>
                </Flex>
                <Flex>
                    <FormControl mr="5%">
                        <FormLabel htmlFor="amount" fontWeight={'normal'}>
                            Type
                        </FormLabel>
                        <Input
                            id="Type"
                            type="text"
                            name="type"
                            value={payment.type?.title || ''}
                            onChange={handleChange}
                        />
                    </FormControl>
                </Flex>

                <Flex>
                    <FormControl mr="5%">
                        <FormLabel htmlFor="amount" fontWeight={'normal'}>
                            Amount
                        </FormLabel>
                        <Input
                            id="amount"
                            type="number"
                            name="amount"
                            value={payment.amount || ''}
                            onChange={handleChange}
                        />
                    </FormControl>
                </Flex>
                <Flex>

                    <FormControl>
                        <FormLabel htmlFor="image" fontWeight={'normal'}>
                            Image
                        </FormLabel>
                        {/* Add your image input component here */}
                    </FormControl>
                </Flex>

                <FormControl mt="5%">
                    <FormLabel htmlFor="paidBy" fontWeight={'normal'}>
                        Paid By
                    </FormLabel>
                    <Input
                            id="paidBy"
                            type="text"
                            name="paidBy"
                            value={payment.paidBy?.name || ''}
                            onChange={handleChange}
                        />
                </FormControl>

                <Button type="submit" mt="5%">
                    Submit
                </Button>
            </form>
        </>
    );
};

export default PaymentEdit;
