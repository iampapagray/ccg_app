<template>
    <div class="lg:px-37">
        <div
            v-for="content in contents"
            :key="content.subtitle"
            class="py-25 flex justify-between"
        >
            <div class="flex-shrink-0" :class="content.ltr == false ? 'order-last ml-c_img_s' : 'mr-c_img_s'">
                <img :src="content.img" class="lg:h-c_img_h lg:w-c_img_w" />
            </div>
            <div class="w-full h-max text-left text-white my-auto">
                <p class="font-mont font-semibold text-lg leading-c_sub pb-3.5 ">{{content.subtitle}}</p>
                <p class="font-mont font-extrabold text-c_title leading-c_title whitespace-pre-wrap">{{content.title}}</p>
                <p class="font-nuni whitespace-pre-wrap pt-3.5 font-normal text-base leading-c_body">{{content.text}}</p>

                <button v-if="content.hasButton" class="btn mt-2">
                    {{content.buttonText}}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            contents: [
                {
                    title: 'Welcome to CCGBTCONE NFT Club',
                    subtitle: 'ABOUT US',
                    text: "CCGBTCONE is a vintage collectible minted July 26th 2017 on the Bitcoin blockchain through the Counterparty protocol. \nIt's part of the Oasis Mining collection which consists of 66 different cards from different artists.\n\nIt's one of the first Waifu NFT's minted on the blockchain and was used in multiple occasions by Elon Musk in his Twitter posts and even as his PFP.",
                    texts: [
                        "CCGBTCONE is a vintage collectible minted July 26th 2017 on the Bitcoin blockchain through the Counterparty protocol. It's part of the Oasis Mining collection which consists of 66 different cards from different artists.",
                        "It's one of the first Waifu NFT's minted on the blockchain and was used on multiple occasions by Elon Musk in his Twitter posts and even as his PFP."
                    ],
                    hasButton: true,
                    buttonText: 'Join our Discord',
                    img: require('@/assets/images/about_img.svg'),
                    ltr: true
                },
                {
                    title: 'Elon Musk’s Involvement',
                    subtitle: 'EPIC STORY',
                    text: "The first time it was used by Elon was in October 2018 in a tweet exchange with @Grimezsz. His account was even locked by Twitter, thinking hackers got control of his account. \nBack then his tweet was retweeted by many known people in the cryptocurrency space as @cz_binance @DoveyWan and many others.\n\nIt was used in May 2020 in an exchange with @bitcoin twitter account and it played a major role on kickstarting the bitcoin run we saw back then.\n\nOn February 20th 2021, Elon used CCGBTCONE as his PFP on twitter along with laser eyes, which seems to have contributed a lot to the laser eyes trend that we saw last year.",
                    texts: [
                        "The first time it was used by Elon was in October 2018 in a tweet exchange with @Grimezsz. His account was even locked by Twitter, thinking hackers got control of his account. Back then his tweet was retweeted by many known people in the cryptocurrency space such as @cz_binance @DoveyWan and many others.",
                        "It was used in May 2020 in an exchange with @bitcoin twitter account and it played a major role in kickstarting the bitcoin run we saw back then.",
                        "On February 20th 2021, Elon used CCGBTCONE as his PFP on twitter along with laser eyes, which seems to have contributed a lot to the laser eyes trend that we saw last year."
                    ],
                    hasButton: false,
                    buttonText: '',
                    img: require('@/assets/images/story_img.svg'),
                    ltr: false
                },
                {
                    title: "What does \nit all mean?",
                    subtitle: 'CONCLUSION',
                    text: "While we can only speculate if Elon Musk owns one or not, there will be only 300 of these available at any point in time. The fact that this NFT was involved in bitcoin related posts and was minted on the bitcoin blockchain through the Counterparty protocol can’t be nothing, right?\n\nElon’s stand on NFT's in 2021 when they became mainstream is unclear, however, on March 15th 2021, he made this post with a cool art that was not minted on the blockchain by him.\n\nEven though he didn't explicitly disclose that he holds one, he did use CCGBTCONE in many posts and as his PFP, clearly proving he likes it. He could proudly own one, and in case he doesn't, we can always get him one. We all know Elon Musk posts cryptic tweets all the time, so do we believe in coincidences in this case?",
                    texts: [
                        "While we can only speculate if Elon Musk owns one or not, there will be only 300 of these available at any point in time. The fact that this NFT was involved in bitcoin related posts and was minted on the bitcoin blockchain through the Counterparty protocol can’t be nothing, right? ",
                        "Elon’s stand on NFT's in 2021 when they became mainstream is unclear, however, on March 15th 2021, he made this post with a cool art that was not minted on the blockchain by him.",
                        "Even though he didn't explicitly disclose that he holds one, he did use CCGBTCONE in many posts and as his PFP, clearly proving he likes it. He could proudly own one, and in case he doesn't, we can always get him one. We all know Elon Musk posts cryptic tweets all the time, so do we believe in coincidences in this case?"
                    ],
                    hasButton: false,
                    buttonText: '',
                    img: require('@/assets/images/conc_img.svg'),
                    ltr: true
                },
            ],
        }
    }
}
</script>