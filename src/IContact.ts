export default interface IContact {
    cell: string;
    email: string;
    name: {
        first: string;
        last: string;
        title: string;
    };
    phone: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
}