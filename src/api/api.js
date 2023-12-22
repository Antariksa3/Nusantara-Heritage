import axios from "axios"

const apiUrl = process.env.REACT_APP_API_URL;

export const getDestination = async () => {
    const destinationList = await axios.get(`${apiUrl}/api/destination`)
    // console.log({ destination: destinationList.data.data })
    return destinationList.data.data
}

export const getFunfact = async () => {
    const funfactList = await axios.get(`${apiUrl}/api/funfact`)
    // console.log({ funfact: funfactList.data.data })
    return funfactList.data.data
}

export const getProvince = async () => {
    const provinceList = await axios.get(`${apiUrl}/api/getprovince`)
    console.log({ detailProvince: provinceList.data.province })
    return provinceList.data.province
}

export const getDetailProvince = async (id) => {
    const detailProvinceList = await axios.get(`${apiUrl}/api/getprovince/detail/${id}`)
    console.log({ detailProvince: detailProvinceList.data.data })
    return detailProvinceList.data.data
}