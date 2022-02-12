<template>
    <div class="bg-black px-4 lg:px-40 pt-25 flex flex-col items-center">
        <p class="text-white font-mont font-extrabold text-2xl lg:text-c_title leading-c_title">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-light-orange to-dark-orange">CCGBTCONE</span> IN THE NEWS
        </p>
        <p class="text-white font-nuni font-semibold text-base leading-c_body text-center pt-2 lg:pt-4">
            CCGBTCONE has been featured in well-known online publications due to its historical impact and significance. 
            These articles clearly depict the great potential of this NFT collection as a historical piece as well as Elon’s interests in it over the years.
        </p>

        <div class="grid grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-16 mt-14">
            <div v-for="(news, ind) in newsLogos" :key="news.url">
                <img 
                    :src="news.src"
                    class="cursor-pointer"
                    :class="[news.ht, ind % 4 == 0 ? 'align-left': 'mx-auto']"
                    @click="goto(news.url)"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            newsLogos: [
                {src: require("@/assets/images/coindesk.svg"), ht: "h-10",  url: "https://www.coindesk.com/markets/2018/10/23/elon-musk-sparks-speculation-with-cryptic-crypto-tweet/"},
                {src: require("@/assets/images/forbes.svg"), ht: "h-12",  url: "https://www.forbes.com/sites/billybambrough/2018/10/23/elon-musk-mocks-bitcoin-security-and-scams-with-tongue-in-cheek-tweet/"},
                {src: require("@/assets/images/yahoo.svg"), ht: "h-12",  url: "https://au.finance.yahoo.com/news/elon-musk-sends-adult-themed-112320398.html"},
                {src: require("@/assets/images/market.svg"), ht: "h-12",  url: "https://www.marketwatch.com/story/lasereyes-meme-campaign-goes-viral-on-twitter-in-apparent-bid-to-double-bitcoin-price-to-100-000-11614107554"},
                {src: require("@/assets/images/utoday.svg"), ht: "h-8", url: "https://u.today/elon-musk-changes-his-twitter-profile-pic-to-bitcoin"},
                {src: require("@/assets/images/cnews1.svg"), ht: "h-8", url: "https://cryptonewsreview.com/elon-musks-twitter-account-locked-after-cryptocurrency-tweet/"},
                {src: require("@/assets/images/cnews2.svg"), ht: "h-8",  url: "https://cryptonews.net/en/news/bitcoin/472907/"},
                {src: require("@/assets/images/globe.svg"), ht: "h-8",  url: "https://www.cryptoglobe.com/latest/2018/10/elon-musk-tweets-about-bitcoin-gets-account-locked/"},
                {src: require("@/assets/images/gape.svg"), ht: "h-14",  url: "https://coingape.com/elon-musk-changes-his-profile-pic-with-bitcoin-anime-btc-price-crosses-55k/"},
                {src: require("@/assets/images/yellowBlue.svg"), ht: "h-12",  url: "https://www.techtimes.com/articles/261095/20210604/elon-musk-changes-twitter-dp-triggered-crypto-woman-targeting-fans-cryptocurrency.htm"},
                {src: require("@/assets/images/trustnodes.svg"), ht: "h-12",  url: "https://www.trustnodes.com/2018/10/23/elon-musk-offers-bitcoin-grimes-says-she-likes-eth-twitter-bans-hacks"},
                {src: require("@/assets/images/theSilly.svg"), ht: "h-12",  url: "https://thesillytv.com/heres-why-elon-musk-casey-neistat-and-other-bitcoin-advocates-have-laser-eyes-in-their-twitter-profiles/"},
            ],
        }
    },
    methods:{
        goto(url){
            window.open(url, 'blank');
        }
    }
}
</script>