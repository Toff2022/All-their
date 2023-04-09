export const genus = {
    Peshekhonovy: {
        _id: "1",
        name: "Пешехоновы",
        color: "primary"
    },
    Akindinovy: {
        _id: "2",
        name: "Акиндиновы",
        color: "secondary"
    },
    Kadochnikovy: {
        _id: "3",
        name: "Кадочниковы",
        color: "success"
    },
    Kolos: {
        _id: "4",
        name: "Колос",
        color: "danger"
    },
    Bondarevsky: {
        _id: "5",
        name: "Бондаревские",
        color: "info"
    },
    Lipinsky: {
        _id: "6",
        name: "Липинские",
        color: "dark"
    }
};

// const fetchAll = () =>
//     new Promise((resolve) => {
//         window.setTimeout(function () {
//             resolve(genus);
//         }, 2000);
//     });
// export default {
//     fetchAll
// };
export function fetchAll () {
    return genus
}