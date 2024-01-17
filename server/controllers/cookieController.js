const cookieController = {};


//helper function to get random number
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

cookieController.setCookie = async(req , res, next) => {
    try {
        const { user_id } = res.locals.userID;
        const { username } = res.locals.userName;
        res.cookie('user_id', user_id);
        res.cookie('userName', username);
        return next()
    }catch (error) {
        return next({
            log:`cookieController.createCookie: ${error}`,
            message: {err: 'error in creating cookie'},
            status: 400,
        });
    }
}

cookieController.verifyCookie = async(req , res, next) => {
    try {
        if (!req.cookies.user_id || !req.cookies.userName) {
            console.log('req.cookies:', req.cookies);
            return next({
                log: "Express error handler caught in userController.verifycookie",
                status: 400,
                message: { err: "Missing cookies" },
              })
        }else{
            return next()
        }
    }catch (error) {
        return next({
            log:`cookieController.verifyCookie: ${error}`,
            message: {err: 'cookie is not valid'},
            status: 401,
        });
    }
}
module.exports = cookieController;