import axios, { AxiosResponse } from 'axios';
import { Alert } from 'react-native';



export const makeRequest = async (
    endPointUrl: string,
    data?: any
): Promise<any> => {
    const baseURL = 'https://randomuser.me/api';
    let client = axios.create({
        baseURL,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    if (client)
        return client.get(endPointUrl, data)
            .then((response: AxiosResponse<any>) => {
                return response.data;
            })
            .catch((error: any) => {
                console.log(error);
                Alert.alert(
                    'Error'
                );
                return null;
            });
    else return null;
}