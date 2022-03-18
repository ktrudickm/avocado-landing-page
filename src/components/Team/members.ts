export interface Member {
    name: string;
    position: string;
    description: string;
    location: string;
    imgSrc: string;
}

export const MEMBERS: Member[] = [
    {
        name: "Dawson Rickets",
        position: "CFO",
        description: "Dawson moved to Phoenix to get an M.S. Finance degree from Arizona State University. he began his career in valuation consulting for private companies in Arizona. More recently he has worked for Harvest Health and Recreation executing acquisition strategy and financial planning, as well as advising on the merger with with Trulieve Cannabis Corp which is the largest transaction in the US Cannabis Industry to date. He enjoys getting active when he is out of the office, including playing basketball, golfing, hiking, and mountain bike riding. He is also the proud father of two Aussie rescues, and the co-host of @m0neym0nday.",
        location: "Phoenix, AZ",
        imgSrc: "assets/dawson.jpg"
    },
    {
        name: "Sydney Takitch",
        position: "UI/UX Lead",
        description: "Sydney is a UX Designer based in Columbus, OH. She graduated from the Ohio State University in 2019 where she studied Human-Computer Interaction. Since then, she has worked on various projects designing interactive applications that are impactful and easy to use. Recently, she returned to school and is working towards earning an M.S. in User Experience Design from Kent State University. In her free time, Sydney enjoys traveling, live music, and staying active.",
        location: "Columbus, OH",
        imgSrc: "assets/sydney.jpeg"
    },
    {
        name: "Evan Karnoukapis",
        position: "Senior Advisor",
        description: "Evan Karnoupakis is a blockchain consultant, author, and thought leader. A featured speaker, panelist, and judge at leading universities, blockchain conferences, and events, he has provided blockchain education and consulting services to governments, businesses, and academic institutions worldwide. A regular contributor to the investor publication Bitcoin Market Journal, he has co-authored the book \"Blockchain Success Stories: Case Studies from the Leading Edge of Business\" (O'Reilly Media, Inc. 2021) as well as two industry leading reports: \"What is Blockchain\" (O'Reilly 2019) and \"State of Blockchain\" (O'Reilly 2019)." + 
        "Most recently, in a collaboration with the Chamber of Digital Commerce, the leading trade association for the blockchain and digital asset industry, he led the development of the Massachusetts and Ohio Editions of the \"Legislator's Toolkit for Blockchain Technology.\" Evan holds an MBA in Strategic Management and Entrepreneurial Management from the Wharton School, an MAT in Integrated Mathematics from Kent State University, and an undergraduate Business Degree, Summa Cum Laude, from Miami University. An avid skier, he resides in Northeast Ohio where he enjoys hiking in the Cuyahoga Valley National Park with his family.",
        location: "Cleveland, OH",
        imgSrc: "assets/evan.jpeg"
    },
    {
        name: "John Zuccaro",
        position: "Crypto Lead",
        description: "Hailing from Northeast Ohio, ever since John was about 10 years old, he's had a fascination with technology, finance, and investing. With these foundational interests, he decided to study Information Systems and Supply Chain Management at Miami University's Farmer School of Business, and graduated with Cum Laude honors. John brings to Avocado 4 years of research experience and fundamental analysis of the blockchain space, in addition to his strategic acumen, actionable foresight, and a passionate drive to positively impact humanity. He currently lives outside of Denver, Colorado and enjoys exhilarating activities in the great outdoors, watching and playing a variety of athletics, eating authentic cuisines and traveling the world.",
        location: "Cleveland, OH",
        imgSrc: "assets/john.png"
    }
];
