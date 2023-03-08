const genus = {
    Peshekhonovy: {
        _id: "67rdca3eeb7f6fgeed471198",
        name: "Пешехоновы",
        color: "primary"
    },
    Akindinovy: {
        _id: "67rdca3eeb7f6fgeed471100",
        name: "Акиндиновы",
        color: "secondary"
    },
    Kadochnikovy: {
        _id: "67rdca3eeb7f6fgeed4711012",
        name: "Кадочниковы",
        color: "success"
    },
    Kolos: {
        _id: "67rdca3eeb7f6fgeed471101",
        name: "Колос",
        color: "danger"
    },
    Bondarevsky: {
        _id: "67rdca3eeb7f6fgeed471102",
        name: "Бондаревские",
        color: "info"
    },
    Lipinsky: {
        _id: "67rdca3eeb7f6fgeed471103",
        name: "Липинские",
        color: "dark"
    }
};
const relatives = [
    {
        _id: "67rdca3eeb7f6fgeed471815",
        lastName: "Пешехонов",
        firstName: "Антон",
        patronymic: "Васильевич",
        profession: [professions.engineer, professions.driver],
        age: 34,
        alive: true,
        genus: [genus.Peshekhonovy],
        birthDay: "03.10.1987",
        adress: { city: "Novokubansk", street: "Moskovskaya" },
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471816",
        lastName: "Пешехонова",
        firstName: "Ольга",
        patronymic: "Евгеньевна",
        profession: [professions.seamstress, professions.driver],
        age: 39,
        alive: true,
        lastNameBeforeMarriage: "Акиндинова",
        genus: [genus.Peshekhonovy, genus.Akindinovy],
        birthDay: "11.10.1983",
        adress: { city: "Novokubansk", street: "Moskovskaya" },
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471817",
        lastName: "Пешехонова",
        firstName: "Лада",
        patronymic: "Антоновна",
        profession: [professions.preschoolChild],
        age: 6,
        alive: true,
        lastNameBeforeMarriage: "Пешехонова",
        genus: [genus.Peshekhonovy],
        birthDay: "29.06.2016",
        adress: { city: "Novokubansk", street: "Moskovskaya" },
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471818",
        lastName: "Пешехонов",
        firstName: "Василий",
        patronymic: "Иванович",
        profession: [professions.welder, professions.driver],
        age: 69,
        alive: true,
        genus: [genus.Peshekhonovy],
        birthDay: "12.02.1953",
        adress: { city: "Novokubansk", street: "Octyabrskaya" },
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471819",
        lastName: "Пешехонова",
        firstName: "Валентина",
        patronymic: "Дмитриевна",
        profession: [professions.taxingInspector],
        age: 69,
        alive: true,
        lastNameBeforeMarriage: "Кадочникова",
        genus: [genus.Peshekhonovy, genus.Kadochnikovy],
        birthDay: "25.10.1953",
        adress: { city: "Novokubansk", street: "Octyabrskaya" },
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471820",
        lastName: "Колос",
        firstName: "Людмила",
        patronymic: "Васильевна",
        profession: [professions.homeMaker, professions.driver],
        age: 41,
        alive: true,
        lastNameBeforeMarriage: "Пешехонова",
        genus: [genus.Peshekhonovy, genus.Kolos],
        birthDay: "25.09.1976",
        adress: { city: "Novokubansk", street: "Sportivnaya" },
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471821",
        lastName: "Бондаревский",
        firstName: "Владислав",
        patronymic: "Семенович",
        profession: [professions.schoolChild],
        age: 14,
        alive: true,
        genus: [genus.Bondarevsky, genus.Peshekhonovy],
        birthDay: "25.09.2008",
        adress: { city: "Novokubansk", street: "Sportivnaya" },
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471822",
        lastName: "Липинский",
        firstName: "Владислав",
        patronymic: "Сергеевич",
        profession: [professions.electricalEngineer],
        age: 40,
        alive: true,
        genus: [genus.Lipinsky],
        birthDay: "13.01.1983",
        adress: { city: "Novokubansk", street: "Sportivnaya" },
        bookmark: false
    }, {
        _id: "67rdca3eeb7f6fgeed471823",
        lastName: "Пешехонов",
        firstName: "Иван",
        patronymic: "Филипович",
        profession: [professions.military], //сапожник, колхозник
        // age: 69,
        alive: false,
        genus: [genus.Peshekhonovy],
        birthDay: "1906",
        dethDay: "05.12.1955",
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471824",
        lastName: "Пешехонова",
        firstName: "Марфа",
        patronymic: "Селиверстовна",
        profession: [professions.kolkhoz], // колхозница
        // age: 69,
        alive: false,
        lastNameBeforeMarriage: "Косынко",
        genus: [genus.Peshekhonovy],
        birthDay: "10.09.1910",
        dethDay: "20.01.2000",
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471825",
        lastName: "Акиндинова",
        firstName: "Любовь",
        patronymic: "Гавриловна",
        profession: [professions.doctor],
        age: 69,
        alive: true,
        lastNameBeforeMarriage: "Григоренко",
        genus: [genus.Akindinovy],
        birthDay: "25.09.1954",
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471826",
        lastName: "Акиндинов",
        firstName: "Евгений",
        patronymic: "Константинович",
        profession: [professions.electricalEngineer],
        // age: 69,
        alive: false,
        genus: [{ genus: "Akindinovy", color: "secondary" }],
        birthDay: "28.05.1950",
        dethDay: "16.06.2011",
        bookmark: false
    },
];
