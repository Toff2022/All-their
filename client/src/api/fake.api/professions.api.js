export const professionsObject = {
    doctor: { _id: "67rdca3eeb7f6fgeed471818", name: "Доктор" },
    seamstress: { _id: "67rdca3eeb7f6fgeed471820", name: "Швея" },
    welder: { _id: "67rdca3eeb7f6fgeed471814", name: "Сварщик" },
    engineer: { _id: "67rdca3eeb7f6fgeed471822", name: "Инженер" },
    preschoolChild: { _id: "67rdca3eeb7f6fgeed471824", name: "Дошкольник" },
    schoolChild: { _id: "67rdca3eeb7f6fgeed471832", name: "Школьник" },
    taxingInspector: { _id: "67rdca3eeb7f6fgeed471829", name: "Налоговый инспектор" },
    homeMaker: { _id: "67rdca3eeb7f6fgeed471830", name: "Домохозяйка" },
    electricalEngineer: { _id: "67rdca3eeb7f6fgeed471833", name: "Электромонтер" },
    military: { _id: "67rdca3eeb7f6fgeed471834", name: "Военный" },
    driver: { _id: "67rdca3eeb7f6fgeed471835", name: "Водитель" },
    shoemaker: { _id: "67rdca3eeb7f6fgeed471836", name: "Сапожник" },
    kolkhoz: { _id: "67rdca3eeb7f6fgeed471831", name: "Сельхоз Работник" }
};
export const professions = [
    { _id: "67rdca3eeb7f6fgeed471818", name: "Доктор" },
    { _id: "67rdca3eeb7f6fgeed471820", name: "Швея" },
    { _id: "67rdca3eeb7f6fgeed471814", name: "Сварщик" },
    { _id: "67rdca3eeb7f6fgeed471822", name: "Инженер" },
    { _id: "67rdca3eeb7f6fgeed471824", name: "Дошкольник" },
    { _id: "67rdca3eeb7f6fgeed471832", name: "Школьник" },
    { _id: "67rdca3eeb7f6fgeed471830", name: "Домохозяйка" },
    { _id: "67rdca3eeb7f6fgeed471829", name: "Налоговый инспектор" },
    { _id: "67rdca3eeb7f6fgeed471833", name: "Электромонтер" },
    { _id: "67rdca3eeb7f6fgeed471834", name: "Военный" },
    { _id: "67rdca3eeb7f6fgeed471835", name: "Водитель" },
    { _id: "67rdca3eeb7f6fgeed471836", name: "Сапожник" },
    { _id: "67rdca3eeb7f6fgeed471831", name: "Сельхоз Работник" }
];
const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(professions);
        }, 2000);
    });

export default {
    fetchAll
};
