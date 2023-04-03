export const genus = {
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