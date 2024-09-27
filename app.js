//Declaration du temps
let temps = {
    heures: 6,
    minutes: 13,
    secondes: 35
};

//Creation de la fonction effectuant le decompte
function decompte() {
    //Mise a jour des secondes
    temps.secondes--;

    //Si les secondes sont inferieur a 0, mise a jour des minutes
    if (temps.secondes < 0) {
        temps.secondes = 59;
        temps.minutes--;
    }

    //Si les minutes sont inferieur a 0, mise a jour des heuress
    if (temps.minutes < 0) {
        temps.minutes = 59;
        temps.heures--;
    }

    //Affichage du temps*
    let affichage = `${temps.heures}H ${temps.minutes}M ${temps.secondes}S`;
    document.getElementById('temps').innerHTML = affichage;

    //Fin du decompte
    if (temps.heures === 0 && temps.minutes === 0 && temps.secondes === 0) {
        clearInterval(interval);
        document.getElementById('temps').innerHTML = "0H 0M 0S";
    }
}

//Lancement du decompte
let interval = setInterval(decompte, 1000);



//Declaration du tableau des elements de la div .left de la section .srceen2
const elements = [
    {
        icon: "16.png",
        title: "Metabolic Boost, No Diet Change*",
        description: "Clinically proven boost in your metabolic rate, making your body an efficient calorie burning machine without changing your diet.*"
    },
    {
        icon: "15..png",
        title: "Appetite Suppression*",
        description: "Curb unhealthy cravings, making it easier to maintain a balanced diet and control calorie intake.*"
    },
    {
        icon: "14.png",
        title: "Efficient Fat Oxidation*",
        description: "Our powerful antioxidant-rich extracts break down fats into smaller molecules which can then be used for energy.*"
    },
    {
        icon: "12_6999e663-a17c-4345-9a67-711300cde2c9.png",
        title: "Feel Younger, Faster*",
        description: "When you're younger you can lose weight faster. Obvi helps your weight management feel like you're in your 20s again.*"
    },
    {
        icon: "11_d6d95535-0e4a-4e26-ae57-281185c59689.png",
        title: "Alleviates Joint Pain*",
        description: "Collagen is an anti-inflammatory that can help protect joints and tendons as well as relieve joint pain.*"
    }
];


//Fonction pour afficher les elements
function AfficheElt() {
    //declaration de la div aui va contenir tous les elements
    const div = document.getElementById('screen2_left');

    //Nettoyage de la div(On vide la div)
    div.innerHTML = "";
    elements.forEach((elt, index) => {
        const html = `
            <div class="elt">
                <img src="assets/icons/${elt.icon}" alt="${elt.title}" />
                <h2>${elt.title}</h2>
                <p>${elt.description}</p>
            </div>
        `; div.innerHTML += html;

    });
}
AfficheElt();



//Declaration des elements pour le slide
const slider1 = [
    {
        image: "img01.jpg",
        name: "Natalie W.",
        comment: "I had done a lot of research before deciding to purchase this product! it does what it says! I love this stuff I love the way my joints feel! My skin looks amazing along with my hair and nails but I have lost weight and inches."
    },
    {
        image: "img02.jpg",
        name: "Michelle Y.",
        comment: "I started obvi burn caps and I love them!! I felt an overall good mood, full and an increase in energy. I already purchased next months and can not wait to see where this journey takes me!! #Obvi #Journey"
    },
    {
        image: "image-11.jpg",
        name: "Tiffany W.",
        comment: "I love everything about the Burn I feel more focused and it doesn't like give me the jitters and it makes it feel so natural. Due to some other health problems I have chronic fatigue but the burn capsules help so so much"
    },
    {
        image: "img04.jpg",
        name: "Jennifer X.",
        comment: "Love my obvi!!!! Tons of energy after only 2 weeks!!! Hair looks happy!!!! Thank you so much obvi!!!!!!!"
    },
    {
        image: "img05.jpg",
        name: "Brittany J.",
        comment: "I've been using Obvi for 5 weeks now, I could notice a difference with just one capsule, week 2 I started taking 2 capsules and I feel amazing, mood improved and my energy has been great! I can't wait to see what happens when I start the full daily dosage."
    },
    {
        image: "img06.jpg",
        name: "Denise B.",
        comment: "I absolutely love this product! Gives me the energy to tackle my day and 2 year old and less aches/pains, all while burning fat!"
    },
    {
        image: "img08.jpg",
        name: "Alice M.",
        comment: "The Obvi collagenic Burn is working great for me. I feel better and have less hot flashes. I can see the difference in how I look and feel!"
    },
    {
        image: "img09.jpg",
        name: "Christina Z.",
        comment: "Works great, can see a change in my skin and hair. My hair isn't falling out by the handfuls. Great product."
    },
    {
        image: "img10.jpg",
        name: "Erin V.",
        comment: "Tried Obvi Burn – loving it! Boosted my mood, kept me full, and gave me more energy. Already stocked up for next month. Can't wait to see where this takes me!"
    },
    {
        image: "img11.jpg",
        name: "Rebecca P.",
        comment: "I love my obvi collagenic burn! I have lost 14 pounds so far and many inches. This helps my energy and curbs my appetite for sure! I am continuing this for now and see where it goes."
    },
    {
        image: "img12.jpg",
        name: "Allison F.",
        comment: "These give me so much energy!!!!! Ive been using these for 2 weeks and I have better skin more energy and I have lost 5 lbs plus they taste like Berries!!!!! These are a WIN WIN I highly recommend"
    },
    {
        image: "img13.jpg",
        name: "Courtney B.",
        comment: "I am new at this and excited for my new journey! I have already taken it for (3) days and I am not even feeling any of the “snacky” cravings! I am HOOKED! 😀😀😀"
    },
    {
        image: "img14.jpg",
        name: "Jamie U.",
        comment: "This is my favorite fat burner to-date! It helps to curve my appetite and saves me from cravings. I have a very sensitive digestive system so it is very important to me that what I take to help me lose weight doesn't tear my tummy up."
    },
    {
        image: "img15.jpg",
        name: "Amber S.",
        comment: "Love this stuff! Helps me make it thru my fasting!"
    },
    {
        image: "img16.jpg",
        name: "Samantha K.",
        comment: "I was just looking for collagen in a pill form and came across these. Just a bonus that I can replace my fat burner with these too!"
    }

];

//Fonction pour afficher les elements pour le slide
function AfficheSlider1() {

    const div = document.getElementById('swiper_wrapper');
    div.innerHTML = "";

    slider1.forEach((elt, index) => {
        const html = `
        <div class="swiper-slide slide">
                <img src="assets/images/${elt.image}" alt="${elt.name}" />
                <h3>${elt.name}</h3>
                <div class="star">&#9733 &#9733 &#9733 &#9733 &#9733</div>
                <p>${elt.comment}</p>
        </div>
        `;
        div.innerHTML += html;
    });
}
AfficheSlider1();



//Configurattion des slide/carousel grace a l'objet Swiper de la librairie SwiperJS 

let width = window.innerWidth;

// console.log(width);

const swiper1 = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 30,
    slidesPerView: width >= 600 && width <= 800 ? 2 : (width <= 600) ? 1 : 3,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});




//Declaration des elements pour la div screen6

const elements6 = [
    {
        icon: "weight-loss_2_-min.png",
        title: "280% More Weight Loss",
        description: "In one such study, the group taking Greenselect Phytosome® lost 280% more weight after 90 days compared to the control group."
    },
    {
        icon: "weight-loss_3_-min.png",
        title: "12% Reduction in BMI",
        description: "Studies also showed a 12% reduction in BMI with a significant reduction in waistline in some users."
    },
    {
        icon: "weight-loss_1_-min.png",
        title: "Keep It Off",
        description: "In another study, the group that lost significant weight with Greenselect Phytosome® was able to keep the weight off while the control group saw weight gain after two months."
    },
];

//Fonction pour afficher les elements
function AfficheElt1() {
    //declaration de la div aui va contenir tous les elements
    const div = document.getElementById('content6');

    //Nettoyage de la div(On vide la div)
    div.innerHTML = "";
    elements6.forEach((elt, index) => {
        const html = `
            <div class="elt">
                <img src="assets/icons/${elt.icon}" alt="${elt.title}" />
                <h2>${elt.title}</h2>
                <p>${elt.description}</p>
            </div>
        `; div.innerHTML += html;

    });
}
AfficheElt1();



//Declaration des elements pour la div screen7

const elements7 = [
    {
        icon: "0.1.png",
        title: "Type I",
        description: "Promotes skin structure and elasticity, helping to reduce fine lines and wrinkles while strengthening hair.*"
    },
    {
        icon: "0.2.png",
        title: "Type II",
        description: "Essential for joint health, enhances flexibility and alleviates discomfort, allowing for easier movement.*"
    },
    {
        icon: "0.3.png",
        title: "Type V",
        description: "Encourages healthy tissue growth in vital organs, hair, and nails, promoting healthy aging."
    },
    {
        icon: "0.4.png",
        title: "Type X",
        description: "Plays a key role in supporting strong joints and bones, helping ease age related aches and pains."
    },
];


//Fonction pour afficher les elements
function AfficheElt2() {
    //declaration de la div aui va contenir tous les elements
    const div = document.getElementById('content7');

    //Nettoyage de la div(On vide la div)
    div.innerHTML = "";
    elements7.forEach((elt, index) => {
        const html = `
            <div class="elt">
                <img src="assets/icons/${elt.icon}" alt="${elt.title}" />
                <h2>${elt.title}</h2>
                <p>${elt.description}</p>
            </div>
        `; div.innerHTML += html;

    });
}
AfficheElt2();



//Declaration des elements pour le slide
const slider2 = [
    {
        image: "image-4.jpg",
        name: "Megan R.",
        comment: "I turned 40 this last year and noticed the weight I usually can keep off with exercise and eating healthy was not going away. So I decided to try Obvi collagen burn capsules and have lost 5 pounds. I definitely recommend it!!!"
    },
    {
        image: "image-3.jpg",
        name: "Kelly O.",
        comment: "Love it! I can tell a difference in my energy levels, and my nails are growing like crazy!!!"
    },
    {
        image: "image-6.jpg",
        name: "Laura T.",
        comment: "I could tell a HUGE difference in my energy in the first week and FINALLY my weight is starting to slowly budge!! Excited to see what happens over the next few months!"
    },
    {
        image: "image-7.jpg",
        name: "Shannon S.",
        comment: "I am in love with this product and will be ordering more. I feel so much better and I don’t get hungry. I am seeing and feeling the difference. Highly recommend"
    },
    {
        image: "image-8.jpg",
        name: "Kathryn E.",
        comment: "I love the Collagenic Fat Burner. It has helped me maintain my weight loss. I have tons of energy and it helps my appetite control. I take it with or without meals."
    },
    {
        image: "imge-9.jpg",
        name: "Andrea L.",
        comment: "This product is great! Feeling so much better! Losing weight, more energy! Can’t wait to see how it helps me going forward"
    },
    {
        image: "image-10.jpg",
        name: "Brenda A.",
        comment: "I only been using this product for three weeks. I can see my waistline thinning out. I’m truly have been trying to lose ten pounds. And nothing work for me. This product helps reduce my cravings and I can see already some weight loss."
    },
    {
        image: "image-11.jpg",
        name: "Stephanie Q.",
        comment: "I am LOVING this product! Gives me energy throughout the day without the crash, losing pounds & inches is a plus! I've noticed my hair & nails have grown as well! It's super easily to take & would recommend to everyone!"
    },
    {
        image: "image-2.jpg",
        name: "Jasmine H.",
        comment: "Started this last month, and im feeling amazing!! One more week til weight and measuring. But the bloating is completely gone. I have a TON of energy for the afternoon gym session, and this doesnt cause me to crash at all after the energy it gives me!"
    },
    {
        image: "image-12.jpg",
        name: "Cindy D.",
        comment: "This works! I’ve been taking it regularly as directed and I wore pants yesterday that I bought about a month ago and could not zip! Great control of appetite and replace my daily coffee for this energy booster"
    },
    {
        image: "image-13.jpg",
        name: "Sarah L.",
        comment: "I was skeptical to try this product but this was very helpful after months of trying to lose weight. This gives me the energy to focus on work, gym and as a mom of 4. So grateful for Obvi and I will definitely continue this journey with Obvi products. Finally, I was able to get out of the 200 lbs"
    },
    {
        image: "image-14.jpg",
        name: "Anna H.",
        comment: "Collagenic Burn gives me the \"Get- up - and - Go\" that I need in the morning without the usual jitters that other supplements I tried have given me. I feel much better, appetite is down, and energy is up. Well worth given it a try."
    },
    {
        image: "image-1_f97d3191-62e0-4cf4-972a-23832a5d82b5.jpg",
        name: "Melissa F.",
        comment: "This product does wonders for my weight loss journey and skin! I don’t feel as hungry throughout the day."
    },
    {
        image: "image-15.jpg",
        name: "Rachel J.",
        comment: "Love the burn capsules! I get a nice boost of energy, without being jittery, and they help with appetite control. Adding burn to my nutrition plan has helped me lose over 40 lbs."
    },
    {
        image: "image-16.jpg",
        name: "Serena N.",
        comment: "I started using BURN, when I saw it on Facebook! I have lost over 150lbs in a little over a year. I am an older lady and I couldn't have done this well, my doctor was also happy 😊"
    },
    {
        image: "image-17.webp",
        name: "Chloe G.",
        comment: "I can really tell a difference when I forget to take these. Without alot of modifications to my diet, I have already lost about 5 pounds in just over 2 weeks. I may be losing it slow, but as long as the scale is going down, I am happy :)"
    },

];


function AfficheSlider2() {

    const div = document.getElementById('swiper_screen10');
    div.innerHTML = "";

    slider2.forEach((elt, index) => {
        const html = `
        <div class="swiper-slide slide">
                <img src="assets/images/${elt.image}" alt="${elt.name}" />
                <h3>${elt.name}</h3>
                <div class="star">&#9733 &#9733 &#9733 &#9733 &#9733</div>
                <p>${elt.comment}</p>
        </div>
        `;
        div.innerHTML += html;
    });
}
AfficheSlider2();



//Pour avec et fermer le panel(image)
document.getElementById('btn_open_panel').addEventListener('click', () => {
    document.getElementById('panel').style.display = 'block';
});
document.getElementById('bnt_exist_panel').addEventListener('click', () => {
    document.getElementById('panel').style.display = 'none';
});



//Pour afficher ou fermer les reponses des diffrentes questions
let questions = document.querySelectorAll('.head');
let answers = document.querySelectorAll('.answer');

questions.forEach((question, index) => {
    question.addEventListener('click', () => {
        answers[index].style.display = answers[index].style.display === 'block' ? 'none' : 'block';
        question.lastElementChild.innerHTML = answers[index].style.display === 'block' ? '<p class="btn">-</p>' : '<p class="btn">+</p>';
        // answers[index].classList.toggle('active');
    });
});

//Pour faire disparaitre un bouton et afficher un  autre lorsque l'on clique dessus
let firsts = document.querySelectorAll('.first');
let seconds = document.querySelectorAll('.second');

firsts.forEach((first, index) => {
    first.addEventListener('click', () => {
        first.style.display = 'none';
        seconds[index].style.display = 'block';
    });
});


//Element pour la section screen11
const element11 = [
    {
        name: "Jennifer",
        h1: "This product is effective, &",
        p: "This product is effective, & efficient. Works well!!!",
        image: "Untitled-3.png",
        like: 30,
        date: "05/07/24"

    },
    {
        name: "Barbara W.",
        h1: "I only been using 2",
        p: "I only been using 2 weeks now and I'm waiting on the results . But it has curved my appetite so far.",
        image: "Untitled-3.png",
        like: 32,
        date: "05/05/24"

    },
    {
        name: "Jessica P.",
        h1: "12 days in and have",
        p: "12 days in and have lost 9 lbs",
        image: "img15.jpg",
        like: 79,
        date: "05/04/24"

    },
    {
        name: "Shelby B.",
        h1: "I've been taking burn elite",
        p: "I’ve been taking Burn Elite for about a week now and I’m down almost 5 pounds and several inches! LOVE this product and cant wait to see were I am at the 3 month mark!",
        image: "image-17.webp",
        like: 83,
        date: "04/30/24"

    },
];


// Fonction pour afficher les donnees de la constante element11 
function AfficheElement11() {

    const div = document.getElementById('content_screen11');
    div.innerHTML = "";

    element11.forEach((elt, index) => {
        const html = `
        <div class="box">
                    <div class="box_c">
                        <div>
                            <p style="font-size: 17px;">&#10004; Verifier Buyer</p>
                            <strong style="font-size: 16px;">${elt.name}</strong>
                        </div>

                        <div>
                            <span style="font-weight: bold; font-size: 26px;">&#9733 &#9733 &#9733 &#9733 &#9733</span>
                            <h1 style="margin-top: .5em;; text-transform: uppercase;">${elt.h1}</h1>
                            <p style="font-size: 18px; color: #000;margin-top: .2em;font-weight: 300">${elt.p}</p>
                            <img src="assets/images/${elt.image}" alt="">
                            <p style=" margin-top: .8em;"><strong style="font-size: 15px;">WAS THIS REVIEW HELPFUL</strong> <span class="like" style="cursor: pointer; font-size: 15px;">like</span> <i style="font-size: 15px; font-weight: 400;">${elt.like} peoples found this review helpful</i></p>
                        </div>

                    </div>
                    <p style="text-align: right;font-size: 18px; font-weight: 400;">${elt.date}</p>
                </div>
        `;
        div.innerHTML += html;
    });
}
AfficheElement11();



//Pouur change d'interface et de style lorsque lon clique sur le menu 'product reviews'
document.querySelector('.menu1').addEventListener('click', () => {
    document.querySelector('.menu1').style.fontWeight = 'bold';
    document.querySelector('.menu1').style.borderBottom = '3px solid #61498D';
    document.querySelector('.menu2').style.fontWeight = '400';
    document.querySelector('.menu2').style.borderBottom = 'none';
    document.querySelector('.part1').style.display = 'block';
    document.querySelector('.part2').style.display = 'none';
});

//Pouur change d'interface et de style lorsque lon clique sur le menu 'Questions'
document.querySelector('.menu2').addEventListener('click', () => {
    document.querySelector('.menu2').style.fontWeight = 'bold';
    document.querySelector('.menu2').style.borderBottom = '3px solid #61498D';
    document.querySelector('.menu1').style.fontWeight = '400';
    document.querySelector('.menu1').style.borderBottom = 'none';
    document.querySelector('.part2').style.display = 'block';
    document.querySelector('.part1').style.display = 'none';
});


// Pour afficher ou cacher les differentes interface lorsque lon clique sur le boutton approrié

document.querySelector('.btn_review').addEventListener('click', () => {
    document.querySelector('.form').style.display = 'block';
});

document.querySelector('.btn_exists_review').addEventListener('click', () => {
    document.querySelector('.form').style.display = 'none';
});


document.querySelector('.btn_question').addEventListener('click', () => {
    document.querySelector('.form2').style.display = 'block';
});

document.querySelector('.btn_exists_question').addEventListener('click', () => {
    document.querySelector('.form2').style.display = 'none';
});
