let defaultCity = '上海'
    // c# 中异常捕获
    // 语法：
    // try {
    //     有可能出现错误的代码写在这里
    // } catch {
    //     出错后的处理
    // }
    // 如果try中的代码没有出错， 则程序正常运行try中的内容后， 不会执行catch中的内容，
    // 如果try中的代码一但出错， 程序立即跳入catch中去执行代码， 那么try中出错代码后的所有代码就不再执行了.
try {
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (e) {}


export default {
    city: defaultCity
}