 const navLinks = [
    { id: 'cocktails', title: 'Cocktails'}, 
    { id: 'about', title: 'Om oss'},
    { id: 'art', title: 'Kunsten'},
    { id: 'kontakt', title: 'Kontakt'},
];

const cocktailLists = [
 {
	name: "Chapel Hill Shiraz",
	country: "AU",
	detail: "400 ml",
	price: "160kr",
 },
 {
	name: "Caten Malbee",
	country: "AU",
	detail: "750 ml",
	price: "490kr",
 },
 {
	name: "Rhino Pale Ale",
	country: "CA",
	detail: "750 ml",
	price: "200kr",
 },
 {
	name: "Irish Guinness",
	country: "IE",
	detail: "600 ml",
	price: "190kr",
 },
];

const mockTailLists = [
 {
	name: "Tropical Bloom",
	country: "US",
	detail: "330 ml",
	price: "100kr",
 },
 {
	name: "Passionfruit Mint",
	country: "US",
	detail: "Glass",
	price: "189kr",
 },
 {
	name: "Citrus Glow",
	country: "CA",
	detail: "750 ml",
	price: "200kr",
 },
 {
	name: "Lavender Fizz",
	country: "IE",
	detail: "600 ml",
	price: "290kr",
 },
];

const profileLists = [
 {
	imgPath: "/images/profile1.png",
 },
 {
	imgPath: "/images/profile2.png",
 },
 {
	imgPath: "/images/profile3.png",
 },
 {
	imgPath: "/images/profile4.png",
 },
];

const featureLists = [
 "Perfekt balanserte blandinger",
 "Perfektsjonerte pyntinger",
 "Kjølig hver gang",
 "Ekspertblandet & stokket",
];

const goodLists = [
 "Håndplukkede ingredienser",
 "Signature teknikker",
 "Bartendingkunst i handling",
 "Ferske smaker",
];

const storeInfo = {
 heading: "Hvor finner du oss",
 address: "Valkyriegata 13A, 0366 Oslo, Norge",
 contact: {
	phone: "47 476 75 157",
	email: "hello@jsmcocktail.com",
 },
};

const openingHours = [
 { day: "Man-Tor", time: "13:00 - 12:00" },
 { day: "Fre", time: "11:00 - 02:00" },
 { day: "Lør", time: "11:00 - 03:00" },
 { day: "Søn", time: "11:00 - 01:00" },
];

const socials = [
 {
	name: "Instagram",
	icon: "/images/insta.png",
	url: "#",
 },
 {
	name: "X (Twitter)",
	icon: "/images/x.png",
	url: "#",
 },
 {
	name: "Facebook",
	icon: "/images/fb.png",
	url: "#",
 },
];

const allCocktails = [
 {
	id: 1,
	name: "Classic Mojito",
	image: "/images/drink1.png",
	title: "Enkle Ingredienser, Fyldig Smak",
	description:
	 "Laget med rom, lime juice, og fersk mynte, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
 },
 {
	id: 2,
	name: "Orange Martini",
	image: "/images/drink2.png",
	title: "En zesty klassiker som aldri slår feil",
	description:
	 "Martini er en klassiker som balanserer syrlige appelsinser, myk gin og et hint av sødme. Ristet, frossen eller på is - den er alltid crisp og forfriskende.",
 },
 {
	id: 3,
	name: "Margarita",
	image: "/images/drink3.png",
	title: "Legendarisk drink med et hint av sødme",
	description:
	 "Laget med tequila, Cointreau og lime juice. Margaritaen er enkel å lage og full av karakter. Legg til en saltet kant for den perfekte drinken på sommerkvelder.",
 },
 {
	id: 4,
	name: "Aperol Spritz",
	image: "/images/drink4.png",
	title: "Sprudlende og frisk drink",
	description:
	 "Tradisjonell drink laget med prosecco, Aperol og sprudlevan, enten du feirer eller bare vil slapper av.",
 },
];

export {
	navLinks,
    cocktailLists,
    mockTailLists,
    profileLists,
    featureLists,
    goodLists,
    openingHours,
    storeInfo,
    socials,
    allCocktails,
};