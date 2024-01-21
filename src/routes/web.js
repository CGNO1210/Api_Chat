import express from 'express';
import userController from '../controllers/userController';
import messageController from '../controllers/messageController';
import multer from 'multer';
const storage = multer.memoryStorage();
const upload = multer({ storage });

let router = express.Router();

let initWebRoutes = (app) => {
    //Đăng nhập
    router.post("/api/login", userController.handleLogin)
    //Đăng ký
    router.post("/api/register",upload.single('img'), userController.handleCreateNewUser)
    //Lấy ra tất cả user
    router.get('/api/getAllUser',userController.handleGetAllUser)
    //Tạo message (Gửi tin nhắn)
    router.post('/api/createMessage',messageController.createMessage)
    //Lấy ra tất cả tin nhắn (Load tất cả tin nhắn của user1 và user2)
    router.get('/api/getMessages',messageController.getMessageByUser1AndUser2)


    router.get('/login',(req,res) => {
        res.render('login.ejs')        
    })
    router.get('/register',(req,res) => {
        res.render('register.ejs')        
    })
    router.get("/temp", (req, res) => {
        res.render("temp.ejs")
    })
    router.get("/", (req, res) => {
        res.render("home.ejs")
    })
    return app.use("/", router);
}

export default initWebRoutes;