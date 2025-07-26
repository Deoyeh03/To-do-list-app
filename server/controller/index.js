class HomeController {
    async main(req, res) {
            const locals = {
             title: 'To-Do List',  
            }
            try {
                const data = await todo.find();
                res.render('index', { locals, data });-*/
            } catch (error) {
             console.log("This is the error");
            }
    }
}

const homeController = new HomeController();
const home = homeController.main.bind(homeController);
module.exports = home;