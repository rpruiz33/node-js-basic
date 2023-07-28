import {Router} from 'express'
const router=Router();
router.get('/', function(req, res){
    res.render ('index.ejs',{title: 'First web with node'});
})
router.get('/about', function(req, res){
    res.render('about.ejs',{title: 'about me'});
});
router.get('/contact', function(req, res){
    res.render('contact.ejs',{title: 'contact me'});
});
export default router;