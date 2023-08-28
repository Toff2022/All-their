// relatives - many, relative - one
import { professionsObject as professions } from "./professions.api";
import { genus } from "./genus.api";
export const relatives = [
    {
        _id: "67rdca3eeb7f6fgeed471815",
        lastName: "Пешехонов",
        firstName: "Антон",
        patronymic: "Васильевич",
        profession: professions.engineer,
        age: 34,
        alive: "Да",
        genus: [genus.Peshekhonovy],
        birthDay: "03.10.1987",
        adress: { city: "Novokubansk", street: "Moskovskaya" },
        sex: "муж",
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471816",
        lastName: "Пешехонова",
        firstName: "Ольга",
        patronymic: "Евгеньевна",
        profession: professions.seamstress,
        age: 39,
        alive: "Да",
        lastNameBeforeMarriage: "Акиндинова",
        genus: [genus.Peshekhonovy, genus.Akindinovy],
        birthDay: "11.10.1983",
        adress: { city: "Novokubansk", street: "Moskovskaya" },
        sex: "жен",
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471817",
        lastName: "Пешехонова",
        firstName: "Лада",
        patronymic: "Антоновна",
        profession: professions.preschoolChild,
        age: 6,
        alive: "Да",
        lastNameBeforeMarriage: "Пешехонова",
        genus: [genus.Peshekhonovy],
        birthDay: "29.06.2016",
        adress: { city: "Novokubansk", street: "Moskovskaya" },
        sex: "жен",
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471818",
        lastName: "Пешехонов",
        firstName: "Василий",
        patronymic: "Иванович",
        profession: professions.welder,
        age: 69,
        alive: "Да",
        genus: [genus.Peshekhonovy],
        birthDay: "12.02.1953",
        adress: { city: "Novokubansk", street: "Octyabrskaya" },
        sex: "муж",
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471819",
        lastName: "Пешехонова",
        firstName: "Валентина",
        patronymic: "Дмитриевна",
        profession: professions.taxingInspector,
        age: 69,
        alive: "Да",
        lastNameBeforeMarriage: "Кадочникова",
        genus: [genus.Peshekhonovy, genus.Kadochnikovy],
        birthDay: "25.10.1953",
        adress: { city: "Novokubansk", street: "Octyabrskaya" },
        sex: "жен",
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471820",
        lastName: "Колос",
        firstName: "Людмила",
        patronymic: "Васильевна",
        profession: professions.homeMaker,
        age: 41,
        alive: "Да",
        lastNameBeforeMarriage: "Пешехонова",
        genus: [genus.Kolos, genus.Peshekhonovy],
        birthDay: "25.09.1976",
        adress: { city: "Novokubansk", street: "Sportivnaya" },
        sex: "жен",
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471821",
        lastName: "Бондаревский",
        firstName: "Владислав",
        patronymic: "Семенович",
        profession: professions.schoolChild,
        age: 14,
        alive: "Да",
        genus: [genus.Bondarevsky, genus.Peshekhonovy],
        birthDay: "25.09.2008",
        adress: { city: "Novokubansk", street: "Sportivnaya" },
        sex: "муж",
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471822",
        lastName: "Липинский",
        firstName: "Вячеслав",
        patronymic: "Сергеевич",
        profession: professions.electricalEngineer,
        age: 40,
        alive: "Да",
        genus: [genus.Lipinsky],
        birthDay: "13.01.1983",
        adress: { city: "Novokubansk", street: "Sportivnaya" },
        sex: "муж",
        bookmark: false
    }, {
        _id: "67rdca3eeb7f6fgeed471823",
        lastName: "Пешехонов",
        firstName: "Иван",
        patronymic: "Филипович",
        profession: professions.military, // сапожник, колхозник
        // age: 69,
        alive: "Нет",
        genus: [genus.Peshekhonovy],
        birthDay: "1906",
        adress: { city: "Novokubansk", street: "-" },
        sex: "муж",
        dethDay: "05.12.1955",
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471824",
        lastName: "Пешехонова",
        firstName: "Марфа",
        patronymic: "Селиверстовна",
        profession: professions.kolkhoz, // колхозница
        // age: 69,
        alive: "Нет",
        lastNameBeforeMarriage: "Косынко",
        genus: [genus.Peshekhonovy, genus.Kosynko],
        birthDay: "10.09.1910",
        adress: { city: "Novokubansk", street: "-" },
        sex: "жен",
        dethDay: "20.01.2000",
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471825",
        lastName: "Акиндинова",
        firstName: "Любовь",
        patronymic: "Гавриловна",
        profession: professions.doctor,
        age: 69,
        alive: "Да",
        lastNameBeforeMarriage: "Григоренко",
        genus: [genus.Akindinovy],
        adress: { city: "Новокубанск", street: "К.Маркса" },
        sex: "жен",
        birthDay: "25.09.1954",
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471826",
        lastName: "Акиндинов",
        firstName: "Евгений",
        patronymic: "Константинович",
        profession: professions.directorSinema,
        age: 0,
        alive: "Нет",
        genus: [genus.Akindinovy],
        adress: { city: "Novokubansk", street: "Западная" },
        sex: "муж",
        birthDay: "28.05.1950",
        dethDay: "16.06.2011",
        bookmark: false
    }
];

if (!localStorage.getItem("relatives")) {
    localStorage.setItem("relatives", JSON.stringify(relatives));
};

const fetchAll = () => new Promise((resolve) => {
    window.setTimeout(function () {
        resolve(JSON.parse(localStorage.getItem("relatives")));
    }, 2000);
});

const update = (id, data) =>
    new Promise((resolve) => {
        const relatives = JSON.parse(localStorage.getItem("relatives"));
        const relativeIndex = relatives.findIndex((relative) => relative._id === id);
        relatives[relativeIndex] = { ...relatives[relativeIndex], ...data };
        localStorage.setItem("relatives", JSON.stringify(relatives));
        resolve(relatives[relativeIndex]);
    });

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem("relatives")).find(
                    (relative) => relative._id === id
                )
            );
        }, 1000);
    });

export default {
    fetchAll,
    update,
    getById
};
// export function fetchAll () {
//     return relatives;
// };
// const fetchAll = () =>
//     new Promise((resolve) => {
//         window.setTimeout(function () {
//             resolve(relatives);
//         }, 2000);
//     });
// const getById = (id) => new Promise((resolve) => {
//     window.setTimeout(function () {
//         resolve(relatives.find((relative) => relative._id === id));
//     }, 1000);
// });
