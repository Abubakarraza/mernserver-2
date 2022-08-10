const express = require('express');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const router = express.Router();
router.use(express.json());
const User = require("../model/userSchema");
router.get('/', (req, res) => {
    res.send("hello from router");
});
router.post('/', (req, res) => {
    res.json({ message: req.body })
});
router.post("/register", async (req, res) => {
    const { name, rollNo, email, password, cpassword, work,phone } = req.body;
   let token;
    try {
        if (!name || !rollNo || !email || !password || !cpassword || !work || !phone) {
            return res.status(422).json({
                error: "please filled all field"
            });

        };
        const userExist = await User.findOne({ email: email });
        console.log(userExist);
        if(password !== cpassword){
            return res.status(422).json({error:"password is not matched with cpassword"})
        }
        if (userExist) {
            return res.status(422).json({ error: "Email already exist" });
        };
        // generating token
        //  tokens=jwt.sign({email:email},process.env.PRIVATE_KEY);
        
        
        const user = new User({ name, email, password, cpassword, work,phone});
        // const checkEmail = await User.findOne({ email: email });
     
       
       
        await user.save();
          res.status(201).json({
                message: "user is successfully registered"
            })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "user is not registred" });
    }
    
    // const salt=await bcrypt.genSalt(4);
    
    // const hashPassword=await bcrypt.hash(req.body.password, salt);
    // console.log(salt);
    // console.log(hashPassword);
});
router.post("/login", async (req, res) => { 

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(422).json({ message: "please filled all field" })
        };
        const checkEmail = await User.findOne({ email: email });
        if (!checkEmail) {
            return res.status(400).json({ message: 'email wrong' });
        };
        const tokens=await checkEmail.generateAuthToken();
        if(!tokens) {
            return res.json({message:'token is not generated'})
        }
        // console.log(tokens);
        res.cookie("jwttoken",tokens)
        const passwordChecker=await bcrypt.compare(password,checkEmail.password);
       if(!passwordChecker){
        return res.status(400).json({message:'user is not found pass'})
       };
      
      
       if(passwordChecker){
        return res.status(200).json({message:"user is successfully login"})
       }
        // if (password !== checkEmail.password) {
        //     return res.status(400).json({ message: 'email or password wrong' })
        // }
        // if (password == checkEmail.password) {
        //     return res.status(200).json({ message: "user is successfully login" })
        // };
       
    } catch (error) {
        res.status(500).json({ message: 'invalid crediential' });
        console.log(error);
    }
})
module.exports = router;