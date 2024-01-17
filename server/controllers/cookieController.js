const cookieController = {};


//helper function to get random number
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

cookieController.setCookie = async(req , res, next) => {
    try {
        const { user_id } = res.locals.user;
        res.cookie('user_id', user_id, {expires: new Date(Date.now() + 3600000), httpOnly:true})
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
        
    }catch (error) {
        return next({
            log:`cookieController.verifyCookie: ${error}`,
            message: {err: 'cookie is not valid'},
            status: 401,
        });
    }
}
