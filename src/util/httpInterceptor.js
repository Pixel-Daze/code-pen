import Helper from './helper'
export const request = function(config){
    return config
}

export const response = function(response){
    if(!response.data.success){
        Helper.toast(response.data.msg)
    }
    return response;
}