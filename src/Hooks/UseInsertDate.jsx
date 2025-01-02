import baseUrl from '../Api/BaseURL';


const useInsertDataWithImg = async (url, parmas) => {
    const config={
        headers:{  'Content-Type': 'multipart/form-data'}

    }
    const res = await baseUrl.post(url, parmas ,config);
    console.log(res.status)
    console.log(res);
    
    return res;
}

const useInsertData = async (url, parmas) => {
    const res = await baseUrl.post(url, parmas);
    return res;
}

export { useInsertData, useInsertDataWithImg };        