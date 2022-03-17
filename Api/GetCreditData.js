import axios from "axios";

export default class GetCreditData {
    static async getCreditDataByNumber() {
        try {
            const response = axios.post('https://44fc-178-93-236-50.ngrok.io/getData', {
                accountNo: '6075220999900040190'

            })
            return response

        } catch (error) {
            console.error(error);
        }
    }
}
