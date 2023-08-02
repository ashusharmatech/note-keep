import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'payment',
    title: 'Payment',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'type',
            title: 'Type',
            type: 'reference',
            to: { type: 'category' },          
        }),
        defineField({
            name: 'paidBy',
            title: 'Paid By',
            type: 'reference',
            to: { type: 'person' },          
        }),
        defineField({
            name: 'amount',
            title: 'Amount',
            type: 'number',
        }),
        defineField({
            name: 'mainImage',
            title: 'Payment Screenshot',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'dateOfPayment',
            title: 'Date of Payment',
            type: 'date',
        }),
        defineField({
            name: 'remarks',
            title: 'Remarks',
            type: 'blockContent',
        }),
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection
            return { ...selection, subtitle: author && `by ${author}` }
        },
    },
})
