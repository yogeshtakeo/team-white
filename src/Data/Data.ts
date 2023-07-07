import React from 'react'
import img1 from '../../src/assets/Screenshot (1006).png'

const Data = () => {
    const dataLists=[
        {
            title:'Routing Number',
            text:'The ABA Routing Number was developed by the American Bankers Association in 1910. It identifies the specific financial institution responsible for the payment of a negotiable instrument: Originally designed to identify only check processing endpoints, it has evolved to designate participants in automated clearinghouses, electronic funds transfer and online banking. The ABA Routing Number has changed over the years to accommodate the Federal Reserve System, the advent of MICR, and the implementation of the Expedited Funds Availability Act and Check 21.',
            img: img1
        },
        {
            title:'Routing',
            text:'Routing is a fundamental concept in computer networking that involves the process of selecting the optimal path for data packets to travel from a source to a destination across a network. It determines the most efficient path based on various factors such as network topology, congestion, and cost. Routing plays a vital role in the banking sector, facilitating seamless transaction processing and enhancing operational efficiency. Efficient routing ensures that customer transactions are directed to the appropriate banking channels, such as ATMs, branches, online banking platforms, or mobile applications. This article explores the significance of routing in banking operations and highlights strategies to optimize routing for improved customer experience and streamlined banking processes.'
            
        },
        {
            title:'Referrals',
            text:'In the context of banks, referrals refer to the practice of recommending a bank or its services to others. Banks often rely on word-of-mouth marketing and customer referrals as a way to attract new customers and expand their customer base.'
            
        },
        {
            title:'Credit Cards',
            text:'Credit cards are a type of payment card that allows users to borrow money from a financial institution, typically a bank, to make purchases or access funds. They are widely accepted by merchants worldwide and offer a convenient and secure way to make transactions. Credit cards have become an integral part of the modern financial landscape, offering convenience and flexibility in making purchases, accessing credit, and managing personal finances. This article provides a comprehensive overview of credit cards, highlighting their key features, benefits, and guidelines for responsible usage. Referrals have long been recognized as a powerful tool for business growth and success. This article explores the significance of referrals, their impact on building trust, and strategies for leveraging referral marketing to expand your customer base and enhance your business.'

        },
        {
            title:'Customer Services',
            text:'Customer service refers to the support and assistance provided by a company or organization to its customers before, during, and after a purchase or interaction. It involves addressing customer inquiries, resolving issues, and ensuring a positive overall experience. Exceptional customer service is a key differentiator in todays competitive business landscape. This article explores the importance of customer service, its impact on customer satisfaction and loyalty, and provides strategies for delivering outstanding customer experiences.'
        }
    ]
    return dataLists
 
}

export default Data