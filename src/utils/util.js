/**
 * Created by ryan.zhu on 2017/12/3.
 　......(\_/)
 　　......( '_')
 　　..../"NOBUG"\======░ ▒▓▓█D
 　　/"""""""""""""""""""\
 　　\_@_@_@_@_@_@_@/
 */
import conf from '@/config/conf';
export default {
    getProductPic:(url)=>{
        return url?conf.baseURL+url:'';
    }
}
