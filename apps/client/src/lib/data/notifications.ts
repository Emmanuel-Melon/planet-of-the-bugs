import {
    FETCH_REPOSITORIES_BY_TOPICS,
    GET_AVAILABLE_TOPICS,
    GET_SUBSCRIBED_REPOS,
} from "$lib/graphql/queries/repositories.js";

const notifications = [
    {
        id: 1,
        name: "Gyomei Himejima",
        avatar:
            "https://staticg.sportskeeda.com/editor/2021/12/d8fd2-16407278993535-1920.jpg",
        text: "We are proud to live and die as human beings.",
        active: false,
    },
    {
        id: 2,
        name: "Muzan Kibutsuji",
        avatar:
            "https://m.media-amazon.com/images/M/MV5BMzcyZjYxYzktMWZhMi00ZGFkLTllMTEtNjJjZjU4ODdlYzRmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
        text: "Prepare to witness the true terror of the Demong King!",
        active: true,
    },
    {
        id: 3,
        name: "Ryuk",
        avatar:
            "https://cdn.europosters.eu/image/750/canvas-print-death-note-ryuk-checkered-i147611.jpg",
        text: "Hahahahaha",
        active: false,
    },
];

const muzanURL =
    "https://m.media-amazon.com/images/M/MV5BMzcyZjYxYzktMWZhMi00ZGFkLTllMTEtNjJjZjU4ODdlYzRmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg";
const tengenURL =
    "https://rare-gallery.com/thumbnail/1375991-tengen-uzui-sound-hashira-demon-slayer-anime-kimetsu-no-yaiba.jpg";

const messages = [
    {
        id: 1,
        text: "Ah, the Sound Hashira. It seems we have finally crossed paths. Quite flashy!",
        senderAvatar: muzanURL,
        senderName: "Muzan Kibutsuji",
        timestamp: "2 hours ago"
    },
    {
        id: 2,
        text: "Muzan Kibutsuji, your reign of terror ends here.",
        senderAvatar: tengenURL,
        senderName: "tengen Uzui",
        timestamp: "2 hours ago"
    },
    {
        id: 3,
        text: "Your resistance is futile. I will crush you and all the Demon Slayers who dare oppose me.",
        senderAvatar: muzanURL,
        senderName: "Muzan Kibutsuji",
        timestamp: "2 hours ago"
    },
    {
        id: 4,
        text: "Your empty threats won't intimidate me, Muzan.",
        senderAvatar: tengenURL,
        senderName: "tengen Uzui",
        timestamp: "2 hours ago"
    },
    {
        id: 5,
        text: "Your arrogance blinds you, Muzan. We fight for a cause greater than ourselves, a cause that protects humanity from the darkness you embody.",
        senderAvatar: tengenURL,
        senderName: "tengen Uzui",
        timestamp: "2 hours ago"
    },

];

export const fetchNotifications = (): Promise<any[]> => {
    return new Promise((resolve, reject) => {
        setInterval(() => resolve(notifications), 1000);
    });
}

