import baseUrl from '../Api/BaseURL';


const useUpateDataWithImg = async (url, parmas) => {
    const config={
        headers:{  'Content-Type': 'multipart/form-data'}

    }
    const res = await baseUrl.put(url, parmas ,config);
    console.log(res.status)
    console.log(res);
    
    return res;
}

const useUpdateData = async (url, parmas) => {
    const res = await baseUrl.put(url, parmas);
    return res;
}

export { useUpateDataWithImg, useUpdateData };        