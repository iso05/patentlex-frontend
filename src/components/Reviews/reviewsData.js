import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/img6.png";
import img7 from "../../assets/images/img7.png";
import img8 from "../../assets/images/img8.png";

const getImageSrc = (img) => (typeof img === 'object' ? img.src : img);

export const reviewsData = [
  {
    id: "review1",
    category: "international",
    categoryLabel: "Xalqaro Patentlash (Madrid)",
    name: "Manuel Eladio Chavvaria",
    role: "Direktor — FANALBA S.A. GROUP",
    location: "Ekvador / Xalqaro",
    image: getImageSrc(img5),
    rating: 5,
    certNo: "MADRID-WIPO № 1782910",
    caseTitle: "Xalqaro Tovar Belgisini O‘zbekistonda Himoyalash",
    text: "PatentLex jamoasi butun jarayonni o‘z zimmalariga olishdi. Xalqaro Madrid tizimi orqali hujjatlarimizni O‘zbekistonda 100% muammosiz va juda tez rasmiylashtirishdi. Ular bizning eng ishonchli vakilimiz!",
    duration: "1 kunda talabnoma topshirildi",
    highlight: "100% Xalqaro Huquqiy Himoya"
  },
  {
    id: "review2",
    category: "copyright",
    categoryLabel: "Mualliflik Huquqi & IT",
    name: "Jahongir Bafoyev",
    role: "Bosh direktor — Bukhara Books Print",
    location: "Buxoro / Toshkent",
    image: getImageSrc(img6),
    rating: 5,
    certNo: "Guvohnoma № 004819",
    caseTitle: "Nashriyot Asarlari va Dizaynlarni Rasmiylashtirish",
    text: "Jamoa har doim yuqori professionallikni namoyish etadi. Kitoblarimiz va eksklyuziv illyustratsiyalarimizning mualliflik huquqini tez va sifatli himoya qilishdi. Endi barcha asarlarimiz qonuniy himoyada!",
    duration: "3 kunda guvohnoma olindi",
    highlight: "Mualliflik Huquqi Kafolati"
  },
  {
    id: "review3",
    category: "trademark",
    categoryLabel: "Tovar Belgilari & Brend",
    name: "EUROPLEKS XK jamoasi",
    role: "ECOBaget brendi asoschisi",
    location: "Toshkent shahri",
    image: getImageSrc(img7),
    rating: 5,
    certNo: "MGU № 042918",
    caseTitle: "ECOBaget Tovar Belgisi va Sanoat Namunasi",
    text: "Sanoat namunasi va tovar belgilarimiz himoyasi bo‘yicha uzoq yillardan beri faqat PatentLex bilan ishlaymiz. Rad etish xavfi bo‘lgan holatda ham apellyatsiyada yutib chiqishdi. 100% ishonchli jamoa!",
    duration: "10 yillik monopol guvohnoma",
    highlight: "Apellyatsiya Kengashidagi G‘alaba"
  },
  {
    id: "review4",
    category: "litigation",
    categoryLabel: "Sudlarda Himoya & Kontrafakt",
    name: "Akmal Aslonov",
    role: "Tadbirkor va Investor",
    location: "Samarqand / Toshkent",
    image: getImageSrc(img8),
    rating: 5,
    certNo: "Sud Qarori № 2-1049/24",
    caseTitle: "Kontrafakt Mahsulotlarni Bozorlardan Yo‘qotish",
    text: "Brendimizdan noqonuniy foydalangan raqobatchilarga qarshi sudda PatentLex advokatlari ishtirok etib, soxta tovarlarni musodara qildirdi va to‘liq tovon puli undirib berdi. O‘z ishining haqiqiy ustalari!",
    duration: "120M+ so‘m tovon puli undirildi",
    highlight: "Sudda To‘liq G‘alaba"
  },
  {
    id: "review5",
    category: "trademark",
    categoryLabel: "Tovar Belgilari & Brend",
    name: "Farhod Karimov",
    role: "Texnologiya va Ta'lim Markazi Asoschisi",
    location: "Toshkent",
    image: getImageSrc(img5),
    rating: 5,
    certNo: "MGU № 048712",
    caseTitle: "Franchayzing Tarmog‘i Uchun Brend Himoyasi",
    text: "Yangi filiallar va franshiza sotishdan oldin logotipimizni patentlash zarur edi. Muhammad Ali aka va jamoasi 24 soat ichida talabnomani rasmiylashtirib berishdi. Juda mamnunmiz!",
    duration: "24 soatda talabnoma topshirildi",
    highlight: "Tezkor Davlat Ro‘yxati"
  },
  {
    id: "review6",
    category: "international",
    categoryLabel: "Xalqaro Patentlash",
    name: "Sherzod Abdullayev",
    role: "Eksport Korxonasi Rahbari",
    location: "Farg‘ona vodiysi",
    image: getImageSrc(img6),
    rating: 5,
    certNo: "WIPO № 1849102",
    caseTitle: "Qozog‘iston, Rossiya va BAA Davlatlarida Patentlash",
    text: "Eksport mahsulotlarimizni chet elda himoyalashda PatentLex mutaxassislarining tajribasi katta yordam berdi. Bir vaqtning o‘zida 4 ta davlatda brendimizni muvaffaqiyatli himoyaladik.",
    duration: "Xalqaro WIPO Guvohnomasi",
    highlight: "Global Eksport Himoyasi"
  }
];

export const reviews = reviewsData;
