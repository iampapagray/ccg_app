<template>
    <div class="bg-black pt-faq_t pb-25 px-faq_side" >
        <p class="font-mont font-extrabold text-white text-c_title leading-c_title text-center pb-8.5">FAQ</p>
        <V-accordion
            v-for="faq in faqs"
            :key="faq.question"
            class="mb-5"
        >
            <template #title>
                <span class="text-white font-nuni font-extrabold text-lg leading-faq_title">{{faq.question}}</span>
            </template>
            <template #content>
                <div v-for="answer in faq.answers" :key="answer.text">
                    <span v-if="!answer.isLink" class="text-white font-mont font-normal text-base leading whitespace-pre-wrap">{{answer.text}}</span>
                    <a v-else :href="answer.text"  class="text-white font-mont text-base underline decoration-pink-500">{{answer.text}}</a>
                </div>
            </template>
        </V-accordion>
       
    </div>
</template>

<script>
export default {
    data(){
        return {
            faqs: [
                {
                    question: "What is CCGBTCONE?",
                    answer: "CCGBTCONE is a vintage collectible minted July 26th 2017 on the Bitcoin blockchain through the counterparty protocol. It’s also part of the Oasis Mining collection which consists of 66 different cards from different artists. It was used by Elon Musk on many important occasions.",
                    answers: [
                        {
                            text: "CCGBTCONE is a vintage collectible minted July 26th 2017 on the Bitcoin blockchain through the counterparty protocol. It’s also part of the Oasis Mining collection which consists of 66 different cards from different artists. It was used by Elon Musk on many important occasions.",
                            isLink: false
                        }
                    ],

                },
                {
                    question: "When was it used by Elon Musk (proof)?",
                    answer: ` <a>https://twitter.com/elonmusk/status/1054520588734058496?s=21</a>
                        https://twitter.com/elonmusk/status/1256353943765921792?s=21
                        https://web.archive.org/web/20210220005710/https://twitter.com/elonmusk
                        https://twitter.com/cz_binance/status/1054584958830800896
                        https://twitter.com/CynthiaMLummis/status/1362973764724531200
                    `,
                    answers: [
                        {
                            text: "https://twitter.com/elonmusk/status/1054520588734058496?s=21",
                            isLink: true,
                        },
                        {
                            text: "https://twitter.com/elonmusk/status/1256353943765921792?s=21",
                            isLink: true,
                        },
                        {
                            text: "https://web.archive.org/web/20210220005710/https://twitter.com/elonmusk",
                            isLink: true,
                        },
                        {
                            text: "https://twitter.com/cz_binance/status/1054584958830800896",
                            isLink: true,
                        },
                        {
                            text: "https://twitter.com/CynthiaMLummis/status/1362973764724531200",
                            isLink: true,
                        },
                    ]
                },
                {
                    question: "On which blockchain is the CCGBTCONE collectible located?",
                    answer: `On the Bitcoin blockchain through the counterparty protocol - https://counterparty.io/
                        And yes, NFT’s existed even prior to Ethereum in 2015 and before.
                        With the help of Emblem Vault, assets from other blockchains can be vaulted and traded on ethereum, on marketplaces like Opensea, LooksRare and others. More on that below.
                    `,
                    answers: [
                        {
                            text:`On the Bitcoin blockchain through the counterparty protocol - `, 
                            isLink: false,
                        },
                        {
                            text: "https://counterparty.io/",
                            isLink: true,
                        },
                        {
                            text: "And yes, NFT’s existed even prior to Ethereum in 2015 and before. With the help of Emblem Vault, assets from other blockchains can be vaulted and traded on ethereum, on marketplaces like Opensea, LooksRare and others. More on that below.",
                            isLink: false,
                        }
                    ]
                },
                {
                    question: "What is counterparty and how to use it?",
                    answer: `https://en.wikipedia.org/wiki/Counterparty_(platform)
                        https://coincentral.com/counterparty-xcp-beginners-guide/
                        https://counterparty.io/docs/faq/

                        Please follow https://twitter.com/CounterpartyXCP and join their socials in order to learn more
                    `,
                    answers: [
                        {text: "https://en.wikipedia.org/wiki/Counterparty_(platform)",isLink: true},
                        {text: "https://coincentral.com/counterparty-xcp-beginners-guide/",isLink: true},
                        {text: "https://counterparty.io/docs/faq/",isLink: true},
                        {text: "Please follow https://twitter.com/CounterpartyXCP and join their socials in order to learn more",isLink: false},
                    ]
                },
                {
                    question: "What is emblem vault and how to use it?",
                    answer: `https://desktopcommando.medium.com/what-is-emblemvault-14aaaff92a20
                        https://desktopcommando.medium.com/how-to-use-emblemvault-14ba241ca42a
                        https://desktopcommando.medium.com/trading-xcp-nfts-on-ethereum-matic-networks-87a89101fd58

                        Please follow https://twitter.com/EmblemVault and join their socials in order to learn more
                    `,
                    answers: [
                        {
                            text: "https://desktopcommando.medium.com/what-is-emblemvault-14aaaff92a20",
                            isLink: true,
                        },
                        {
                            text: "https://desktopcommando.medium.com/how-to-use-emblemvault-14ba241ca42a",
                            isLink: true,
                        },
                        {
                            text: "https://desktopcommando.medium.com/trading-xcp-nfts-on-ethereum-matic-networks-87a89101fd58",
                            isLink: true,
                        },
                        {text: "Please follow https://twitter.com/EmblemVault and join their socials in order to learn more", isLink: false},
                    ]
                },
                {
                    question: "How to buy?",
                    answer: `Before you do that, please make sure to familiarise yourself with how emblem vault and counterparty works.  
                        There are two ways of buying CCGBTCONE : 
                        1) On marketplaces like Opensea through Emblem Vault : 

                        https://opensea.io/collection/emblem-vault?search[sortAscending]=true&search[sortBy]=PRICE&search[stringTraits][0][name]=Oasis%20Mining&search[stringTraits][0][values][0]=CCGBTCONE

                        Make sure to always properly check the vault before buying : 

                        https://desktopcommando.medium.com/a-buyers-guide-to-using-emblem-vault-on-opensea-io-bb0d0a206c1a

                        2) Directly on Counterparty XCP through dispensers or dex orders, if available. 
                    `,
                    answers: [
                        {
                            text: `Before you do that, please make sure to familiarise yourself with how emblem vault and counterparty works. There are two ways of buying CCGBTCONE : 
                            \n1) On marketplaces like Opensea through Emblem Vault : `,
                            isLink: false,
                        },
                        {text: "https://opensea.io/collection/emblem-vault?search[sortAscending]=true&search[sortBy]=PRICE&search[stringTraits][0][name]=Oasis%20Mining&search[stringTraits][0][values][0]=CCGBTCONE", isLink:true },
                        {text: "\nMake sure to always properly check the vault before buying :", isLink: false},
                        {text: "https://desktopcommando.medium.com/a-buyers-guide-to-using-emblem-vault-on-opensea-io-bb0d0a206c1a", isLink:true},
                        {text: "\n2) Directly on Counterparty XCP through dispensers or dex orders, if available.", isLink:false}
                    ]
                },
            ]
        }
    }
}
</script>