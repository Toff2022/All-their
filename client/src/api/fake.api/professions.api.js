export const professions = {
    doctor: { _id: "67rdca3eeb7f6fgeed471818", name: "Доктор", color: "primary" },
    seamstress: { _id: "67rdca3eeb7f6fgeed471820", name: "Швея", color: "secondary" },
    welder: { _id: "67rdca3eeb7f6fgeed471814", name: "Сварщик", color: "success" },
    engineer: { _id: "67rdca3eeb7f6fgeed471822", name: "Инженер", color: "info" },
    preschoolChild: { _id: "67rdca3eeb7f6fgeed471824", name: "Дошкольник", color: "warning" },
    schoolChild: { _id: "67rdca3eeb7f6fgeed471832", name: "Школьник", color: "danger" },
    taxingInspector: { _id: "67rdca3eeb7f6fgeed471829", name: "Налоговый инспектор", color: "primary" },
    homeMaker: { _id: "67rdca3eeb7f6fgeed471830", name: "Домохозяйка", color: "secondary" },
    electricalEngineer: { _id: "67rdca3eeb7f6fgeed471833", name: "Электромонтер", color: "dark" },
    military: { _id: "67rdca3eeb7f6fgeed471834", name: "Военный", color: "primary" },
    driver: { _id: "67rdca3eeb7f6fgeed471835", name: "Водитель", color: "primary" },
    shoemaker: { _id: "67rdca3eeb7f6fgeed471836", name: "Сапожник", color: "secondary" },
    kolkhoz: { _id: "67rdca3eeb7f6fgeed471831", name: "Сельхоз Работник", color: "secondary" }
};
// export const professions = [
//     { _id: "67rdca3eeb7f6fgeed471818", name: "Доктор", color: "primary" },
//     { _id: "67rdca3eeb7f6fgeed471820", name: "Швея", color: "secondary" },
//     { _id: "67rdca3eeb7f6fgeed471814", name: "Сварщик", color: "success" },
//     { _id: "67rdca3eeb7f6fgeed471822", name: "Инженер", color: "info" },
//     { _id: "67rdca3eeb7f6fgeed471824", name: "Дошкольник", color: "warning" },
//     { _id: "67rdca3eeb7f6fgeed471832", name: "Школьник", color: "danger" },
//     { _id: "67rdca3eeb7f6fgeed471830", name: "Домохозяйка", color: "secondary" },
//     { _id: "67rdca3eeb7f6fgeed471829", name: "Налоговый инспектор", color: "primary" },
//     { _id: "67rdca3eeb7f6fgeed471833", name: "Электромонтер", color: "dark" },
//     { _id: "67rdca3eeb7f6fgeed471834", name: "Военный", color: "primary" },
//     { _id: "67rdca3eeb7f6fgeed471835", name: "Водитель", color: "primary" },
//     { _id: "67rdca3eeb7f6fgeed471836", name: "Сапожник", color: "secondary" },
//     { _id: "67rdca3eeb7f6fgeed471831", name: "Сельхоз Работник", color: "secondary" }
// ];
const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(professions);
        }, 2000);
    });

export default {
    fetchAll
};
// export function fetchAll () {
//     return professions
// };
