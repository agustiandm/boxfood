import Axios from "axios";
import { showMessage, storeData } from '../../utils'
import { setLoading } from "./global";

const API_HOST = {
    url: 'http://foodmarket-backend.buildwithangga.id/api'
}

export const signUpAction = (dataRegister, photoReducer, navigation) => (dispatch) => {
    Axios.post(`${API_HOST.url}/register`, dataRegister)
        .then((res) => {
            const profile = res.data.data.user;
            const token = `${res.data.data.token_type} ${res.data.data.access_token}`;

            storeData('userProfile', profile);
            storeData('token', { value: token });

            if (photoReducer.isUpload) {
                const photoForUpload = new FormData();
                photoForUpload.append('file', photoReducer);
                Axios.post(`${API_HOST.url}/user/photo`, photoForUpload, {
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'multipart/form-data',
                    }
                })
                    .catch((err) => {
                        showMessage(
                            err?.response?.message || 'Uplaod photo tidak berhasil',
                        );
                    });
            }
            dispatch(setLoading(false));
            navigation.replace('SignUpSuccess');
        }).catch((err) => {
            dispatch(setLoading(false));
            showMessage(err?.response?.data?.message);
        });
}