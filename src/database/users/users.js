export const users = 
[
    {
        id:"id-1",
        userName: "User-1"
    },
    {
        id: "id-2",
        userName: "User-2"
    },
    {
        id: "id-3",
        userName: "User-3"
    },
    {
        id: "id-4",
        userName: "User-4"
    },
    {
        id: "id-5",
        userName: "User-5"
    },
    {
        id: "id-6",
        userName: "User-6"
    },
    {
        id: "id-7",
        userName: "User-7"
    },
    {
        id: "id-8",
        userName: "User-8"
    },
    {
        id: "id-9",
        userName: "User-9"
    },
];

export const getUserName = idUser => {

    let userName = " ";

    users.forEach(e => {
        if(e.id === idUser)
            userName = e.userName;
    });

    return userName;
}