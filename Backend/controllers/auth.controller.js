import User from "../models/user.model.js";

export const login = async (req, res) => {
    try {
        const {fullName,username,password,confirmpassword, gender} = req.body;

        if(password !== confirmpassword){
            return res.status(400).json({error:"passwords do not match"});
        }
        const user = await User.findOne({username})

            if(user){
                return res.status(400).json({error:"username already exists"});
            }

        
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
			fullName,
			username,
			password: hashedPassword,
			gender,
			profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
		});

        await newUser.save();

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
				username: newUser.username,
				profilePic: newUser.profilePic,
        })
    }
    catch(error){
        console.log("Error in signup controller", error.message);

        res.status(500).json({ error: "Internal Server Error"});
    }
    
}
