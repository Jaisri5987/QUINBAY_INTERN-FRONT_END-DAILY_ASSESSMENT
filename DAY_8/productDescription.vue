<template>
    <div>
       <h1> Hello , I am {{ product_details.name }} </h1>
       <p> Hurrah! Buy these product {{ product_details.name }},buy as soon as possible , which belongs to the {{ product_details.brand }} brand and with low price range of {{ product_details.priceDisplay }}</p>
       <center><p>{{ product_details.name }}</p></center>
        <img :src="getValue()"/> 
       <center>
        <p> {{ product_details.brand }}</p>
        <p>{{ product_details.priceDisplay  }}</p>
        <h1> BUY THIS PRODUCT !! ENJOY YOUR DAY.......</h1>
        <hr/>
        <p>
            This offer ("Offer") is provided to you by SBI Cards and Payment Services Limited (formerly known as “SBI Cards and Payment Services Private Limited”) (“SBICPSL”) and made available on the website, the mobile application and mobile site thereof . It is open to all legal residents of India holding a valid and current SBI/Tata Credit Card (“Cardholder”).

             All SBI/Tata Credit Cardholders excluding SBI/Tata Corporate Credit Card, Paytm and Cashback SBI Credit Card are covered under this Program(“Card”).

The offer is valid from 00:00 hrs 20th January 2023 to 23:59 hrs, 30th January, 2023. 

Under this Offer, any Cardholder who, during the Offer Duration, makes any purchase of an eligible product  and makes the payment using the Card, will be entitled to receive 10% Instant Discount as per the below table, provided the purchase value for such transaction (inclusive of taxes) is equivalent to or exceeds INR 2,500 for Grocery and INR 5,000 for other categories on a per transaction basis. Check Product page for offer eligibility
</p>
    
    </center>

       
       
    </div>
</template>
<script src="./js/productDescription.js">
</script>