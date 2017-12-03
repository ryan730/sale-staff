/**
 * Created by ryan.zhu on 2017/11/23.
 　......(\_/)
 　　......( '_')
 　　..../"NOBUG"\======░ ▒▓▓█D
 　　/"""""""""""""""""""\
 　　\_@_@_@_@_@_@_@/
 */
import fetch from '@/utils/server';

export const test_post = data => fetch('/api/commodity/getAllCommodityChannel',data,'GET');

//添加商品渠道编码及价格
export const getAllCommodityChannel = data => fetch('/api/commodity/getAllCommodityChannel',data,'GET');

//按类型获取商品信息
export const getCommodityByType = data => fetch('/api/commodity/getCommodityByType',data,'GET');

//添加购物车
export const addCommodityToCart = data => fetch('/api/shoppingCart/addCommodityToCart', data, 'POST');

//获取购物车列表
export const getCartList = data => fetch('/api/shoppingCart/getCartList',data,'GET');

//获取单个商品信息
export const getCommodityChannelByID = data => fetch('/api/commodity/getCommodityChannelByID',data,'GET');

//删除购物车里的商品
export const delCommodity = data => fetch('/api/commodity/delCommodity',data,'POST');

